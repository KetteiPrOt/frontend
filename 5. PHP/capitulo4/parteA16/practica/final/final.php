<?php
    declare(strict_types = 1);

    # Sentencia final en clases
    final class Hogar {
        public $color, $seguridad;

        public function saludo(): string
        {
            return "Bienvenido a mi hogar";
        }
    }

    // class Departamento extends Hogar {
    //     // Fatal error: Class Departamento cannot extend final class Hogar

    //     public function saludo(): string
    //     {
    //         return "Bienvenido a mi Departamento";
    //     }
    // }

    # Sentencia final en metodos
    class Edificio {
        public $color, $seguridad;

        final public function saludo(): string
        {
            return "Bienvenido, este es un Edificio.";
        }
    }

    // class Casa extends Edificio {
    //     // Fatal error: Cannot override final method Edificio::saludo()

    //     public function saludo(): string
    //     {
    //         return "Bienvenido, esta es una Casa.";
    //     }
    // }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Final</title>
</head>
<body>
    <p>
        <?php?>
    </p>
</body>
</html>