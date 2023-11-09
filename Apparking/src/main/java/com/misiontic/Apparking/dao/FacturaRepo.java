package com.misiontic.Apparking.dao;


import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.misiontic.Apparking.entities.Factura;
public interface FacturaRepo extends CrudRepository<Factura, Integer> {
    @Query(value = "SELECT  f.* "
    + "FROM apparking.factura f inner join apparking.vehiculo v on f.vehiculo_id_vehiculo = v.id_vehiculo "
    +"WHERE v.placa LIKE %?1% ORDER BY 1 DESC", nativeQuery = true)
    public Iterable<Factura> findFacturaByPlaca(String placa);
    @Query(value="select count(v.id_vehiculo) from vehiculo v inner join factura f "+
    "on f.vehiculo_id_vehiculo = v.id_vehiculo " +
    "where f.fecha_salida IS NULL", nativeQuery = true)
    public int findCantidadPlazasOcupadas();

    @Query(value="SELECT  f.* "
        + "from vehiculo  v "
        + "left join factura f on v.id_vehiculo = f.vehiculo_id_vehiculo "
        +"WHERE f.fecha_entrada between ?1 AND ?2", nativeQuery = true)
    public Iterable<Factura> findFacturaByFechaIngreso(String fechaMin, String fechaMax);
}
