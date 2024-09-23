<?php 
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

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
$id= $_POST['id'];
$sql = "SELECT price FROM prices WHERE id=$id";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
  $row = $result->fetch_assoc();
  echo json_encode(['status' => 'success', 'price' => $row['price']]);
} else {
  echo json_encode(['status' => 'error', 'message' => 'No price found for the given ID']);
}
}
else if ($_SERVER['REQUEST_METHOD'] === 'GET'){
  $sql = "SELECT id, price FROM prices";
  $result = $conn->query($sql);
  if ($result->num_rows > 0) {
    $prices = [];
    while($row = $result->fetch_assoc()) {
      $prices[] = ['id' => $row['id'], 'price' => $row['price']];
    }
    echo json_encode(['status' => 'success', 'prices' => $prices]);
  } else {
    echo json_encode(['status' => 'error', 'message' => 'No prices found']);
  }
}

$conn->close();
?>

