<?php
    declare(strict_types = 1);

    # Crear
    interface iTemplate {
        public function setVariable();
        public function getHTML();
    }   

    # Implementar
    class Template implements iTemplate {
        public function setVariable() {
            //
        }

        public function getHTML() {
            //
        }
    }

    # Extender
    interface A {
        public function prueba1();
    }

    interface B {
        public function prueba2();
    }

    interface C extends A, B {
        public function prueba3();
    }

    class Testing implements C {
        public function prueba1()
        {
            //
        }

        public function prueba2()
        {
            //
        }

        public function prueba3()
        {
            //
        }
    }

    # Clase Abstracta
    abstract class ClaseAbstracta {
        abstract protected function getValor();

        public function mostrarValor()
        {
            echo $this->getValor();
        }
    }

    class ClaseConcreta extends ClaseAbstracta {
        public function getValor(): string
        {
            return "Dato";
        }
    }

    $objeto = new ClaseConcreta;
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
    <p><?php $objeto->mostrarValor() ?></p>
</body>
</html>