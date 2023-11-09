//Consultar toda la tabla de Conductores
function getConductores() {
    let peticion = new XMLHttpRequest()
    peticion.open("GET", "http://localhost:8080/show-conductores")
    peticion.responseType = "json"
    peticion.send()
    
    peticion.onload = function () {

        console.log(peticion.response)

        const array = peticion.response

           
    let filasTabla = `<th>ID</th>
        <th>Nombre</th>
        <th>Tipo de documento</th>
        <th>Numero de documento</th>
        <th>Telefono</th>
        <th>Mail</th>
        <th>Acciones</th>`

    for (let i = 0; i < array.length; i++) {
        filasTabla += `<tr>
            <td>${array[i].idConductor }</td>
            <td>${array[i].nombreConductor }</td>
            <td>${array[i].tipoDocumento }</td>
            <td>${array[i].numeroDocumento }</td>
            <td>${array[i].telefono }</td>
            <td>${array[i].mail }</td>
            <td><a href="/modificar-conductor.html?id=${ array[i].idConductor }">Modificar</a></td>
        </tr>` 
        
    }
    document.getElementById("table").innerHTML = filasTabla 

        }
    }

  getConductores()