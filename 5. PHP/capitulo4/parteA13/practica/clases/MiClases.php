<?php

class MiClase {
    public $publica = "publica";
    protected $protegida = "protegida";
    private $privada = "privada";

    public function mostrarPropiedades()
    {
        echo $this->publica . "<br>";
        echo $this->protegida . "<br>";
        echo $this->privada;
    }
}

class ClaseHija extends MiClase {
    public $publica = "Nueva propiedad publica";
    protected $protegida = "Nueva propiedad protegida";
    private $privada = "Nueva propiedad privada";
}