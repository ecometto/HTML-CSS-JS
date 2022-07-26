
document.addEventListener('load', getData())

// --------- GETING DATA WITH FETCH ----------
// function getData() {
//     const url = "https://fakerapi.it/api/v1/companies?_quantity=5"
//     fetch(url)
//         .then(res => res.json())
//         .then(data => showData(data.data))
// }

// --------- GETING DATA WITH AJAX ----------
function getData() {
    const url = "https://fakerapi.it/api/v1/companies?_quantity=5"

    $.ajax(
    {
        type: 'GET',
        url: url,
        success: function(res){
            showData(res.data)
        }
    }
)
}


function showData(data) {

    for (cada of data) {
        document.getElementById('datos').innerHTML += `         
        <li class="row border m-2">
            <div class="col-sm-4 p-1 d-flex justify-content-center">
                <div class="">
                    <img heigth="90px" src=${cada.image} alt="" >
                </div>
            </div>
            <div class="col-sm-8 d-flex justify-content-center align-items-center text-center">
                <div>
                    <u>Nombre:</u> ${cada.name} <br>
                    <u>Mail:</u> ${cada.email} <br>
                    <u>Telefono:</u>${cada.phone} <br>
                </div>
            </div>
        </li> `
    }
}