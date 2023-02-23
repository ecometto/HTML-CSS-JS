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
    var allData = []
    var tbody = document.getElementById('tbody')
    var random = document.getElementById('random')
    var prueba = document.getElementById('prueba')
    var selectMovil = document.getElementById('selectMovil')
    var fecha = document.getElementById('fecha')



    // ADDEVENTLISTENER -------------------------
    random.addEventListener('click', () => getRandom())
    prueba.addEventListener('click', ()=> getFilteredData())

    
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
    function getFilteredData(){
        datos=getData()
        let v=selectMovil.value    
        let f = fecha.value

        let filtered = datos.filter(element=> element.vehiculo == v)
        console.log("filtrado" ,filtered);

        let filtered2 = filtered.filter(element => (element.fecha).substring(0,10) == f)
        console.log("filtrado2" ,filtered2);
        
        showData(filtered2)

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
