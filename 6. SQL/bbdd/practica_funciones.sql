CREATE DATABASE practica_funciones;

USE practica_funciones;

CREATE TABLE personas (
    id int NOT NULL AUTO_INCREMENT,
    nombre varchar(50) NOT NULL,
    apellidos varchar(100) NOT NULL,
    telefono varchar(10) NOT NULL,
    correo varchar(255) NOT NULL,
    fecha_nacimiento date NOT NULL,
    direccion varchar(255) DEFAULT NULL,
    descripcion varchar(500) DEFAULT NULL,
    estudio_diario time DEFAULT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE productos (
    id int NOT NULL AUTO_INCREMENT,
    nombre varchar(50) NOT NULL,
    precio float NOT NULL,
    PRIMARY KEY (id)
);

-- Insertar registros en la tabla personas
INSERT INTO personas (
    nombre, apellidos, telefono, correo, fecha_nacimiento, direccion, descripcion, estudio_diario)
VALUES ("Joel", "Mero Travez", "0123456789", "joelxxgamexx@gmail.com", "2023-01-01", 
        "Barrio X, calle y avenida", 
        "      Persona normal        ",
        "03:30:10");

INSERT INTO personas (
    nombre, apellidos, telefono, correo, fecha_nacimiento, direccion, descripcion, estudio_diario)
VALUES ("Carlos", "Altazaca Rodrigez", "0123456789", "carlos.r@gmail.com", "2018-05-23", 
        "Barrio X, calle y avenida", 
        "      Persona normal        ",
        "02:24:45");

INSERT INTO personas (
    nombre, apellidos, telefono, correo, fecha_nacimiento, direccion, descripcion, estudio_diario)
VALUES ("Maria", "Briones Sanchez", "0123456789", "maria.s@gmail.com", "2003-10-25", 
        "Barrio X, calle y avenida", 
        "      Persona normal        ",
        "04:45:13");

INSERT INTO personas (
    nombre, apellidos, telefono, correo, fecha_nacimiento, direccion, descripcion, estudio_diario)
VALUES ("Juan", "Lopez Velez", "0123456789", "juan.v@gmail.com", "2015-12-04", 
        "Barrio X, calle y avenida", 
        "      Persona normal        ",
        "03:12:23");

INSERT INTO personas (
    nombre, apellidos, telefono, correo, fecha_nacimiento, direccion, descripcion, estudio_diario)
VALUES ("Diego", "Edgar Ramirez", "0123456789", "diego.r@gmail.com", "2000-07-10", 
        "Barrio X, calle y avenida", 
        "      Persona normal        ",
        "01:11:55");

-- Insertar registros en la tabla productos
INSERT INTO productos (
    nombre, precio)
VALUES ("Zapatos", 12.34);

INSERT INTO productos (
    nombre, precio)
VALUES ("Camisa", 5.10);

INSERT INTO productos (
    nombre, precio)
VALUES ("Pantalon", 15.50);

INSERT INTO productos (
    nombre, precio)
VALUES ("Gorra", 3.75);

INSERT INTO productos (
    nombre, precio)
VALUES ("Guantes", 5.00);