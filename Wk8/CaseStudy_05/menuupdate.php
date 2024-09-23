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

$newprice = $_POST['price'];
$id = $_POST['id'];

$sql = "UPDATE prices SET price=$newprice WHERE id=$id";


if ($conn->query($sql) === TRUE) {
  echo json_encode(array("status" => "success", "message" => "Record updated successfully"));
} else {
  echo json_encode(array("status" => "fail", "message" => "Error updating record: " . $conn->error));
}

$conn->close();
?>

