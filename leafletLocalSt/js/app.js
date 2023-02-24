// CARGANDO MAPA 
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);


// ------------------------------------------------------------------------------
//  ----------------------------------------------------------------------------- 
window.addEventListener('load', () => {
    // VARIABLES -------------------------------
    var tbody = document.getElementById('tbody')
    const random = document.getElementById('random')
    const prueba = document.getElementById('prueba')
    const selectMovil = document.getElementById('selectMovil')
    const fecha = document.getElementById('fecha')
    const all = document.getElementById('all')



    // ADDEVENTLISTENER -------------------------
    random.addEventListener('click', () => getRandom())
    selectMovil.addEventListener('change', () => getFilteredData())
    fecha.addEventListener('change', () => getFilteredData())
    all.addEventListener('click', () => {
        selectMovil.value = ""
        fecha.value = "";

        allData = getData()
        showData(allData)
    })



    // LOADING DATA IN PAGE 
    allData = getData()
    showData(allData)


    // FUNCIONES: -------------------------------
    //GETTING DATA FROM LOCALSTORAGE
    function getData() {
        let datos = ""
        if (localStorage.getItem('data')) {
            datos = JSON.parse(localStorage.getItem('data'))
        } else {
            datos = []
        }
        return datos
    }

    // SHOWING DATA
    function showData(datos) {
        if (datos.length !== 0) {
            tbody.innerHTML = "";

            for (dato of datos) {
                tbody.innerHTML += `
                <tr>
                <th>#</th>
                <th>${dato.vehiculo}</th>
                <th>${dato.fecha}</th>
                <th>${dato.lat}</th>
                <th>${dato.lng}</th>
                <th><button>show</button></th>
                </tr>
                `
            }
        } else {
            tbody.innerHTML = "";
            tbody.innerHTML = "NO HAY DATOS PARA MOSTRAR";
        }
    }

    // FILTER DATA
    function getFilteredData() {
        datos = getData()
        var ve = selectMovil.value
        var fe = fecha.value
        var filtered2 = []

        // console.log("fecha", fe);
        // console.log("vehiculo", ve);

        if (fe !== "" && ve !== "") {
            filtered2 = datos.filter(element => {
                return element.vehiculo == ve && (element.fecha).substring(0, 10) == fe
            })
        }
        else if (ve !== "") {
            filtered2 = datos.filter(element =>  element.vehiculo == ve)
            console.log(filtered2);
        }
        else{
            filtered2 = datos.filter(element =>  (element.fecha).substring(0, 10) == fe)
            console.log(filtered2);
        }

        showData(filtered2)
        all.checked = false
    }

    // GENERAR DATOS ALEATORIOS  
    function getRandom() {

        let vehiculo = Math.round((Math.random() * (3 - 1) + 1))
        let lat = ((Math.random() * (31500 - 31300) + 31300) / -1000).toFixed(4)
        let lng = ((Math.random() * (+64300 - 64100) + 64100) / -1000).toFixed(4)

        let obj = {
            vehiculo: vehiculo,
            fecha: new Date(),
            lat: lat,
            lng: lng,
        }

        storageData(obj)
        allData = getData()
        showData(allData)
    }


    function storageData(obj) {
        allData = getData()
        allData.push(obj)
        localStorage.setItem("data", JSON.stringify(allData))
    }

})
