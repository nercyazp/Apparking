

const navbarHtml = `<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
<div class="container-fluid">
    <a class="navbar-brand" href="#">Apparking</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
        aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto">
            <li class="nav-item">
                <a class="nav-link active" href="/">Inicio</a>
            </li> 
                  
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true"
                  aria-expanded="false">Registro de vehiculos</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="/crear-vehiculo.html">Ingresar nuevo Vehiculo</a>
                  <a class="dropdown-item" href="/listar-vehiculos.html">Consultar Vehiculos registrados</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true"
                  aria-expanded="false">Salida de Vehiculo</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="/modificar-factura.html">Facturar</a>
                  <a class="dropdown-item" href="/listar-facturas.html">Consultar Factura de Vehiculos</a>
                </div>
              </li>
              <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true"
                aria-expanded="false">Conductores</a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="/crear-conductor.html">Ingresar nuevo Conductor</a>
                <a class="dropdown-item" href="/listar-conductores.html">Lista de Conductores</a>
              </div>
              </li>
              <li class="nav-item">
              <button type="button" class="btn btn-primary" onclick="consultarPlazas()">
                Plazas Disponibles
            </button>
              </li>  
        </ul>
        <form class="d-flex">
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Cerrar sesión</button>

        </form>
    </div>
</div>
</nav>`;
document.getElementById("navbar").innerHTML = navbarHtml;
function consultarPlazas(){
    let peticion = new XMLHttpRequest()
        peticion.open("GET", `http://localhost:8080/plazas-disponibles`)
        peticion.setRequestHeader("Content-Type", "application/json")
        peticion.responseType = 'json'
        peticion.onload = function () {
            alert(`Hay ${peticion.response} de 20 plazas disponibles`);
            
        }
    peticion.send();

}