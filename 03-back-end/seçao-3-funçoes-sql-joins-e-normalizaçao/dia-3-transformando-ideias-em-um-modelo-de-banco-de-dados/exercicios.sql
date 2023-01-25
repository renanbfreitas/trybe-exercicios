-- Crie o banco de dados usando os comandos DROP SCHEMA IF EXISTS, CREATE e USE para derrubar um banco de dados de mesmo nome caso ele já exista, recria-lo e garantir que este banco de dados seja o banco que receberá os comandos a seguir.
DROP SCHEMA IF EXISTS zoologico;
CREATE SCHEMA zoologico;
USE zoologico;

-- Crie a tabela de animais
CREATE TABLE animal(
    animal_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    especie VARCHAR(50) NOT NULL,
    sexo VARCHAR(50) NOT NULL,
    idade INT NOT NULL,
    localizacao VARCHAR(50) NOT NULL
);

-- Crie a tabela de gerentes
CREATE TABLE gerente(
    gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
);

-- Crie a tabela de cuidador relacionando cada cuidador a seu gerente usando uma chave estrangeira (foreign key)
CREATE TABLE cuidador(
    cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerente (gerente_id)
);

-- Crie a tabela de relação entre os animais e seus cuidadores
CREATE TABLE animal_cuidador(
    animal_id INT,
    cuidador_id INT,
    CONSTRAINT PRIMARY KEY(animal_id, cuidador_id),
    FOREIGN KEY (animal_id) REFERENCES animal (animal_id),
    FOREIGN KEY (cuidador_id) REFERENCES cuidador (cuidador_id)
);