<?php
session_start();
require "../includes/database_connect.php";

if (!isset($_SESSION['user_id'])) {
    echo json_encode([
        "success" => false
    ]);
    exit;
}

$booking_id = $_POST['booking_id'];

$sql = "DELETE FROM bookings
        WHERE id = $booking_id";

$result = mysqli_query($conn, $sql);

echo json_encode([
    "success" => $result
]);
?>