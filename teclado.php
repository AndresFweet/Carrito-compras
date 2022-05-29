<?php

require 'DB/conexion.php';
$cantidad = $_POST['cant'];

$sql = "INSERT INTO productos(nombre,cantidad,precio)
        VALUES('TECLADO GAMER','$cantidad','25.40')";
       $result = mysqli_query($connection, $sql);

?>