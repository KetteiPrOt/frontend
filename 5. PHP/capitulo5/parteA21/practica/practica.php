<?php
    declare(strict_types = 1);

    # Verificar que son URLs validas y capturar el ID de los videos
    $url1 = "https://youtu.be/xGaXH7spCyA"; $url2 = "https://www.youtube.com/watch?v=xGaXH7spCyA";

    $patron = "%^(?:https://)?(?:www\.)?(?:youtu\.be/|youtube\.com/watch\?v=)(\w{1,100})%";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificar URL</title>
</head>
<body>
    <h4>Verificar que son URLs validas y capturar el ID de los videos</h4>
    <p>
        <?php
            preg_match($patron, $url1, $matches1);

            print_r($matches1); echo "<br>";
            // Array ( [0] => https://youtu.be/xGaXH7spCyA [1] => xGaXH7spCyA )

            preg_match($patron, $url2, $matches2);

            print_r($matches2);
            // Array ( [0] => https://www.youtube.com/watch?v=xGaXH7spCyA [1] => xGaXH7spCyA )
        ?>
    </p>
</body>
</html>