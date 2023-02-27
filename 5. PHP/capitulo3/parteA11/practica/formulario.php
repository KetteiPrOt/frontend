<?php 
    declare(strict_types = 1);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formularios</title>
    <style>
        form {
            width: 30%;
        }
    </style>
</head>
<body>
    <h1>Practica de formularios con PHP</h1>

    <form action="procesar.php" method="POST" enctype="multipart/form-data">
        <fieldset>
            <legend>Formulario</legend>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label for="inputNombre">
                                Nombre:
                            </label>
                        </td>
                        <td>
                            <input type="text" id="inputNombre" name="nombre" minlength="4" maxlength="75" required>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="inputEdad">
                                Edad:
                            </label>
                        </td>
                        <td>
                            <input type="number" id="inputEdad" name="edad" min="0" max="100" required>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="hombre">
                                Hombre
                            </label>
                            <input type="radio" name="genero" value="h" id="hombre">
                        </td>
                        <td>
                            <label for="mujer">
                                Mujer
                            </label>
                            <input type="radio" name="genero" value="m" id="mujer">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" name="roles[]" value="administrador" id="administrador">
                            <label for="administrador">
                                Administrador
                            </label>
                        </td>
                        <td>
                            <input type="checkbox" name="roles[]" value="editor" id="editor">
                            <label for="editor">
                                Editor
                            </label>

                            <input type="checkbox" name="roles[]" value="moderador" id="moderador">
                            <label for="moderador">
                                Moderador
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="inputFile">
                                Foto:
                            </label>
                        </td>
                        <td>
                            <input type="file" name="imagen" id="inputFile">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="submit" value="enviar">
                        </td>
                    </tr>
                </tbody>
            </table>
        </fieldset>
    </form>
</body>
</html>