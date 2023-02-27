<?php
    declare(strict_types = 1);

    $nombre = $_REQUEST["nombre"];
    $edad = $_REQUEST["edad"];

    $genero = $_REQUEST["genero"] == "h" ? "Masculino" : "Femenino";

    $roles = $_REQUEST["roles"];
    $roles = implode(", ", $roles);

    // Mover imagen
    $imagen = $_FILES["imagen"]; $archivo = __FILE__;
    $carpeta = str_replace("procesar.php", "media/", $archivo);
    $ruta = $carpeta . $imagen["name"];
    move_uploaded_file($imagen["tmp_name"], $ruta);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Informacion Recuperada</title>
</head>
<body>
    <p>
        <?php 
            echo "Usuario: $nombre. Edad: $edad. Genero: $genero. <br>";
            echo "Roles: $roles.";
        ?>
    </p>
    <p>
        <?php
            echo "La imagen " . $imagen["name"] . " fue guardada correctamente.";
        ?>
    </p>
</body>
</html>