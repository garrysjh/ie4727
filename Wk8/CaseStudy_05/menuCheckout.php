<?php
include(".\credentials.php");
$servername = "localhost";
$username = "root";
$password = $credentials_password;
$dbname = "javajam";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die(json_encode(array("success" => false, "message" => "Connection failed: " . $conn->connect_error)));
}

$javaQuantity = $_POST['javaQuantity'];
$javaSubtotal = $_POST['javaSubtotal'];
$cafeDrinkId = $_POST['cafeDrinkId'];
$cafeQuantity = $_POST['cafeQuantity'];
$cafeSubtotal = $_POST['cafeSubtotal'];
$cappDrinkId = $_POST['cappDrinkId'];
$cappQuantity = $_POST['cappQuantity'];
$cappSubtotal = $_POST['cappSubtotal'];
$totalPrice = $_POST['totalPrice'];


$sql = "INSERT INTO Orders(javaQuantity, javaSubtotal, cafeDrinkId, cafeQuantity, cafeSubtotal, cappDrinkId, cappQuantity, cappSubtotal, totalPrice)
VALUES($javaQuantity, $javaSubtotal, $cafeDrinkId, $cafeQuantity, $cafeSubtotal, $cappDrinkId, $cappQuantity, $cappSubtotal, $totalPrice)";


if ($conn->query($sql) === TRUE) {
  echo json_encode(array("status" => "success", "message" => "Record updated successfully"));
} else {
  echo json_encode(array("status" => "fail", "message" => "Error updating record: " . $conn->error));
}

$conn->close();
?>

