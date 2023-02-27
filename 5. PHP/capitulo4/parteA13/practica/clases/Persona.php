<?php

class Persona {
    public function __construct(string $nombre = null, string $apellido = null, int $edad = 0)
    {
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->edad = $edad;
    }

    private $waifu;
    
    public function setWaifu(string $nombreWaifu = null)
    {
        $this->waifu = $nombreWaifu;
    }

    public function getWaifu(): string
    {
        return $this->waifu ? $this->waifu : "No tenemos waifu";
    }
}

class Otaku extends Persona {
    public function __construct(string $nombre = null, string $apellido = null, int $edad = 0)
    {
        parent::__construct($nombre, $apellido, $edad);
    }

    public function setWaifu(string $nombreWaifu = null): string
    {
        parent::setWaifu($nombreWaifu);
        return "$nombreWaifu best waifu :v";
    }
}