<?php 



$nombre = $_POST['nombre'];
$email = $_POST['email'];

$conexion = mysqli_connect('localhost', 'root', '','prueba');
$sql = "insert into prueba values (NULL, '$nombre', '$email')";
$ejecutar = mysqli_query($conexion, $sql);

$sql = "select * from prueba where 1 = 1";
$ejecutar = mysqli_query($conexion, $sql);

// $texto = array();
while($fila = mysqli_fetch_array($ejecutar)){
    echo "
    <tr>
        <td>$fila[0]</td>
        <td>$fila[1]</td>
        <td>$fila[2]</td>
    </tr>
    ";
}
mysqli_close($conexion);
?>