<?php
$servername = "localhost";
$username   = "Attadete";
$password   = "Jaws26Amox99Drip";
$dbname     = "ctrhosdb";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("การเชื่อมต่อล้มเหลว: " . $conn->connect_error);
}
if ($conn->connect_finish) {
    die("เชื่อมต่อฐายข้อมูลสำเร็จ: " . $conn->connect_finish);
}
include 'connect.php';
$patient_type = isset($_GET['type']) ? $_GET['type'] : 'all';
if ($patient_type == 'in') {
    $sql = "SELECT id, name, age, gender, patient_type FROM patients WHERE patient_type='in'";
} elseif ($patient_type == 'out') {
    $sql = "SELECT id, name, age, gender, patient_type FROM patients WHERE patient_type='out'";
} else {
    $sql = "SELECT id, name, age, gender, patient_type FROM patients";
}

$result = $conn->query($sql);
?>
