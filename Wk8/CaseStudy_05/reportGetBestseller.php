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
  $javaQuantity = $conn->query("SELECT SUM(javaQuantity) FROM Orders");
  $cafeSingleQuantity = $conn->query("SELECT SUM(cafeQuantity) FROM Orders WHERE cafeDrinkId = 2");
  $cafeDoubleQuantity = $conn->query("SELECT SUM(cafeQuantity) FROM Orders WHERE cafeDrinkId = 3");
  $cappSingleQuantity = $conn->query("SELECT SUM(cappQuantity) FROM Orders WHERE cappDrinkId = 4");
  $cappDoubleQuantity = $conn->query("SELECT SUM(cappQuantity) FROM Orders WHERE cappDrinkId = 5");
  $quantities = array(
    "Just Java" => $javaQuantity->fetch_assoc(),
    "Cafe au Lait Single" => $cafeSingleQuantity->fetch_assoc(),
    "Cafe au Lait Double" => $cafeDoubleQuantity->fetch_assoc(),
    "Cappuccino Single" => $cappSingleQuantity->fetch_assoc(),
    "Cappuccino Double" => $cappDoubleQuantity->fetch_assoc(),
  );

$maxItem = array_keys($quantities, max($quantities))[0];
$maxQuantity = max($quantities);

echo '<pre>'; print_r($quantities); echo '</pre>';
echo json_encode(['status' => 'success', 'message' => "$maxItem quantity: $maxQuantity , $quantities"]);
} else {
echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}

$conn->close();
?>

