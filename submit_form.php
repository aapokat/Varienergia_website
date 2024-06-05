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
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $message = mysqli_real_escape_string($conn, $_POST['message']);

    // Insert form data into database
    $sql = "INSERT INTO form_submissions (name, email, message) VALUES ('$name', '$email', '$message')";

    if ($conn->query($sql) === TRUE) {
        // Prepare email
        $to = "aapo.katajala@gmail.com"; // Replace with your email address
        $subject = "New Form Submission";
        $body = "You have received a new form submission:\n\n";
        $body .= "Name: $name\n";
        $body .= "Email: $email\n";
        $body .= "Message: $message\n";
        $headers = "From: aapo.katajala@gmail.com"; // Replace with a valid "From" address

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
