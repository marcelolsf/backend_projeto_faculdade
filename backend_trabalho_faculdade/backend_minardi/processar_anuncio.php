<?php

ini_set('display_errors', '1');


$servername = "localhost:3306";
$username = "root";
$password = "";
$dbname = "ridecar";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexão com o banco de dados falhou: " . $conn->connect_error);
}

$origem = $_POST["origem"];
$destino = $_POST["destino"];
$data = $_POST["data"];
$hora = $_POST["hora"];
$valor = $_POST["valorCarona"];
$genero = $_POST["generoCondutor"];
$marca = $_POST["marcaCarro"];
$modelo = $_POST["modeloCarro"];
$ano = $_POST["anoCarro"];
$placa = $_POST["placaCarro"];

$sql = "INSERT INTO viagem (origem, destino, data, hora, valor_carona, genero_condutor, marca, modelo, ano, placa) 
        VALUES ('$origem', '$destino', '$data', '$hora', '$valor', '$genero', '$marca', '$modelo', '$ano', '$placa')";

$stmt = mysqli_query($conn, $sql);

if ($stmt) {
    echo "Anúncio realizado com sucesso.";
} else {
    echo "Erro ao Anunciar: " . mysqli_error($conn);
}
?>


<a href="buscar.html">Voltar</a>