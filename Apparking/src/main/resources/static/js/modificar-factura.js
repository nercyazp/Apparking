function modificarFactura() {

        const factura = {
            idFactura: document.getElementById("idInput").value,
            fechaEntrada: document.getElementById("fechaEntradaInput").value,
            fechaSalida: document.querySelector("#fechaSalidaInput").value,
            placa: document.querySelector("#placaInput").value,
            valorDescuento: document.getElementById("descuentoInput").value,
            valorMulta: document.getElementById("multaInput").value,
            subtotal: document.getElementById("subtotalInput").value,        
            valorIva: document.getElementById("ivaInput").value,
            totalFactura: document.querySelector("#totalInput").value,
        }
        console.log(factura)

        // Para probar como en postman, en POST y el tipo de formato en json
        //CREAR LA PETICION
        let peticion = new XMLHttpRequest()
        peticion.open("POST", "http://localhost:8080/update-factura")
        peticion.setRequestHeader("Content-Type", "application/json")
        peticion.responseType = 'json'
        peticion.send(JSON.stringify(factura)) //Convertir un String en formato Json
        peticion.onload = function () {

            console.log(peticion.response)
            //muestra la tabla de factura actualizada
            window.location.replace("http://localhost:8080/listar-facturas.html");
        }

    }
