CREATE DATABASE mvc;

USE mvc;

-- Tabla persons
CREATE TABLE persons (
	id int NOT NULL AUTO_INCREMENT,
    nombre varchar(50) NOT NULL,
    email varchar(255) NOT NULL,
    telefono varchar(10) NOT NULL,
    PRIMARY KEY (id)
);

-- Insertar datos en la tabla persons
INSERT INTO persons (
    nombre, email, telefono)
VALUES ("Joel", "joel.mt@gmail.com", "0123456789");

INSERT INTO persons (
    nombre, email, telefono)
VALUES ("Hayasaka", "haya.sk@gmail.com", "0123456789");

INSERT INTO persons (
    nombre, email, telefono)
VALUES ("Ichika", "chi.ka@gmail.com", "0123456789");

INSERT INTO persons (
    nombre, email, telefono)
VALUES ("Kaede", "kaede.deka@gmail.com", "0123456789");

INSERT INTO persons (
    nombre, email, telefono)
VALUES ("Saya", "saya.deelaina@gmail.com", "0123456789");

-- Tabla contacts
CREATE TABLE contacts (
	id int NOT NULL AUTO_INCREMENT,
    nombre varchar(50) NOT NULL,
    apellido varchar(50) NOT NULL,
    telefono varchar(10) NOT NULL,
    comentario varchar(255) DEFAULT NULL,
    PRIMARY KEY (id)
);

-- Insertar datos en la tabla contacts
INSERT INTO contacts (
    nombre, apellido, telefono, comentario)
VALUES ("Juan", "Ramirez", "0123456789", "Un tipo rancio");

INSERT INTO contacts (
    nombre, apellido, telefono, comentario)
VALUES ("Rosalia", "Kuroi", "0123456789", "Trabaja como monja en la catedral de Mondstland");

INSERT INTO contacts (
    nombre, apellido, telefono, comentario)
VALUES ("Gordo", "Edgar", "0123456789", "Come demasiado");

INSERT INTO contacts (
    nombre, apellido, telefono, comentario)
VALUES ("Barbara", "Idol", "0123456789", "Es la diacosina de la catedral de Mondstland");

INSERT INTO contacts (
    nombre, apellido, telefono, comentario)
VALUES ("Albedo", "Oro", "0123456789", "Humano sintetico");