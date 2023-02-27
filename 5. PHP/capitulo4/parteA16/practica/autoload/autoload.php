<?php
    declare(strict_types = 1);

    use controladores\Controlador;
    use modelos\Modelo;

    spl_autoload_register(function($namespace) {
        $ruta = str_replace("\\", "/", $namespace) . ".php"; // controladores/Controlador.php
        if (file_exists($ruta)) {
            require_once($ruta);
        } else {
            echo "Error de spl_autoload_register: El archivo no existe. Probablemente la ruta de archivo no coincide con el namespace y el nombre de clase usados." ." Linea: " . __LINE__;
        }
    });

    $control1 = new Controlador;
    $modelo1 = new Modelo;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Autoload</title>
</head>
<body>
    <p>
        <?php
            echo $control1->metodo() . "<br>"; // Ejecutado Controlador
            echo $modelo1->metodo(); // Ejecutado Metodo
        ?>
    </p>
</body>
</html>