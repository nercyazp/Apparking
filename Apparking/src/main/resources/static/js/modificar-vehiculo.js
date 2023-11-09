function modificarVehiculo() {

    if (document.getElementById("placaInput").value == "") {
        document.getElementById("placaInput").classList.add("is-invalid")
    } else {

        const vehiculo = {
            idVehiculo: document.getElementById("idInput").value,
            placa: document.getElementById("placaInput").value,
            marca: document.querySelector("#marcaInput").value,
            color: document.getElementById("colorInput").value
        }
        console.log(vehiculo)

        // Para probar como en postman, en POST y el tipo de formato en json
        //CREAR LA PETICION
        let peticion = new XMLHttpRequest()
        peticion.open("POST", "http://localhost:8080/create-vehiculo")
        peticion.setRequestHeader("Content-Type", "application/json")
        peticion.responseType = 'json'
        peticion.send(JSON.stringify(vehiculo)) //Convertir un String en formato Json
        peticion.onload = function () {

            console.log(peticion.response)
            window.location.replace("http://localhost:8080/listar-vehiculos.html");
        }

    }
}

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)

if (urlParams.has("id")) { // En este caso id es en nombre del parametro
    const id = urlParams.get("id") // ahora la constante id tiene el parámetro
    let peticion = new XMLHttpRequest()
    peticion.open("GET", "http://localhost:8080/get-vehiculo?id=" + id)
    peticion.responseType = "json"
    peticion.send()

    peticion.onload = function () {

        const vehiculo = peticion.response

        document.getElementById("idInput").value = vehiculo.idVehiculo
        document.getElementById("placaInput").value = vehiculo.placa
        document.querySelector("#marcaInput").value = vehiculo.marca
        document.getElementById("colorInput").value = vehiculo.color

    }

}
