<?php
    declare(strict_types = 1);

    $cadena1 = "Voy volando desde Ecuador. Parti ayer.";
    $cadena2 = "Voy andando desde Peru. Parti hoy.";

    $expresion = "/Voy (?:vol|and)ando desde (Ecuador|Peru). Parti (?:hoy|ayer)./";

    preg_match($expresion, $cadena1, $macthes1);
    preg_match($expresion, $cadena2, $macthes2);
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
            print_r($macthes1); echo "<br>";
            // Array ( [0] => Voy volando desde Ecuador. Parti ayer. [1] => vol [2] => Ecuador [3] => ayer )
            
            print_r($macthes2);
            // Array ( [0] => Voy andando desde Peru. Parti hoy. [1] => and [2] => Peru [3] => hoy )
        ?>
    </p>
</body>
</html>