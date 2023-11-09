package com.misiontic.Apparking.dao;

//import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.misiontic.Apparking.entities.Conductor;

public interface ConductorRepo extends CrudRepository<Conductor, Integer>{
   // Optional<Conductor> findByNombreConductor(String nombreConductor);
    
}
