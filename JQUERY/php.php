<?php 

$con = mysqli_connect('localhost','root','','prueba');

if($con){
    echo "conectado";
}

$query = 'call getData()';
$ejecutar = mysqli_query($con, $query);

while ($fila = mysqli_fetch_array($ejecutar)){
    echo $fila[1] ."<br>";
}


?>