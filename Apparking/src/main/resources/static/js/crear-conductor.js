function crearConductor() {

    if (document.getElementById("nombreInput").value==""){
        document.getElementById("nombreInput").classList.add("is-invalid")
    }else {

        const conductor = {
            nombreConductor: document.getElementById("nombreInput").value,
            tipoDocumento: document.querySelector("#tipoDocumentoInput").value,
            numeroDocumento: document.getElementById("numeroDocumentoInput").value,
            telefono: document.getElementById("telefonoInput").value,
            mail: document.getElementById("mailInput").value
        }
        console.log(conductor)

        // Para probar como en postman, en POST y el tipo de formato en json
        //CREAR LA PETICION
        let peticion = new XMLHttpRequest()
        peticion.open("POST", "http://localhost:8080/create-conductor")
        peticion.setRequestHeader("Content-Type", "application/json")
        peticion.responseType = 'json'
        peticion.send(JSON.stringify(conductor)) //Convertir un String en formato Json
        peticion.onload = function () {

        console.log(peticion.response)
        window.location.replace("http://localhost:8080/listar-conductores.html");

        }
}
}