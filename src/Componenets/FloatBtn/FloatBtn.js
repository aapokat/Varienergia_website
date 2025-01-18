import React, { useState, useEffect } from "react";
import "./FloatBtn.css";
import PhoneIcon from "../Assets/images/phoneIcon.png";

const FloatBtn = () => {
    const questions = [
        { key: "name", question: "Mikä on nimesi?", placeholder: "Anna nimesi" },
        { key: "phone", question: "Mikä on puhelinnumerosi?", placeholder: "Anna puhelinnumerosi" },
        { key: "email", question: "Mikä on sähköpostiosoitteesi?", placeholder: "Anna sähköpostiosoitteesi" },
        { key: "message", question: "Kerro lyhyesti kohteesta.", placeholder: "Tietoja kohteesta..." },
    ];

    const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
    const [currentStep, setCurrentStep] = useState(0);
    const [chatLog, setChatLog] = useState([{ bot: questions[0].question }]);
    const [userInput, setUserInput] = useState("");
    const [isChatOpen, setChatOpen] = useState(false);
    const [isTyping, setTyping] = useState(false);

    const handleUserInput = (e) => {
        setUserInput(e.target.value);
    };

    const handleSend = () => {
        const cleanedInput = userInput.trim().replace(/\s+/g, " "); // Remove extra spaces and normalize input to single spaces
        if (cleanedInput === "") return;

        const currentQuestionKey = questions[currentStep].key;
        const updatedFormData = { ...formData, [currentQuestionKey]: cleanedInput };

        // Update the state with the latest user input
        setFormData(updatedFormData);

        // Add user's response and move to the next step
        const updatedChatLog = [...chatLog, { user: cleanedInput }];
        setChatLog(updatedChatLog);
        setUserInput("");
        setCurrentStep(currentStep + 1);

        // Add the next bot question
        if (currentStep + 1 < questions.length) {
            showTypingEffect(questions[currentStep + 1].question, updatedChatLog);
        } else {
            // Generate the final confirmation message
            const confirmationMessage = [
                "Tässä ovat antamasi tiedot:",
                `Nimi: ${updatedFormData.name || "Ei annettu"}`,
                `Puhelinnumero: ${updatedFormData.phone || "Ei annettu"}`,
                `Sähköposti: ${updatedFormData.email || "Ei annettu"}`,
                `Viesti: ${updatedFormData.message || "Ei annettu"}`,
                'Haluatko lähettää nämä tiedot? (Kirjoita "kyllä" tai "ei")',
            ].join("\n");

            // Display the confirmation message with typing effect
            showTypingEffect(confirmationMessage, updatedChatLog);
        }
    };

    const handleSubmitConfirmation = (response) => {
        const normalizedResponse = response.trim().toLowerCase(); // Trim unnecessary spaces and normalize case

        if (normalizedResponse === "kyllä") {
            fetch("https://varienergia.fi/submit_form.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams(formData),
            })
                .then(() => {
                    setChatLog([...chatLog, { user: response }, { bot: "Kiitos! Tietosi on lähetetty onnistuneesti." }]);
                })
                .catch(() => {
                    setChatLog([...chatLog, { user: response }, { bot: "Jotain meni pieleen. Yritä uudelleen myöhemmin." }]);
                });
        } else if (normalizedResponse === "ei") {
            // Ask if the chat should restart
            setChatLog([
                ...chatLog,
                { user: response },
                { bot: "Tietojen lähetys on peruttu. Aloitetaanko alusta? (Kirjoita \"kyllä\" tai \"ei\")" },
            ]);

            setCurrentStep(-1); // Special condition to handle restart confirmation input
        } else if (normalizedResponse === "aloita_alusta") {
            resetChat(); // Restart chat if invoked explicitly (optional)
        } else {
            // For invalid input, re-ask the confirmation question
            setChatLog([
                ...chatLog,
                { user: response },
                { bot: "Kirjoita vain \"kyllä\" tai \"ei\": Haluatko lähettää tiedot?" },
            ]);
        }
    };

    const handleChatInput = (e) => {
        e.preventDefault();
        if (isTyping) return;

        const cleanedInput = userInput.trim().replace(/\s+/g, " "); // Clean unnecessary spaces and rows

        // Handle restart confirmation
        if (currentStep === -1) {
            const normalizedResponse = cleanedInput.toLowerCase(); // Normalize input for case insensitive comparison

            if (normalizedResponse === "kyllä") {
                resetChat(); // Restart the chat
            } else if (normalizedResponse === "ei") {
                setChatLog([...chatLog, { user: cleanedInput }, { bot: "Palaa tarvittaessa uudelleen!" }]);
                setCurrentStep(-2); // End conversation entirely
            } else {
                setChatLog([
                    ...chatLog,
                    { user: cleanedInput },
                    { bot: "Kirjoita vain \"kyllä\" tai \"ei\": Aloitetaanko alusta?" },
                ]);
            }

            setUserInput(""); // Clear the user input box
            return;
        }

        if (currentStep >= questions.length) {
            // Confirm submission
            handleSubmitConfirmation(cleanedInput);
        } else {
            // Normal chat flow
            setUserInput(cleanedInput); // Optionally set cleaned input
            handleSend();
        }
    };

    /**
     * Function to simulate the bot "typing" each message letter by letter.
     */
    const showTypingEffect = (text, updatedChatLog) => {
        setTyping(true); // Begin typing animation
        let displayedMessage = ""; // Incrementally building the message
        const typingSpeed = 50; // Adjust typing speed (in ms)

        const typeInterval = setInterval(() => {
            displayedMessage += text[displayedMessage.length];
            if (displayedMessage.length === text.length) {
                // Typing is complete
                clearInterval(typeInterval);
                setTyping(false); // Typing animation ends

                // Add the completed message to the chat
                setChatLog([...updatedChatLog, { bot: displayedMessage }]);
            } else {
                // Update the chat log with the incomplete message
                setChatLog([...updatedChatLog, { bot: displayedMessage }]);
            }
        }, typingSpeed);
    };

    /**
     * Function to reset the progress in the chat.
     */
    const resetChat = () => {
        setFormData({ name: "", phone: "", email: "", message: "" });
        setCurrentStep(0);
        setChatLog([{ bot: questions[0].question }]);
        setUserInput("");
        setTyping(false);
    };

    /**
     * Toggles the chat visibility and resets it if closed.
     */
    const toggleChat = () => {
        if (isChatOpen) {
            resetChat(); // Reset the chat progress when closing
        }
        setChatOpen(!isChatOpen);
    };

    return (
        <div className="floatBtnContainer">
            {/* If the chat is closed, show the floating button */}
            {!isChatOpen && (
                <div className="floatBtn" onClick={toggleChat}>
                    <div className="floatBtnImg">
                        <img src={PhoneIcon} alt="Button_Img" className="btnImg" />
                    </div>
                </div>
            )}

            {isChatOpen && (
                <div className="chatBotWindow">
                    <div className="chatHeader">
                        <span>Jätä yhteydenottopyyntö</span>
                        <button className="exitButton" onClick={toggleChat}>X</button>
                    </div>
                    <div className="chatWindow">
                        {chatLog.map((entry, index) => (
                            <div
                                key={index}
                                className={entry.bot ? "botMessage" : "userMessage"}
                            >
                                {entry.bot
                                    ? entry.bot.split("\n").map((line, i) => (
                                        <span key={i}>
                          {line}
                                            <br/>
                      </span>
                                    ))
                                    : entry.user}
                            </div>
                        ))}
                    </div>
                    <form className="chatInputArea" onSubmit={handleChatInput}>
                        <textarea
                            type="text"
                            placeholder={
                                currentStep < 0
                                    ? "Kirjoita vastauksesi" // Default placeholder for restart/confirmation phase
                                    : questions[currentStep]?.placeholder // Use the question placeholder if it's valid
                            }
                            value={userInput}
                            onChange={handleUserInput}
                            className="chatTextarea"
                            disabled={isTyping} // Disable input during typing animation
                        />
                        <button type="submit" className="sendButton">
                            Lähetä
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default FloatBtn;
