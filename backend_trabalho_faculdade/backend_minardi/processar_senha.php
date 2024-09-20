<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ridecar";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexão com o banco de dados falhou: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $sql = "INSERT INTO recuperar_senha(email) VALUES (?)";
    $stmt = $conn->prepare($sql);
    
    if ($stmt) {
        $stmt->bind_param("s", $email);
        
        if ($stmt->execute()) {
            echo "Email enviado com sucesso.";
        } else {
            echo "Erro ao Enviar Email: " . $stmt->error;
        }

        $stmt->close();
    } else {
        echo "Erro na preparação da instrução SQL: " . $conn->error;
    }
}

$conn->close();
?>
<a href="carona.html">Voltar</a>

