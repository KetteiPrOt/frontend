<?php
    declare(strict_types = 1);

    /* 
        Este es un programa que guarda nombres de personas de diferentes lugares del mundo
    */
    class Persona {
        private $nombre;

        public function setNombre(string $nombre = "")
        {
            $this->nombre = $nombre;
        }

        public function getNombre(): string
        {
            return $this->nombre;
        }
    }

    trait Latino {
        public function saludo(): string
        {
            return "Hola rancio";
        }
    }

    trait Armado {
        public function disparar(): string
        {
            return "*Le dispara epicamente*";
        }
    }

    trait Europeo {
        public function saludo(): string
        {
            return "Hola tio";
        }
    }

    class Peruano extends Persona {
        use Latino, Armado;
    }

    class Espaniol extends Persona {
        use Europeo;
    }

    $peruano1 = new Peruano;

    $peruano1->setNombre("Gutierrez Rancies");

    $espaniol1 = new Espaniol;

    $espaniol1->setNombre("Guarro Lucias");
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
            echo $peruano1->saludo() . ". Mi nombre es " . $peruano1->getNombre() . ". " . $peruano1->disparar() . "<br>";
            echo $espaniol1->saludo() . ". Mi nombre es " . $espaniol1->getNombre() . "." . "<br>"
        ?>
    </p>
</body>
</html>