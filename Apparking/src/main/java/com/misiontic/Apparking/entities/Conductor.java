package com.misiontic.Apparking.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.Data;
//import lombok.RequiredArgsConstructor;

//@RequiredArgsConstructor
@Data
@Entity
public class Conductor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idConductor;
    @Column
    private String nombreConductor;
    @Column
    private String tipoDocumento;
    @Column
    private int numeroDocumento;
    @Column
    private int telefono;
    @Column
    private String mail;   

    //@OneToMany(mappedBy = "conductor")
    //private List<Vehiculo> listaVehiculo;

}
