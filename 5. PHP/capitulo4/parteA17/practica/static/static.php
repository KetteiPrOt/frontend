<?php
    declare(strict_types = 1);

    # Sentencia static
    class Persona {
        public static $especie = "Humano";

        public static function saludar(): string
        {
            return "Hola Mundo!";
        }
    }

    # Propiedades estaticas
    class Perro {
        public static $especie = "Canino";

        public function saludar(): string
        {
            return "Hola, soy un " . $this->especie;
        }
    }

    $perro1 = new Perro;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sentancia static</title>
</head>
<body>
    <p>
        <?php
            # Sentencia static
            echo Persona::$especie . "<br>";    
            echo Persona::saludar();
        ?>
    </p>
    <p>
        <?php
            # Propiedades estaticas
            // echo $perro1->saludar();
            // // Notice: Accessing static property Perro::$especie as non static
            // // Warning: Undefined property: Perro::$especie
        ?>
    </p>
</body>
</html>