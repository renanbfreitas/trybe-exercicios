-- selecionar o primeiro e último nome dos atores
SELECT first_name, last_name FROM sakila.actor;

-- selecionar somente os primeiros nomes distintos
SELECT DISTINCT first_name FROM sakila.actor;

-- identificar quantos store_id distintos tem
SELECT DISTINCT store_id FROM sakila.customer;

-- aplicar DISTINCT a duas colunas
SELECT DISTINCT first_name, last_name FROM sakila.actor;

-- selecionar os 5 primeiros países
SELECT country_id, country FROM sakila.country LIMIT 7 OFFSET 10;

-- contar quantas linhas tem na tabela address
SELECT COUNT(*) FROM sakila.address;

-- contar quantos address_id tem e quantos distritos distintos tem
SELECT count(address_id), count(DISTINCT district) FROM sakila.address;

-- contar address e address (valores nulos são ignorados)
SELECT COUNT(address), COUNT(address2) FROM sakila.address;

-- contar somente as cidades do país 6
SELECT COUNT(city) FROM sakila.city WHERE country_id = 6;

-- qual é o país 6?
SELECT country FROM sakila.country WHERE country_id = 6;

-- contar as cidades agrupando por país
SELECT COUNT(city), country_id FROM sakila.city GROUP BY country_id;

-- ordenar pelo primeiro nome em ordem ascendente (default)
SELECT * FROM sakila.actor ORDER BY first_name;

-- ordenar pelo primeiro nome (ascendente) e pelo último nome (ascendente)
SELECT * FROM sakila.actor ORDER BY first_name ASC, last_name ASC;

-- DINÂMICA

-- Script de criação do banco e da tabela biblioteca

CREATE database IF NOT EXISTS faculdade;

USE faculdade;

CREATE TABLE IF NOT EXISTS biblioteca (
  `nome` VARCHAR(40) CHARACTER SET utf8,
  `emprestado` VARCHAR(3) CHARACTER SET utf8,
  `quantidade` INT,
  `ano_lancamento` INT,
  `vendas` INT
);

INSERT INTO faculdade.biblioteca VALUES
  ('Um Livro do Ano','Não',5,2019,350),
  ('Novas conquistas novas responsabilidades','Sim',10,2020,1412),
  ('O retorno do Jedi','Não',6,2019,845),
  ('Café ou Chá, eis a questão','Não',13,2020,1337);

-- Enunciados e resoluções

-- Eu quero somente os nomes dos livros cadastrados na biblioteca
SELECT nome FROM biblioteca;

-- Eu quero saber quantos livros temos cadastrados em nossa biblioteca
SELECT COUNT(*) FROM biblioteca;

-- Eu quero uma lista com 2 livros e suas informações, mas eu não quero o livro 'Um livro do Ano' e 'Novas conquistas novas responsabilidades'
SELECT * FROM biblioteca LIMIT 2 OFFSET 2;

-- Quero os livros mais recentes primeiro, e também em ordem alfabética
SELECT * 
FROM biblioteca 
ORDER BY ano_lancamento DESC, nome ASC;

-- Eu quero todas as informações do livro com maior estoque na biblioteca. Somente o com o maior estoque
SELECT * FROM biblioteca ORDER BY quantidade DESC LIMIT 1;

-- Eu quero criar uma lista com os 4 livros mais vendidos. Como poderia encontrar isso?
SELECT * FROM biblioteca ORDER BY vendas DESC LIMIT 4;
