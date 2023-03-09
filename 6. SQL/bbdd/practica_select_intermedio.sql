CREATE DATABASE practica_select_intermedio;

USE practica_select_intermedio;

CREATE TABLE usuarios (
    id int NOT NULL AUTO_INCREMENT,
    nombre varchar(50) NOT NULL,
    pais varchar(100) NOT NULL,
    edad tinyint NOT NULL,
    PRIMARY KEY (id)
);
-- Insertar registros en la tabla usuarios
-- 5 registros:
INSERT INTO usuarios (
    nombre, pais, edad)
VALUES ("Joel", "Mondstadt", "19");

INSERT INTO usuarios (
    nombre, pais, edad)
VALUES ("Adriana", "Liyue", "18");

INSERT INTO usuarios (
    nombre, pais, edad)
VALUES ("Brian", "Mondstadt", "25");

INSERT INTO usuarios (
    nombre, pais, edad)
VALUES ("Luis", "Sumeru", "26");

INSERT INTO usuarios (
    nombre, pais, edad)
VALUES ("Carlos", "Liyue", "28");
-- 5 registros:
INSERT INTO usuarios (
    nombre, pais, edad)
VALUES ("Lucas", "Inazuma", "23");

INSERT INTO usuarios (
    nombre, pais, edad)
VALUES ("Diego", "Rossete", "19");

INSERT INTO usuarios (
    nombre, pais, edad)
VALUES ("Bosco", "Liyue", "50");

INSERT INTO usuarios (
    nombre, pais, edad)
VALUES ("Kaeya", "Mondstadt", "33");

INSERT INTO usuarios (
    nombre, pais, edad)
VALUES ("Lisa", "Mondstadt", "34");