package com.misiontic.Apparking.dao;


//import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.misiontic.Apparking.entities.Vehiculo;

public interface VehiculoRepo  extends CrudRepository<Vehiculo, Integer>{
    //Optional<Vehiculo> findByPlacaVehiculo(String placaVehiculoString);
    
}
