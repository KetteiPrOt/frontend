<?php 
    declare(strict_types = 1);

    require_once("clases/Persona.php");

    $usuario1 = new Persona("Joel", 18, "Programador");

    $usuario1->setWaifu("Elaina-san");

    $usuario2 = new Persona("Elaina-san", 14, "Bruja Ceniza");

    $usuario2->setWaifu("Hotsuki");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practica</title>
</head>
<body>
    <p>
        <?php
            echo "Usuario 1: " . $usuario1->nombre . ". Edad: " . $usuario1->edad . ". Rol: " . $usuario1->rol . ".";
            echo " Waifu: " . $usuario1->getWaifu() . ".";
        ?>
    </p>
    <p>
        <?php
            echo "Usuario 1: " . $usuario2->nombre . ". Edad: " . $usuario2->edad . ". Rol: " . $usuario2->rol . ".";
            echo " Waifu: " . $usuario2->getWaifu() . ".";
        ?>
    </p>
</body>
</html>