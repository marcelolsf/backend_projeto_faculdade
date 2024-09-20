<?php
$servername = "localhost:3306";
$username = "root";
$password = "";
$dbname = "ridecar";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexão com o banco de dados falhou: " . $conn->connect_error);
}

$local_partida = $_POST["origem"];
$local_destino = $_POST["destino"];
$data_e_hora = $_POST["horario"];
$preco = $_POST["preco"];

$sql = "INSERT INTO solicitar_carona (local_partida, local_destino, data_e_hora, preço) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);

if ($stmt) {
    $stmt->bind_param("ssss", $local_partida, $local_destino, $data_e_hora, $preco);
    
    if ($stmt->execute()) {
        echo "Carona encontrada com sucesso.";
    } else {
        echo "Erro ao buscar Carona: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Erro na preparação da instrução SQL: " . $conn->error;
}

$conn->close();
?>

<a href="reserva.html">Voltar</a>

