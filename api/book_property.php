<?php
session_start();
require "../includes/database_connect.php";

if (!isset($_SESSION['user_id'])) {
    echo json_encode([
        "success" => false,
        "message" => "Please login first"
    ]);
    exit;
}

$user_id = $_SESSION['user_id'];

$property_id = $_POST['property_id'];
$college_name = $_POST['college_name'];
$move_in_date = $_POST['move_in_date'];
$duration = $_POST['duration'];
$occupants = $_POST['occupants'];

$sql = "INSERT INTO bookings
(user_id, property_id, college_name, move_in_date, duration, occupants)
VALUES
('$user_id', '$property_id', '$college_name', '$move_in_date', '$duration', '$occupants')";

$result = mysqli_query($conn, $sql);

if ($result) {
    echo json_encode([
        "success" => true,
        "message" => "Booking Successful!"
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Booking Failed!"
    ]);
}
?>