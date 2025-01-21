<?php
// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Enable CORS
header("Access-Control-Allow-Origin: https://www.varienergia.fi"); // Allow requests from any origin. In production, replace '*' with 'http://your-react-app-domain.com'
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight request (OPTIONS)
if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    http_response_code(200);
    exit();
}

// Database configuration
$servername = "localhost"; // Assuming your database is on the same server. Change if provided with a different hostname.
$username = "variener_kayttis";
$password = "Katajala";
$dbname = "variener_form_submissions_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handling form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate form data
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $phone = mysqli_real_escape_string($conn, $_POST['phone']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $message = mysqli_real_escape_string($conn, $_POST['message']);

    // Insert form data into database
    $sql = "INSERT INTO form_submissions (name, phone, email, message) VALUES ('$name', '$phone', '$email', '$message')";

    if ($conn->query($sql) === TRUE) {
        // Prepare email
        $to = "juho.sallinen@varienergia.fi, teppo.ahonen@varienergia.fi"; // Replace with your email address
        $subject = "$name\n Yhteydenottopyyntö";
        $body = "Tämä viesti on automaatti viesti värienergia.fi yhteydenottolomakkeesta\n";
        $body = "Olet saanut uuden yhteydenoton/tarjous pyynnön:\n\n";
        $body .= "Nimi: $name\n";
        $body .= "Puhelinnumero: $phone\n";
        $body .= "Sähköposti: $email\n";
        $body .= "Viesti: $message\n";
        $headers = "From: info@varienergia.fi"; // Replace with a valid "From" address

        // Send email
        if (mail($to, $subject, $body, $headers)) {
            echo "Form submission successful and email sent!";
        } else {
            echo "Form submission successful but email sending failed.";
        }
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close connection
$conn->close();
?>
