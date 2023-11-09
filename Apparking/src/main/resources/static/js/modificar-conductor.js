//Borrar Conductores
function borrarConductor() {
    const conductor = {
        idConductor: document.querySelector("#idInput").value,
    }
    console.log(conductor)

    //ELIMINAR LA PETICION
    let peticion = new XMLHttpRequest()
    peticion.open("POST", "http://localhost:8080/delete-conductor")
    peticion.setRequestHeader("Content-Type", "application/json")
    peticion.responseType = 'json'
    peticion.send(JSON.stringify(conductor)) //Convertir un String en formato Json
    peticion.onload = function () {
        window.location.replace("http://localhost:8080/listar-conductores.html");
    }

}

function modificarConductor() {

    if (document.getElementById("nombreInput").value == "") {
        document.getElementById("nombreInput").classList.add("is-invalid")
    } else {

        const conductor = {
            idConductor: document.getElementById("idInput").value,
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

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)

if (urlParams.has("id")) { // En este caso id es en nombre del parametro
    const id = urlParams.get("id") // ahora la constante id tiene el parámetro
    let peticion = new XMLHttpRequest()
    peticion.open("GET", "http://localhost:8080/get-conductor?id=" + id)
    peticion.responseType = "json"
    peticion.send()

    peticion.onload = function () {

        const conductor = peticion.response

        document.getElementById("idInput").value = conductor.idConductor
        document.getElementById("nombreInput").value = conductor.nombreConductor
        document.querySelector("#tipoDocumentoInput").value = conductor.tipoDocumento
        document.getElementById("numeroDocumentoInput").value = conductor.numeroDocumento
        document.getElementById("telefonoInput").value = conductor.telefono
        document.getElementById("mailInput").value = conductor.mail
    }

}
