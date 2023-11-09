package com.misiontic.Apparking.controllers;


import java.lang.StackWalker.Option;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Calendar;
import java.util.Date;
import java.util.Optional;
import java.util.concurrent.TimeUnit;

import javax.persistence.Convert;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.misiontic.Apparking.Dtos.Cobro;
import com.misiontic.Apparking.dao.ConductorRepo;
import com.misiontic.Apparking.dao.FacturaRepo;
import com.misiontic.Apparking.dao.VehiculoRepo;
import com.misiontic.Apparking.entities.Conductor;
import com.misiontic.Apparking.entities.Factura;
import com.misiontic.Apparking.entities.Vehiculo;

//@CrossOrigin(allowedHeaders = "*", origins = "*")
@RestController
public class Controlador {
    
    //CRUD of Conductor Entity ---------------------------------------
    @Autowired
    private ConductorRepo conductorRepo;
    //Crea-modifica
    @PostMapping("/create-conductor")
    public Conductor crearConductor(@RequestBody Conductor conductor){
        return conductorRepo.save(conductor);
    }

    @GetMapping("/show-conductores")
    public Iterable<Conductor> getConductores(){
        return conductorRepo.findAll();
    }

    @GetMapping("/get-conductor")
    public Conductor getConductor(@RequestParam int id){
        return conductorRepo.findById(id).get();
    }

    @PostMapping("/delete-conductor")
    public void borrarConductor(@RequestBody Conductor conductor){
        conductorRepo.deleteById(conductor.getIdConductor());
    }

    
    //CRUD of Conductor Vehiculo ----------------------------------------
    @Autowired
    private VehiculoRepo vehiculoRepo;
    //Crea-modifica
    @PostMapping("/create-vehiculo")
    public Vehiculo crearVehiculo(@RequestBody Vehiculo vehiculo){
        Vehiculo vh = vehiculoRepo.save(vehiculo);
        Factura f = new Factura();
        f.setFechaEntrada(Instant.now().toString());
        f.setVehiculo(vh);
        facturaRepo.save(f);
        return vh;
    }

    @GetMapping("/show-vehiculos")
    public Iterable<Vehiculo> getVehiculos(){
        return vehiculoRepo.findAll();
    }
    
    @GetMapping("/get-vehiculo")
    public Vehiculo getVehiculo(@RequestParam int id){
        return vehiculoRepo.findById(id).get();
    }

    @PostMapping("/delete-vehiculo")
    public void borrarVehiculo(@RequestBody Vehiculo vehiculo){
        vehiculoRepo.deleteById(vehiculo.getIdVehiculo());
    }

    //CRUD of factura  ----------------------------------------
    @Autowired
    private FacturaRepo facturaRepo;

    @PostMapping("/create-factura")
    public Factura crearFactura(@RequestBody Factura factura){
        
        return facturaRepo.save(factura);
    }

    @PostMapping("/update-factura")
    public Factura updateFactura(@RequestBody Factura factura){
        var facturaEntity = facturaRepo.findById(factura.getIdFactura()); // trae la factura de la BD
        factura.setVehiculo(facturaEntity.get().getVehiculo()); // Iguala el vehiculo a la factura
        return facturaRepo.save(factura);
    }


    @GetMapping("/show-facturas")
    public Iterable<Factura> getFacturas(){
        return facturaRepo.findAll();
    }

    /*@GetMapping("/get-factura")
    public Factura getFactura(@RequestParam int id){
        return facturaRepo.findById(id).get();
    }*/
    @GetMapping("/get-factura")
    public Factura getFactura(@RequestParam String placa){
        var f = facturaRepo.findFacturaByPlaca(placa).iterator().next();
        f.setFechaSalida(Instant.now().toString());
        return f;
    }
    @GetMapping("get-facturaFecha")
    public Iterable<Factura> getFactura(@RequestParam String rangoFechaMin, Optional<String> rangoFechaMax){
        Date rangoFechaMinD;
        Iterable<Factura> facturas = null;
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");        
        try {
            rangoFechaMinD = formatter.parse(rangoFechaMin);
        
            Calendar cal = Calendar.getInstance();  
            cal.setTime(rangoFechaMinD);  
                
            // use add() method to add the days to the given date  
            cal.add(Calendar.YEAR, 1);  
            Date rangoFechaMaxD = 
                rangoFechaMax.isPresent() ? 
                formatter.parse(rangoFechaMax.get())
                    : cal.getTime(); 
            facturas = facturaRepo.findFacturaByFechaIngreso(formatter.format(rangoFechaMinD), formatter.format(rangoFechaMaxD));
            
        }catch(ParseException e){  
            e.printStackTrace();  
        }  
        return facturas;
    }

    @GetMapping("/cobrar")
    public Cobro cobrar(@RequestParam boolean descuento, boolean multa, String fechaEntrada, String fechaSalida){
        Cobro cobro;
        var tarifaMinuto = 20;
        var tarifaMinima = 1200;
        float desc = 0.15f;
        var mul = 4000;
        var vmul = 0;
        float vdesc = 0;
        Date fechaEntra;
        Date fechaSal;
        float iva = 1.19f;
        float subtotal = 0;
        long minutes = 0;
        float total = 0;
        try {
            fechaEntra= new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss").parse(fechaEntrada);
            fechaSal= new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss").parse(fechaSalida);
            minutes = getDateDiff(fechaEntra, fechaSal, TimeUnit.MINUTES);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        if(minutes < 60){
            total = tarifaMinima;
        }else{            
            total = tarifaMinuto * minutes;
        }
        
        if(descuento){
           vdesc = total * desc;
           total= total - vdesc;
        }
        if(multa){
            vmul = mul;
            total += mul;
        }
        subtotal = total;
        total *= iva;
        cobro = new Cobro(vmul, total, vdesc, subtotal);
        return cobro;
    }
    @GetMapping("/plazas-disponibles")
    public int getPlazasDisponibles(){
        var plazasDisponibles = 20;
        int plazasOcupadas = facturaRepo.findCantidadPlazasOcupadas();
        return plazasDisponibles - plazasOcupadas; 
    }
    //utilidades
    private long getDateDiff(Date date1, Date date2, TimeUnit timeUnit) {
        long diffInMillies = date2.getTime() - date1.getTime();
        return timeUnit.convert(diffInMillies,TimeUnit.MILLISECONDS);
    }

}
