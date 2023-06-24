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
-- Table structure for table `fecha`
--

DROP TABLE IF EXISTS `fecha`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fecha` (
  `idFecha` int NOT NULL,
  `dia` int NOT NULL,
  `mes` varchar(25) NOT NULL,
  `año` int NOT NULL,
  `fecha` date NOT NULL,
  PRIMARY KEY (`idFecha`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fecha`
--

LOCK TABLES `fecha` WRITE;
/*!40000 ALTER TABLE `fecha` DISABLE KEYS */;
INSERT INTO `fecha` VALUES (1,1,'abril',2021,'2021-04-01'),(2,1,'agosto',2021,'2021-08-01'),(3,1,'febrero',2022,'2022-02-01'),(4,1,'julio',2021,'2021-07-01'),(5,1,'junio',2021,'2021-06-01'),(6,1,'octubre',2021,'2021-10-01'),(7,2,'agosto',2021,'2021-08-02'),(8,2,'febrero',2021,'2021-02-02'),(9,2,'febrero',2022,'2022-02-02'),(10,2,'julio',2021,'2021-07-02'),(11,2,'junio',2021,'2021-06-02'),(12,3,'abril',2021,'2021-04-03'),(13,3,'junio',2021,'2021-06-03'),(14,3,'octubre',2021,'2021-10-03'),(15,4,'abril',2021,'2021-04-04'),(16,4,'agosto',2021,'2021-08-04'),(17,4,'febrero',2022,'2022-02-04'),(18,4,'octubre',2022,'2022-10-04'),(19,4,'septiembre',2021,'2021-09-04'),(20,5,'agosto',2021,'2021-08-05'),(21,5,'enero',2021,'2021-01-05'),(22,5,'febrero',2021,'2021-02-05'),(23,5,'febrero',2022,'2022-02-05'),(24,5,'julio',2021,'2021-07-05'),(25,5,'junio',2021,'2021-06-05'),(26,5,'mayo',2021,'2021-05-05'),(27,5,'noviembre',2021,'2021-11-05'),(28,6,'abril',2021,'2021-04-06'),(29,6,'agosto',2021,'2021-08-06'),(30,6,'febrero',2022,'2022-02-06'),(31,6,'julio',2021,'2021-07-06'),(32,6,'junio',2021,'2021-06-06'),(33,6,'marzo',2021,'2021-03-06'),(34,6,'octubre',2021,'2021-10-06'),(35,7,'julio',2021,'2021-07-07'),(36,8,'agosto',2021,'2021-08-08'),(37,8,'diciembre',2021,'2021-12-08'),(38,8,'julio',2021,'2021-07-08'),(39,8,'junio',2021,'2021-06-08'),(40,8,'octubre',2021,'2021-10-08'),(41,9,'agosto',2021,'2021-08-09'),(42,9,'febrero',2022,'2022-02-09'),(43,9,'julio',2021,'2021-07-09'),(44,9,'septiembre',2021,'2021-09-09'),(45,10,'diciembre',2021,'2021-12-10'),(46,10,'febrero',2022,'2022-02-10'),(47,10,'julio',2021,'2021-07-10'),(48,10,'junio',2021,'2021-06-10'),(49,11,'agosto',2021,'2021-08-11'),(50,11,'agosto',2022,'2022-08-11'),(51,11,'diciembre',2021,'2021-12-11'),(52,11,'enero',2022,'2022-01-11'),(53,11,'julio',2021,'2021-07-11'),(54,12,'abril',2021,'2021-04-12'),(55,12,'agosto',2021,'2021-08-12'),(56,12,'junio',2021,'2021-06-12'),(57,12,'marzo',2021,'2021-03-12'),(58,12,'octubre',2021,'2021-10-12'),(59,13,'agosto',2021,'2021-08-13'),(60,13,'diciembre',2021,'2021-12-13'),(61,13,'enero',2021,'2021-01-13'),(62,13,'enero',2022,'2022-01-13'),(63,13,'julio',2021,'2021-07-13'),(64,13,'junio',2021,'2021-06-13'),(65,13,'marzo',2022,'2022-03-13'),(66,13,'octubre',2021,'2021-10-13'),(67,14,'agosto',2021,'2021-08-14'),(68,14,'diciembre',2022,'2022-12-14'),(69,14,'enero',2022,'2022-01-14'),(70,14,'febrero',2022,'2022-02-14'),(71,14,'julio',2021,'2021-07-14'),(72,14,'mayo',2021,'2021-05-14'),(73,15,'enero',2021,'2021-01-15'),(74,15,'enero',2022,'2022-01-15'),(75,15,'febrero',2022,'2022-02-15'),(76,15,'julio',2021,'2021-07-15'),(77,15,'marzo',2021,'2021-03-15'),(78,15,'mayo',2021,'2021-05-15'),(79,15,'octubre',2021,'2021-10-15'),(80,15,'septiembre',2021,'2021-09-15'),(81,16,'enero',2021,'2021-01-16'),(82,16,'febrero',2021,'2021-02-16'),(83,16,'febrero',2022,'2022-02-16'),(84,16,'febrero',2023,'2023-02-16'),(85,16,'julio',2021,'2021-07-16'),(86,16,'septiembre',2021,'2021-09-16'),(87,17,'enero',2021,'2021-01-17'),(88,17,'enero',2022,'2022-01-17'),(89,17,'febrero',2022,'2022-02-17'),(90,17,'julio',2021,'2021-07-17'),(91,17,'septiembre',2021,'2021-09-17'),(92,18,'enero',2022,'2022-01-18'),(93,18,'febrero',2022,'2022-02-18'),(94,18,'julio',2021,'2021-07-18'),(95,18,'junio',2021,'2021-06-18'),(96,18,'marzo',2021,'2021-03-18'),(97,18,'mayo',2021,'2021-05-18'),(98,18,'septiembre',2021,'2021-09-18'),(99,19,'agosto',2021,'2021-08-19'),(100,19,'diciembre',2021,'2021-12-19'),(101,19,'enero',2021,'2021-01-19'),(102,19,'enero',2022,'2022-01-19'),(103,19,'febrero',2022,'2022-02-19'),(104,19,'julio',2021,'2021-07-19'),(105,19,'junio',2021,'2021-06-19'),(106,19,'mayo',2021,'2021-05-19'),(107,19,'septiembre',2021,'2021-09-19'),(108,20,'diciembre',2021,'2021-12-20'),(109,20,'enero',2021,'2021-01-20'),(110,20,'febrero',2022,'2022-02-20'),(111,20,'julio',2021,'2021-07-20'),(112,20,'julio',2022,'2022-07-20'),(113,20,'junio',2021,'2021-06-20'),(114,20,'junio',2022,'2022-06-20'),(115,20,'mayo',2021,'2021-05-20'),(116,20,'septiembre',2021,'2021-09-20'),(117,21,'agosto',2021,'2021-08-21'),(118,21,'febrero',2022,'2022-02-21'),(119,21,'julio',2021,'2021-07-21'),(120,21,'junio',2021,'2021-06-21'),(121,21,'marzo',2022,'2022-03-21'),(122,21,'mayo',2021,'2021-05-21'),(123,21,'octubre',2021,'2021-10-21'),(124,21,'septiembre',2021,'2021-09-21'),(125,22,'agosto',2021,'2021-08-22'),(126,22,'enero',2021,'2021-01-22'),(127,22,'febrero',2021,'2021-02-22'),(128,22,'julio',2021,'2021-07-22'),(129,22,'marzo',2022,'2022-03-22'),(130,22,'mayo',2021,'2021-05-22'),(131,22,'octubre',2021,'2021-10-22'),(132,22,'septiembre',2021,'2021-09-22'),(133,23,'diciembre',2020,'2020-12-23'),(134,23,'enero',2021,'2021-01-23'),(135,23,'febrero',2022,'2022-02-23'),(136,23,'julio',2021,'2021-07-23'),(137,23,'junio',2021,'2021-06-23'),(138,23,'mayo',2021,'2021-05-23'),(139,23,'noviembre',2021,'2021-11-23'),(140,23,'septiembre',2021,'2021-09-23'),(141,24,'abril',2022,'2022-04-24'),(142,24,'febrero',2022,'2022-02-24'),(143,24,'julio',2021,'2021-07-24'),(144,24,'junio',2021,'2021-06-24'),(145,24,'mayo',2021,'2021-05-24'),(146,24,'septiembre',2021,'2021-09-24'),(147,25,'agosto',2021,'2021-08-25'),(148,25,'julio',2021,'2021-07-25'),(149,25,'junio',2021,'2021-06-25'),(150,25,'mayo',2021,'2021-05-25'),(151,25,'octubre',2021,'2021-10-25'),(152,25,'septiembre',2021,'2021-09-25'),(153,26,'diciembre',2022,'2022-12-26'),(154,26,'enero',2022,'2022-01-26'),(155,26,'febrero',2022,'2022-02-26'),(156,26,'julio',2021,'2021-07-26'),(157,26,'junio',2021,'2021-06-26'),(158,26,'octubre',2021,'2021-10-26'),(159,26,'septiembre',2021,'2021-09-26'),(160,27,'abril',2021,'2021-04-27'),(161,27,'abril',2022,'2022-04-27'),(162,27,'agosto',2021,'2021-08-27'),(163,27,'diciembre',2021,'2021-12-27'),(164,27,'enero',2021,'2021-01-27'),(165,27,'julio',2021,'2021-07-27'),(166,27,'marzo',2021,'2021-03-27'),(167,27,'octubre',2021,'2021-10-27'),(168,27,'septiembre',2021,'2021-09-27'),(169,28,'abril',2022,'2022-04-28'),(170,28,'agosto',2021,'2021-08-28'),(171,28,'diciembre',2020,'2020-12-28'),(172,28,'julio',2021,'2021-07-28'),(173,28,'junio',2022,'2022-06-28'),(174,28,'marzo',2021,'2021-03-28'),(175,28,'mayo',2021,'2021-05-28'),(176,28,'septiembre',2021,'2021-09-28'),(177,29,'abril',2022,'2022-04-29'),(178,29,'agosto',2022,'2022-08-29'),(179,29,'diciembre',2020,'2020-12-29'),(180,29,'julio',2021,'2021-07-29'),(181,29,'junio',2021,'2021-06-29'),(182,29,'marzo',2021,'2021-03-29'),(183,29,'octubre',2021,'2021-10-29'),(184,29,'septiembre',2021,'2021-09-29'),(185,30,'diciembre',2020,'2020-12-30'),(186,30,'diciembre',2022,'2022-12-30'),(187,30,'enero',2021,'2021-01-30'),(188,30,'julio',2021,'2021-07-30'),(189,30,'junio',2021,'2021-06-30'),(190,30,'marzo',2021,'2021-03-30'),(191,30,'marzo',2022,'2022-03-30'),(192,30,'septiembre',2021,'2021-09-30'),(193,31,'diciembre',2020,'2020-12-31'),(194,31,'enero',2022,'2022-01-31'),(195,31,'julio',2021,'2021-07-31'),(196,31,'marzo',2021,'2021-03-31'),(197,31,'marzo',2022,'2022-03-31'),(198,31,'mayo',2021,'2021-05-31');
/*!40000 ALTER TABLE `fecha` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-23 19:49:36
