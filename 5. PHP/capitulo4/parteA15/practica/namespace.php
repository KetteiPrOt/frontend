<?php
    declare(strict_types = 1);

    require_once("carpeta1/Persona.php");
    require_once("carpeta2/Persona.php");

    use carpeta1\Persona as Persona1;
    use carpeta2\Persona as Persona 2;

    $humano1 = new Persona1;
    $humano2 = new Persona2;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Namespaces</title>
</head>
<body>
    <p>
        <?php
            echo $humano1->metodo() . "<br>";
            echo $humano2->metodo();
        ?>
    </p>
</body>
</html>