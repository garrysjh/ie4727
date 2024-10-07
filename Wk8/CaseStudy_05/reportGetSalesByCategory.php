<?php 
header('Content-Type: application/json');
include("credentials.php");
$servername = "localhost";
$username = "root";
$password = $credentials_password;
$dbname = "javajam";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
if ($_SERVER['REQUEST_METHOD'] === 'GET'){
  $nullQuantity = $conn->query("SELECT SUM(javaQuantity) FROM Orders")->fetch_assoc()['SUM(javaQuantity)'];
  $singleQuantity = $conn->query("SELECT SUM(cappQuantity) + (SELECT SUM(cafeQuantity) FROM Orders WHERE cafeDrinkId=2) as singleQuantity FROM Orders WHERE cappDrinkId=4;")->fetch_assoc()['singleQuantity'];
  $doubleQuantity = $conn->query("SELECT SUM(cappQuantity) + (SELECT SUM(cafeQuantity) FROM Orders WHERE cafeDrinkId=3) as doubleQuantity FROM Orders WHERE cappDrinkId=5;")->fetch_assoc()['doubleQuantity'];

  $nullSubtotal = $conn->query("SELECT SUM(javaSubtotal) FROM Orders")->fetch_assoc()['SUM(javaSubtotal)'];
  $singleSubtotal = $conn->query("SELECT SUM(cappSubtotal) + (SELECT SUM(cafeSubtotal) FROM Orders WHERE cafeDrinkId=2) as singleSubtotal FROM Orders WHERE cappDrinkId=4;")->fetch_assoc()['singleSubtotal'];
  $doubleSubtotal = $conn->query("SELECT SUM(cappSubtotal) + (SELECT SUM(cafeSubtotal) FROM Orders WHERE cafeDrinkId=3) as doubleSubtotal FROM Orders WHERE cappDrinkId=5;")->fetch_assoc()['doubleSubtotal'];
  
  $total = $conn->query("SELECT SUM(cappSubtotal)+SUM(cafeSubtotal)+SUM(javaSubtotal) AS total FROM Orders")->fetch_assoc()['total'];
echo json_encode(['status' => 'success', 
'nullQuantity' => $nullQuantity, 
'singleQuantity' => $singleQuantity,
'doubleQuantity' => $doubleQuantity,

'nullSubtotal' => $nullSubtotal,
'singleSubtotal' => $singleSubtotal,
'doubleSubtotal' => $doubleSubtotal,
'total' => $total
]);
} else {
echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}

$conn->close();
?>

