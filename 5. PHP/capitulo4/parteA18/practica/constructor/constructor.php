<?php
    declare(strict_types = 1);

    class Humano {
        public function __construct(private string $nombre, private string $apellido_materno, private string $apellido_paterno, private string $dni)
        {
            $this->nombre = $nombre;
            $this->apellido_materno = $apellido_materno;
            $this->apellido_paterno = $apellido_paterno;
            $this->dni = $dni;
        }

        public function getInformacion(): string
        {
            $info = "Nombre: " . $this->nombre . 
                    ". Apellidos: " . $this->apellido_paterno . " " .  $this->apellido_materno . 
                    ". DNI: " . $this->dni . ".";

            return $info;
        }
    }

    $humano1 = new Humano("Fernando Joel", "Mero", "Travez", "23412345455");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Propiedades del Contructor</title>
</head>
<body>
    <p>
        <?php
            echo $humano1->getInformacion(); // Nombre: Fernando Joel. Apellidos: Travez Mero. DNI: 23412345455.
        ?>
    </p>
</body>
</html>