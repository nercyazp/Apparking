-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Apparking adding sche,a
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Apparking
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Apparking` DEFAULT CHARACTER SET utf8 ;
USE `Apparking` ;

-- -----------------------------------------------------
-- Table `Apparking`.`conductor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Apparking`.`conductor` (
  `id_conductor` INT NOT NULL AUTO_INCREMENT,
  `nombre_conductor` VARCHAR(45) NOT NULL,
  `telefono` INT NOT NULL,
  `mail` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_conductor`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Apparking`.`Vehiculo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Apparking`.`Vehiculo` (
  `id_Vehiculo` INT NOT NULL AUTO_INCREMENT,
  `placa` VARCHAR(10) NOT NULL,
  `marca` VARCHAR(45) NOT NULL,
  `color` VARCHAR(45) NOT NULL,
  `conductor_id_conductor` INT NOT NULL,
  PRIMARY KEY (`id_Vehiculo`),
  UNIQUE INDEX `placa_UNIQUE` (`placa` ASC) VISIBLE,
  INDEX `fk_Vehiculo_conductor_idx` (`conductor_id_conductor` ASC) VISIBLE,
  CONSTRAINT `fk_Vehiculo_conductor`
    FOREIGN KEY (`conductor_id_conductor`)
    REFERENCES `Apparking`.`conductor` (`id_conductor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Apparking`.`factura`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Apparking`.`factura` (
  `id_factura` INT NOT NULL AUTO_INCREMENT,
  `fecha_entrada` DATETIME NOT NULL,
  `fecha_salida` DATETIME NOT NULL,
  `subtotal` DECIMAL(10,2) NOT NULL,
  `valor_multa` DECIMAL(10,2) NULL,
  `valor_descuento` DECIMAL(10,2) NULL,
  `valor_iva` DECIMAL(10,2) NOT NULL,
  `total_factura` DECIMAL(10,2) NOT NULL,
  `Vehiculo_id_Vehiculo` INT NOT NULL,
  PRIMARY KEY (`id_factura`),
  INDEX `fk_factura_Vehiculo1_idx` (`Vehiculo_id_Vehiculo` ASC) VISIBLE,
  CONSTRAINT `fk_factura_Vehiculo1`
    FOREIGN KEY (`Vehiculo_id_Vehiculo`)
    REFERENCES `Apparking`.`Vehiculo` (`id_Vehiculo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
