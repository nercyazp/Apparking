package com.misiontic.Apparking.Dtos;

import lombok.Data;

@Data
public class Cobro {
    private float multa;
    private float Total;
    private float descuento;
    private float subtotal;     
    public Cobro(float multa, float total, float descuent, float subtotal){
        this.multa = multa;
        this.Total = total;
        this.descuento = descuent;
        this.subtotal = subtotal;
    }
    public float getMulta(){
        return this.multa;
    }
    public float getTotal(){
        return this.Total;
    }
    public float getDescuento(){
        return this.descuento;
    }
    public float getSubtotal(){
        return this.subtotal;
    }
}