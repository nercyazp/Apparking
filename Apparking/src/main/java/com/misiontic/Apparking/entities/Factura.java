package com.misiontic.Apparking.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;

@Data
@Entity
public class Factura {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idFactura;
    @Column
    private String fechaEntrada;
    @Column
    private String fechaSalida;
    @Column
    private float subtotal;
    @Column
    private float valorMulta;
    @Column
    private float valorDescuento;
    @Column
    private float valorIva;
    @Column
    private float totalFactura;

    @ManyToOne
    @JoinColumn
    private Vehiculo vehiculo;
}
