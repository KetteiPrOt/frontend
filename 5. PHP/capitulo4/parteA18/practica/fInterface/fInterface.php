<?php
    declare(strict_types = 1);

    class Humano {
        private $nombre = "Sin datos", $apellido_materno = "Sin datos", $apellido_paterno = "", $dni = "Sin datos";

        public function setNombre(string $nombre): object
        {
            $this->nombre = $nombre;
            return $this;
        }

        public function setApellidos(string $apellido_materno, string $apellido_paterno): object
        {
            $this->apellido_materno = $apellido_materno;
            $this->apellido_paterno = $apellido_paterno;
            return $this;
        }

        public function setDni(string $dni): object
        {
            $this->dni = $dni;
            return $this;
        }

        public function getInformacion(): string
        {
            $info = "Nombre: " . $this->nombre . 
                    ". Apellidos: " . $this->apellido_paterno . " " .  $this->apellido_materno . 
                    ". DNI: " . $this->dni . ".";

            return $info;
        }
    }

    $humano1 = new Humano;
    $humano1->setNombre("Fernando Joel")->setApellidos("Mero", "Travez")->setDni("23412345455");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fluent Interface</title>
</head>
<body>
    <p>
        <?php
            echo $humano1->getInformacion(); // Nombre: Fernando Joel. Apellidos: Travez Mero. DNI: 23412345455.
        ?>
    </p>
</body>
</html>