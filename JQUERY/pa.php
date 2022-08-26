<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<form action="" id="form" name="myform">
    <input type="text" name="nombre" id="nombre" placeholder="ingrese su nombre">
    <input type="text" name="email" id="email" placeholder="ingrese su email">
    <button id="boton">click</button>
</form>

<div>
<form method="GET" action="#">
        <input type="text" placeholder="filtrar nombre">
        <button type="submit">buscar</button>
</form>
</div>

<div id="res">
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>Mail</th>
            </tr>
        </thead>
        <tbody id="tbody">

        </tbody>
    </table>


</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script>
$(document).ready(function () {
    var res = document.getElementById('res')
    $('#boton').click(function (e) { 
        e.preventDefault();
        var data = $('#form').serialize();

        $.ajax({
            type: "POST",
            url: "pa1.php",
            data,
            success: function (response) {
                $('#tbody').html(response)
            }
              
        });
    });


});

</script>
</body>
</html>