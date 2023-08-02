-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: fullstacktesttask
-- ------------------------------------------------------
-- Server version	8.0.22

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
-- Dumping data for table `forms`
--

LOCK TABLES `forms` WRITE;
/*!40000 ALTER TABLE `forms` DISABLE KEYS */;
INSERT INTO `forms` VALUES (1,'John Smile','john@gmail.com','+123559897','First Aid Training Program','approved',13),(2,'Linda Johnos','linda@gmail.com','+2323232323','Medical NO program','in progress',13),(3,'John Doe','littlejohn@yahoo.com','+3216565959','BootCamp for bigginers','approved',13);
/*!40000 ALTER TABLE `forms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (13,'DrinaVelimirovic','dusan.velimirovic@trlic.com','$2a$10$Li4jR3R5ODpRn7xs8axlsuRrtMwMgk5IBGzxkcPHa9yekCvDwalNi'),(15,'','','$2a$10$pYv9ft2V3AvDJLN//NuoM.Tl54tVEkASutv5df94OAFNPGF4IxvG.'),(16,'duskodugousko','dusan87@trlic.com','$2a$10$eoBQtlHbu0I6PaKvI1.BL.5lttG4uDxp/SGfYNSxG3ODX5yiFD436'),(17,'duskodugouskoo','duosan87@trlic.com','$2a$10$AJlVr2uXM3yRpj8l2JNuTea/Kki10q1Zu8CQDKWrhO06AUoosw2nW'),(18,'Drinavel','dusan.velimirovic@yahoo.com','$2a$10$.vuuty3nq5g8HgP6w9lnXOV6FZOKSWW6hAAtu7Rg.GvZ7QfMvRIty'),(19,'12','','$2a$10$VC1Ed3.eMdSPlZVxlAF.PutFCoIFOXTJ8VwWmSzHQgQNlRHUljuQW'),(20,'duskodule','','$2a$10$yWP/m0Vb84vt6g8zRXjUiutsrQUDPfCn9mXBTaj1cfCzP4hL.PKOm'),(21,'testuser1','testuser1@gmail.com','$2a$10$OTyPUurcw3VT/DKredtR6O9UzcOXoyJSLh5aZKVVcwkaMhpYh31My');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'fullstacktesttask'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-03  0:31:07
