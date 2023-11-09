function crearVehiculo() {

    if (document.getElementById("placaInput").value==""){
        document.getElementById("placaInput").classList.add("is-invalid")
    }else {

        const vehiculo = {
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