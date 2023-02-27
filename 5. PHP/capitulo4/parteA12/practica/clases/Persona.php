<?php

class Persona {
    public function __construct(string $nombre = "", int $edad = 0, string $rol = "")
    {
        $this->nombre = $nombre;
        $this->edad = $edad;
        $this->rol = $rol;
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