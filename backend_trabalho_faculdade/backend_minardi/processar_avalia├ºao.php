<?php


$servername = "localhost:3306";
$username = "root";
$password = "";
$dbname = "ridecar";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexão com o banco de dados falhou: " . $conn->connect_error);
}

$usuario = $_POST["usuario"];
$avaliação = $_POST["avaliacao"];
$comentario = $_POST["comentario"];



$sql = "INSERT INTO avaliar (usuario, avaliação, comentario) VALUES ('$usuario', '$avaliação', '$comentario')";
$stmt = mysqli_query($conn, $sql);

if ($stmt) {
    echo "Avaliação enviada com sucesso.";
} else {
    echo "Erro ao avaliar: " . mysqli_error($stmt);
}

?>

<a href="buscar.html">Voltar</a>

