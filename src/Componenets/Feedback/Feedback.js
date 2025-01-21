import './feedback.css';
import { useState, useEffect } from 'react';
import image7 from '../Assets/images/referenssi/ref1e.jpg';
import image8 from '../Assets/images/referenssi/ref2e.jpg';
import image9 from '../Assets/images/referenssi/ref3e.jpg';
import image10 from '../Assets/images/referenssi/ref4e.jpg';
import image11 from '../Assets/images/referenssi/ref5e.jpg';
import image12 from '../Assets/images/referenssi/ref6e.jpg';
import image13 from '../Assets/images/referenssi/ref7e.jpg';
import image14 from '../Assets/images/referenssi/ref8e.jpg';
import image15 from '../Assets/images/referenssi/ref9e.jpg';
import image16 from '../Assets/images/referenssi/ref1j.jpg';
import image17 from '../Assets/images/referenssi/ref2j.jpg';
import image18 from '../Assets/images/referenssi/ref3j.jpg';
import image19 from '../Assets/images/referenssi/ref4j.jpg';
import image20 from '../Assets/images/referenssi/ref5j.jpg';
import image21 from '../Assets/images/referenssi/ref6j.jpg';
import image22 from '../Assets/images/referenssi/ref7j.jpg';
import image23 from '../Assets/images/referenssi/ref8j.jpg';
import image24 from '../Assets/images/referenssi/ref9j.jpg';

// Separate arrays for images and comments
const pictures = [
    image7, image16,
    image8, image17,
    image9, image18,
    image10, image19,
    image11, image20,
    image12, image21,
    image13, image22,
    image14, image23,
    image15, image24,
];

const comments = [
    '”Kyllä tuli hyvä, ollaan supertyytyväisiä🔥 \nKiitos vielä!🙌🏻” -nainen, kiiminki',
    '”Väri Energian työntekijät huomioivat meidän tarpeet ja suorittivat urakan joustavasti tarpeitemme mukaan. Maalaus sujui aikataulussa ja lopputulos tyydyttää silmää. ” -tyytyväinen asiakas, Muhos',
    '”Työ hoitui nopeasti ja ammattimaisesti. Olen tyytyväinen” - mies, Oulu',
    '”Väri Energian maalarit maalasivat omakotitaloni huolellisesti, joustavasti ja tehokkaasti kilpailukykyisellä hinnalla. Heidän työssään näkyi kaikin tavoin intohimo heidän ammattiaan kohtaan." -Opettaja, Oulu',
    '"Homma todella tapahtui energisesti, joten yrityksen nimi ei ole tuulesta temmattu. Pohjatyöt ja loppusiivous olivat asianmukaiset. Vahva suositus” -Opettaja, Oulu',
];

const Feedback = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // For images
    const [currentCommentIndex, setCurrentCommentIndex] = useState(0); // For comments
    const [isPaused, setIsPaused] = useState(false); // Pause state for hover functionality

    // Auto-rotate images every 4 seconds
    useEffect(() => {
        if (!isPaused) {
            const imageInterval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pictures.length);
            }, 4000);

            return () => clearInterval(imageInterval); // Cleanup interval on unmount
        }
    }, [isPaused]);

    // Auto-rotate comments every 6 seconds
    useEffect(() => {
        if (!isPaused) {
            const commentInterval = setInterval(() => {
                setCurrentCommentIndex((prevIndex) => (prevIndex + 1) % comments.length);
            }, 8000);

            return () => clearInterval(commentInterval); // Cleanup interval on unmount
        }
    }, [isPaused]);

    const nextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % pictures.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((currentImageIndex - 1 + pictures.length) % pictures.length);
    };

    const nextComment = () => {
        setCurrentCommentIndex((currentCommentIndex + 1) % comments.length);
    };

    const prevComment = () => {
        setCurrentCommentIndex((currentCommentIndex - 1 + comments.length) % comments.length);
    };

    const handleMouseEnter = () => {
        setIsPaused(true); // Pause rotation
    };

    const handleMouseLeave = () => {
        setIsPaused(false); // Resume rotation
    };

    const getPosition = (index, currentIndex, arrayLength) => {
        if (index === currentIndex) {
            return 'center'; // Currently active
        } else if (index === (currentIndex - 1 + arrayLength) % arrayLength) {
            return 'left'; // Left position
        } else if (index === (currentIndex + 1) % arrayLength) {
            return 'right'; // Right position
        }
        return 'hidden'; // Hidden for the rest
    };

    return (
        <div className="feedback" id="feedback-section">
            <h1 className="feedbackHeadline">Kohteitamme</h1>

            {/* Images Slider */}
            <div className="reviews-slider">
                {pictures.map((picture, index) => (
                    <div
                        key={index}
                        className={`review ${getPosition(index, currentImageIndex, pictures.length)}`}
                        style={{ backgroundImage: `url(${picture})` }}
                        onMouseEnter={index === currentImageIndex ? handleMouseEnter : null}
                        onMouseLeave={index === currentImageIndex ? handleMouseLeave : null}
                    ></div>
                ))}
            </div>

            {/* Navigation for images */}
            <div className="arrows">
                <button onClick={prevImage}>Edellinen Kuva</button>
                <button onClick={nextImage}>Seuraava Kuva</button>
            </div>

            {/* Comments Slider */}
            <h2 className="comments-headline">Asiakaskokemukset</h2>
            <div className="comments-slider">
                {comments.map((comment, index) => (
                    <div key={index} className={`comment-box ${getPosition(index, currentCommentIndex, comments.length)}`}>
                        <p className="comment">{comment}</p>
                    </div>
                ))}
            </div>

            {/* Navigation for comments */}
            <div className="arrows">
                <button onClick={prevComment}>Edellinen Kommentti</button>
                <button onClick={nextComment}>Seuraava Kommentti</button>
            </div>
        </div>
    );
};

export default Feedback;
