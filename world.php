<?php
header("Access-Control-Allow-Origin: *"); // Allow fetch requests from any origin


$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';

// See if GET request variables exist
if (isset($_GET['country'])) {
  $country = $_GET['country'];
} else {
  // Set default for when GET request is empty
  $country = '';
}

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
  //Original Query:
//$stmt = $conn->query("SELECT * FROM countries");
  // Modified Query:
$stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

?>

<table>
  <thead>
    <tr>
      <th>Country Name</th>
      <th>Continent</th>
      <th>Independence Year</th>
      <th>Head of State</th>
    </tr>
  </thead>
  <tbody>
    <?php foreach ($results as $row): ?>
    <tr>
      <td><?= $row['name']; ?></td>
      <td><?= $row['continent']; ?></td>
      <td><?= $row['independence_year']; ?></td>
      <td><?= $row['head_of_state']; ?></td>
    </tr>
    <?php endforeach; ?>
  </tbody>
</table>