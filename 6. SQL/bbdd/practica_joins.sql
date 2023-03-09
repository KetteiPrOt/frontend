CREATE DATABASE practica_joins;

USE practica_joins;

CREATE TABLE personas (
    id int NOT NULL AUTO_INCREMENT,
    nombre varchar(50) NOT NULL,
    telefono varchar(10) NOT NULL,
    correo varchar(255) NOT NULL,
    actividad_id int DEFAULT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE actividades (
    id int NOT NULL AUTO_INCREMENT,
    fecha_hora datetime NOT NULL,
    lugar varchar(100) NOT NULL,
    asunto varchar(255) NOT NULL,
    persona_id int DEFAULT NULL,
    PRIMARY KEY (id),
    CONSTRAINT FOREIGN KEY (persona_id) REFERENCES personas (id)
    ON DELETE restrict ON UPDATE restrict
);

-- Insertar registros en la tabla personas
INSERT INTO personas (
    nombre, telefono, correo, actividad_id)
VALUES ("Amber", "0123456789", "amber.a@gmail.com", 1);

INSERT INTO personas (
    nombre, telefono, correo)
VALUES ("Lisa", "0123456789", "lisa.l@gmail.com");

INSERT INTO personas (
    nombre, telefono, correo)
VALUES ("Kaeya", "0123456789", "kaeya.k@gmail.com");

INSERT INTO personas (
    nombre, telefono, correo, actividad_id)
VALUES ("Barbara", "0123456789", "barbara.b@gmail.com", 3);

INSERT INTO personas (
    nombre, telefono, correo, actividad_id)
VALUES ("Fischl", "0123456789", "amy.a@gmail.com", 4);

-- Insertar registros en la tablas actividades
INSERT INTO actividades (
    fecha_hora, lugar, asunto, persona_id)
VALUES ("2023-03-10 14:30:00",
        "Mondstadt, arbol levantaviento",
        "Mision de exploracion con Amber. Que alegria va a ser genial UwU.",
        1);

INSERT INTO actividades (
    fecha_hora, lugar, asunto)
VALUES ("2023-03-11 11:00:00",
        "Mondstadt, valle dalapua",
        "Mision: exterminar un campamento hilichurl en solitario.");

INSERT INTO actividades (
    fecha_hora, lugar, asunto, persona_id)
VALUES ("2023-03-12 17:00:00",
        "Mondstadt, catedral",
        "Operacion de limpieza a la catedral.",
        4);

INSERT INTO actividades (
    fecha_hora, lugar, asunto, persona_id)
VALUES ("2023-03-13 10:30:00",
        "Mondstadt, valle estelar",
        "Cita con Fischl. Va a ser SUPER GENIAL UwU.",
        5);

INSERT INTO actividades (
    fecha_hora, lugar, asunto)
VALUES ("2023-03-13 16:10:00",
        "Liyue, gremio de aventureros",
        "Reclamar las recompensas del dia.");