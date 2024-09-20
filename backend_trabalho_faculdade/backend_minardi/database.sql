CREATE DATABASE ridecar;

USE ridecar;

CREATE TABLE usuario (
nome  VARCHAR(50) NOT NULL,
sobrenome VARCHAR(50) NOT NULL,
senha  VARCHAR(50) NOT NULL,
nascimento DATE,
telefone  VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL,
cidade VARCHAR(50) NOT NULL,
cpf  VARCHAR(50) NOT NULL PRIMARY KEY
);

CREATE TABLE viagem (
origem VARCHAR(50) NOT NULL,
id INT PRIMARY KEY AUTO_INCREMENT,
destino VARCHAR(50) NOT NULL,
data VARCHAR(50) NOT NULL,
hora VARCHAR(50) NOT NULL,
valor_carona VARCHAR(50) NOT NULL,
genero_condutor VARCHAR(50) NOT NULL,
marca   VARCHAR(50) NOT NULL,
modelo VARCHAR(50) NOT NULL,
ano VARCHAR(4) NOT NULL,
placa  VARCHAR(7) NOT NULL
);

CREATE TABLE recuperar_senha (
email  VARCHAR(50) NOT NULL
);

CREATE TABLE solicitar_carona (
local_partida  VARCHAR(50) NOT NULL,
local_destino  VARCHAR(50) NOT NULL,
data_e_hora  TIME,
preço DECIMAL(5,2) NOT NULL
);

CREATE TABLE perfil (
nome  VARCHAR(50) NOT NULL,
descricao  VARCHAR(50) NOT NULL,
editar_perfil  VARCHAR(50) NOT NULL,
nascimento  DATE,
cidade VARCHAR(50) NOT NULL,
email  VARCHAR(50) NOT NULL,
telefone  VARCHAR(50) NOT NULL
);

CREATE TABLE avaliar (
usuario VARCHAR(50) NOT NULL,
avaliação INT,
comentario VARCHAR(50) NOT NULL
);

 
 ALTER TABLE usuario ADD preferencia VARCHAR(20);