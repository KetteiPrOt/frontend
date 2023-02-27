<?php
    declare(strict_types = 1);

    require_once("clases/Persona.php");

    $otaku1 = new Otaku("Joel", "Mero", 18);
    $otaku1->setWaifu("Elaina-san");
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
        print_r($otaku1); // Otaku Object ( [waifu:Persona:private] => Elaina-san [nombre] => Joel [apellido] => Mero [edad] => 18 )
    ?>
    </p>
</body>
</html>