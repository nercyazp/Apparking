
function cobrar(){
    var facturaId = document.getElementById("idInput").value;
    if(typeof(facturaId) === undefined | facturaId === "") {
        alert("debe ingresar una factura para poder cobrar");
        return;
    }
    var multa = document.getElementById("cobrarMultaInput").checked;
    var descuento = document.getElementById("cobrarDescuentoInput").checked;
    var fechaEntrada = document.getElementById("fechaEntradaInput").value;
    var fechaSalida = document.getElementById("fechaSalidaInput").value;
    
    let peticion = new XMLHttpRequest()
        peticion.open("GET", `http://localhost:8080/cobrar?descuento=${descuento}&multa=${multa}&fechaEntrada=${fechaEntrada}&fechaSalida=${fechaSalida}`)
        peticion.setRequestHeader("Content-Type", "application/json")
        peticion.responseType = 'json'
        peticion.onload = function () {
            console.log(peticion.response)
            document.getElementById("multaInput").value = peticion.response.multa;
            document.getElementById("descuentoInput").value = peticion.response.descuento;
            document.getElementById("subtotalInput").value = peticion.response.subtotal;
            document.getElementById("ivaInput").value = parseInt(peticion.response.total) - parseInt(peticion.response.subtotal);
            document.getElementById("totalInput").value = peticion.response.total;
        }
    peticion.send();
}
function consultarFactura() {

    const placa = document.getElementById("placaSalidaInput").value;

    console.log(placa)

    // Para probar como en postman, en POST y el tipo de formato en json
    //CREAR LA PETICION
    let peticion = new XMLHttpRequest()
    peticion.open("GET", "http://localhost:8080/get-factura?placa="+placa)
    peticion.setRequestHeader("Content-Type", "application/json")
    peticion.responseType = 'json'
    peticion.onload = function () {
        console.log(peticion.response)
        document.getElementById("idInput").value = peticion.response.idFactura;
        document.getElementById("fechaEntradaInput").value=peticion.response.fechaEntrada;
        document.querySelector("#fechaSalidaInput").value=peticion.response.fechaSalida;
        document.querySelector("#placaInput").value=peticion.response.vehiculo.placa
        document.getElementById("descuentoInput").value=peticion.response.valorDescuento
        document.getElementById("multaInput").value=peticion.response.valorMulta
        document.getElementById("subtotalInput").value=peticion.response.subtotal
        document.getElementById("ivaInput").value=peticion.response.valorIva
        document.querySelector("#totalInput").value=peticion.response.totalFactura
    }
    peticion.send()
}


