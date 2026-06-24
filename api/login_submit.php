<?php
session_start();

require "../includes/database_connect.php";

$email = $_POST['email'];
// $password = $_POST['password'];
$password = $_POST['password'];
$password = sha1($password);
$sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
$result = mysqli_query($conn, $sql);

if (!$result) {
    echo "Something went wrong!";
    exit;
}

if (mysqli_num_rows($result) == 0) {
    echo "Login failed. Invalid email or password.";
    exit;
}

$row = mysqli_fetch_assoc($result);

$_SESSION['user_id'] = $row['id'];
$_SESSION['full_name'] = $row['full_name'];

header("location: ../index.php");
?>