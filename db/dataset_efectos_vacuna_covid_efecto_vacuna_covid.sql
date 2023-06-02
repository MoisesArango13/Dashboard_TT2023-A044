CREATE DATABASE  IF NOT EXISTS `dataset_efectos_vacuna_covid` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `dataset_efectos_vacuna_covid`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: dataset_efectos_vacuna_covid
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `efecto_vacuna_covid`
--

DROP TABLE IF EXISTS `efecto_vacuna_covid`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `efecto_vacuna_covid` (
  `idEfecto` int NOT NULL,
  `tipo` varchar(50) NOT NULL,
  PRIMARY KEY (`idEfecto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `efecto_vacuna_covid`
--

LOCK TABLES `efecto_vacuna_covid` WRITE;
/*!40000 ALTER TABLE `efecto_vacuna_covid` DISABLE KEYS */;
INSERT INTO `efecto_vacuna_covid` VALUES (1,' frio'),(2,'cansado'),(3,'cansancio'),(4,'ciclo menstrual'),(5,'colico'),(6,'cuerpo cortado'),(7,'dolor articular'),(8,'dolor de brazo'),(9,'dolor de cabeza'),(10,'dolor de cuerpo'),(11,'dolor de garganta'),(12,'dolor muscular'),(13,'escalofrio'),(14,'fatiga'),(15,'fiebre'),(16,'gripe'),(17,'mareo'),(18,'nausea'),(19,'sudor'),(20,'sueño'),(21,'temperatura');
/*!40000 ALTER TABLE `efecto_vacuna_covid` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-01 17:41:03
