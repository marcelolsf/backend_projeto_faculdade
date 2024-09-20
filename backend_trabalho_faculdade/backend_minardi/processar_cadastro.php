<?php
$servername = "localhost:3306";
$username = "root";
$password = "";
$dbname = "ridecar";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexão com o banco de dados falhou: " . $conn->connect_error);
}

$nome = $_POST["txtNome"];
$sobrenome = $_POST["txtSobrenome"];
$email = $_POST["txtEmail"];
$senha = $_POST["senha"];
$cpf = $_POST["txtCPF"];
$telefone = $_POST["telefone"];
$data_nascimento = $_POST["data_nascimento"];
$cidade = $_POST["cidade"];
$preferencia = $_POST["preferencia"];

$senha_hash = password_hash($senha, PASSWORD_DEFAULT);

$sql = "INSERT INTO usuario (nome, sobrenome, email, senha, cpf, telefone, nascimento, cidade, preferencia) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssssss", $nome, $sobrenome, $email, $senha_hash, $cpf, $telefone, $data_nascimento, $cidade, $preferencia);

if ($stmt->execute()) {
    echo "Cadastro realizado com sucesso.";
} else {
    echo "Erro ao cadastrar: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>

<a href="buscar.html">Voltar</a>

