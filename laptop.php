<?php

require 'DB/conexion.php';
$cantidad = $_POST['cant'];

$sql = "INSERT INTO productos(nombre,cantidad,precio)
        VALUES('LAPTOP GAMER','$cantidad','255.70')";
       $result = mysqli_query($connection, $sql);

?>