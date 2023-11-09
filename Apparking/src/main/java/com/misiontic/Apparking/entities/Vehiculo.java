package com.misiontic.Apparking.entities;

//import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import javax.persistence.Id;

import lombok.Data;
//import lombok.RequiredArgsConstructor;

//@RequiredArgsConstructor
@Data
@Entity
public class Vehiculo {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idVehiculo;
    @Column
    private String placa;
    @Column
    private String marca;
    @Column
    private String color;


    //utilizare esta variable a futuro por ahora no es necesario

    //@ManyToOne
    //@JoinColumn
    //private Conductor conductor;

    //@OneToMany(mappedBy = "vehiculo")
    //private List<Factura> listafactura;

}
