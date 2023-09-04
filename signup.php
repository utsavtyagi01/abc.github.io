<?php
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Escape user inputs for security
$username = mysqli_real_escape_string($conn, $_POST['username']);
$password = mysqli_real_escape_string($conn, $_POST['password']);

// Check if username already exists
$query = "SELECT * FROM users WHERE username='$username'";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) {
    header("Location: login.php");
    exit;
}

// Insert user data into database
$sql = "INSERT INTO users (username, password) VALUES ('$username', '$password')";
if (mysqli_query($conn, $sql)) {
    header("Location: login.php");
    exit;
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($
