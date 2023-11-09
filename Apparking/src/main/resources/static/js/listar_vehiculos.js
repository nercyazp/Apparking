
//Consultar toda la tabla de vehiculos
function getVehiculos() {
    
    let peticion = new XMLHttpRequest()
    peticion.open("GET", "http://localhost:8080/show-vehiculos")
    peticion.responseType = "json"
    peticion.send()
    
    peticion.onload = function () {
        console.log(peticion.response);

        const array = peticion.response
        pintarVehiculos(array);
        }
    }

  getVehiculos()
  function pintarVehiculos(array){
    let filasTabla = `<th>ID</th>
        <th>Placa</th>
        <th>marca</th>
        <th>color</th>
        <th>Acciones</th>`

    for (let i = 0; i < array.length; i++) {
        filasTabla += `<tr>
            <td>${array[i].idVehiculo }</td>
            <td>${array[i].placa }</td>
            <td>${array[i].marca }</td>
            <td>${array[i].color }</td>
            <td><a href="/modificar-vehiculo.html?id=${ array[i].idVehiculo }">Modificar</a></td>
        </tr>` 
        
    }
    document.getElementById("table").innerHTML = filasTabla 
  }
  