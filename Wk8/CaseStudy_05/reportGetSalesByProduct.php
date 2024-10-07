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
  $javaQuantity = $conn->query("SELECT SUM(javaQuantity) FROM Orders")->fetch_assoc()['SUM(javaQuantity)'];
  $cafeSingleQuantity = $conn->query("SELECT SUM(cafeQuantity) FROM Orders WHERE cafeDrinkId = 2")->fetch_assoc()['SUM(cafeQuantity)'];
  $cafeDoubleQuantity = $conn->query("SELECT SUM(cafeQuantity) FROM Orders WHERE cafeDrinkId = 3")->fetch_assoc()['SUM(cafeQuantity)'];
  $cappSingleQuantity = $conn->query("SELECT SUM(cappQuantity) FROM Orders WHERE cappDrinkId = 4")->fetch_assoc()['SUM(cappQuantity)'];
  $cappDoubleQuantity = $conn->query("SELECT SUM(cappQuantity) FROM Orders WHERE cappDrinkId = 5")->fetch_assoc()['SUM(cappQuantity)'];

  $javaSubtotal = $conn->query("SELECT SUM(javaSubtotal) FROM Orders")->fetch_assoc()['SUM(javaSubtotal)'];
  $cafeSingleSubtotal = $conn->query("SELECT SUM(cafeSubtotal) FROM Orders WHERE cafeDrinkId = 2")->fetch_assoc()['SUM(cafeSubtotal)'];
  $cafeDoubleSubtotal = $conn->query("SELECT SUM(cafeSubtotal) FROM Orders WHERE cafeDrinkId = 3")->fetch_assoc()['SUM(cafeSubtotal)'];
  $cappSingleSubtotal = $conn->query("SELECT SUM(cappSubtotal) FROM Orders WHERE cappDrinkId = 4")->fetch_assoc()['SUM(cappSubtotal)'];
  $cappDoubleSubtotal = $conn->query("SELECT SUM(cappSubtotal) FROM Orders WHERE cappDrinkId = 5")->fetch_assoc()['SUM(cappSubtotal)'];
  $total = $conn->query("SELECT SUM(cappSubtotal)+SUM(cafeSubtotal)+SUM(javaSubtotal) AS total FROM Orders")->fetch_assoc()['total'];
echo json_encode(['status' => 'success', 
'javaQuantity' => $javaQuantity, 
'cafeSingleQuantity' => $cafeSingleQuantity,
'cafeDoubleQuantity' => $cafeDoubleQuantity,
'cappSingleQuantity' => $cappSingleQuantity,
'cappDoubleQuantity' => $cappDoubleQuantity,
'javaSubtotal' => $javaSubtotal,
'cafeSingleSubtotal' => $cafeSingleSubtotal,
'cafeDoubleSubtotal' => $cafeDoubleSubtotal,
'cappSingleSubtotal' => $cappSingleSubtotal,
'cappDoubleSubtotal' => $cappDoubleSubtotal,
'total' => $total
]);
} else {
echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}

$conn->close();
?>

