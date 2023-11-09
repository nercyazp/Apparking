//Consultar toda la tabla de vehiculos
function getFacturas() {
    let fechaMin = document.getElementById("startDate").value;
    let fechaMax = document.getElementById("endDate").value;
    let url = "http://localhost:8080/show-facturas";
    if(fechaMin !== undefined && fechaMin.length > 0){
        url = `http://localhost:8080/get-facturaFecha?rangoFechaMin=${fechaMin}`;
        if(fechaMax !== undefined && fechaMax.length > 0){
            url += `&rangoFechaMax=${fechaMax}`;
        }
    }
    let peticion = new XMLHttpRequest()
    peticion.open("GET", url)
    peticion.responseType = "json"
    peticion.send()
    
    peticion.onload = function () {

        console.log(peticion.response)

        const array = peticion.response

           
    let filasTabla = `<th>ID(Num. Ticket)</th>
        <th>Fecha de Entrada</th>
        <th>Fecha de Salida</th>
        <th>Placa</th>
        <th>Valor Descuento</th>
        <th>Valor Multa</th>
        <th>Valor Subtotal</th>
        <th>Valor Iva</th>
        <th>Valor Total</th>`

    for (let i = 0; i < array.length; i++) {
        filasTabla += `<tr>
            <td>${array[i].idFactura }</td>
            <td>${array[i].fechaEntrada }</td>
            <td>${array[i].fechaSalida }</td>
            <td>${array[i].vehiculo?.placa }</td>
            <td>${array[i].valorDescuento }</td>
            <td>${array[i].valorMulta }</td>
            <td>${array[i].subtotal }</td>
            <td>${array[i].valorIva }</td>
            <td>${array[i].totalFactura }</td>
        </tr>` 
        
    }
    document.getElementById("table").innerHTML = filasTabla 

        }
    }

  getFacturas()