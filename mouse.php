<?php

require 'DB/conexion.php';
$cantidad = $_POST['cant'];

$sql = "INSERT INTO productos(nombre,cantidad,precio)
        VALUES('MOUSE GAMER','$cantidad','19.99')";
       $result = mysqli_query($connection, $sql);

?>