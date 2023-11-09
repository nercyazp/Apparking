package com.misiontic.Apparking;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.misiontic.Apparking.dao.ConductorRepo;
import com.misiontic.Apparking.dao.VehiculoRepo;
//import com.misiontic.Apparking.entities.Conductor;
//import com.misiontic.Apparking.entities.Vehiculo;

@SpringBootTest
class ApparkingApplicationTests {

	@Autowired
	ConductorRepo conductorRepo;
	VehiculoRepo vehiculoRepo;

	/* @Test
	void crearConductor() {

		/*Conductor conductor = new Conductor("Camilo", 32056, "cami@hotmail.com");
		conductorRepo.save(conductor);
	} void verConductor() {
		Iterable<Conductor> conductor =conductorRepo.findAll();
	}

	void crearVehiculo() {

		Vehiculo vehiculo = new Vehiculo("JPY321", "Mazda", "Rojo",1);
		vehiculoRepo.save(vehiculo);
	}
	void verVehiculo() {
		Iterable<Vehiculo> vehiculo =vehiculoRepo.findAll();
	}*/
}
