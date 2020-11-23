CREATE DATABASE  IF NOT EXISTS `registry` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;
USE `registry`;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `registry`
--

DROP TABLE IF EXISTS `person`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `person` (
                            `id` bigint(11) NOT NULL AUTO_INCREMENT,
                            `personal_id` varchar(100) CHARACTER SET utf8,
                            `first_name` varchar(500) CHARACTER SET utf8,
                            `last_name` varchar(500) CHARACTER SET utf8,
                            `gender` varchar(25) CHARACTER SET utf8,
                            `date_of_birth` datetime COLLATE utf8_unicode_ci,
                            PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

INSERT INTO person (id, personal_id, first_name, last_name, gender, date_of_birth)
VALUES (1, 'PERSONAL_ID_1', 'Viktors', 'Krumins', 'male', {ts '1970-09-17 18:47:52.690'});
INSERT INTO person (id, personal_id, first_name, last_name, gender, date_of_birth)
VALUES (2, 'PERSONAL_ID_2', 'Andris', 'Liepins', 'male', {ts '1999-03-17 11:87:00.000'});
INSERT INTO person (id, personal_id, first_name, last_name, gender, date_of_birth)
VALUES (3, 'PERSONAL_ID_3', 'Vizma', 'Ozola', 'female', {ts '2000-09-10 10:47:02.690'});
INSERT INTO person (id, personal_id, first_name, last_name, gender, date_of_birth)
VALUES (4, 'PERSONAL_ID_4', 'Janis', 'Balodis', 'male', {ts '1990-05-01 05:07:10.010'});
INSERT INTO person (id, personal_id, first_name, last_name, gender, date_of_birth)
VALUES (5, 'PERSONAL_ID_5', 'Emma', 'Lopez', 'female', {ts '2001-01-01 01:01:01.001'});