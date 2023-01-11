-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: hms
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
-- Table structure for table `ambulance`
--

DROP TABLE IF EXISTS `ambulance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ambulance` (
  `amb_id` int NOT NULL,
  `amb_number` varchar(45) DEFAULT NULL,
  `amb_driver` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`amb_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ambulance`
--

LOCK TABLES `ambulance` WRITE;
/*!40000 ALTER TABLE `ambulance` DISABLE KEYS */;
/*!40000 ALTER TABLE `ambulance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `appointment`
--

DROP TABLE IF EXISTS `appointment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointment` (
  `appointment_id` int NOT NULL,
  `appointment_number` int DEFAULT NULL,
  `appointment_type` varchar(45) DEFAULT NULL,
  `appointment_created` date DEFAULT NULL,
  `appointment_date` date DEFAULT NULL,
  `appointment_time` date DEFAULT NULL,
  `doc_id` int DEFAULT NULL,
  `appointment_desc` varchar(45) DEFAULT NULL,
  `employee_id` int DEFAULT NULL,
  `deasease` varchar(45) DEFAULT NULL,
  `ref_id` varchar(45) DEFAULT NULL,
  `appointment_status` int DEFAULT NULL,
  `department_id` int DEFAULT NULL,
  PRIMARY KEY (`appointment_id`),
  KEY `fk_appointment_idx` (`doc_id`),
  CONSTRAINT `ap_doc` FOREIGN KEY (`doc_id`) REFERENCES `doctor` (`doc_id`),
  CONSTRAINT `ap_emp` FOREIGN KEY (`appointment_id`) REFERENCES `employeeandnurse` (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointment`
--

LOCK TABLES `appointment` WRITE;
/*!40000 ALTER TABLE `appointment` DISABLE KEYS */;
/*!40000 ALTER TABLE `appointment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `billing`
--

DROP TABLE IF EXISTS `billing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `billing` (
  `bill_id` int NOT NULL,
  `p_id` int DEFAULT NULL,
  `doc_charge` int DEFAULT NULL,
  `medicine_charge` int DEFAULT NULL,
  `room_charge` int DEFAULT NULL,
  `ambulance_charge` int DEFAULT NULL,
  `operation_charge` int DEFAULT NULL,
  `lab_charge` int DEFAULT NULL,
  `advance` int DEFAULT NULL,
  `insurance` int DEFAULT NULL,
  `total_bill` int DEFAULT NULL,
  `vat/tax` int DEFAULT NULL,
  PRIMARY KEY (`bill_id`),
  KEY `bl_p_idx` (`p_id`),
  CONSTRAINT `bl_p` FOREIGN KEY (`p_id`) REFERENCES `patient` (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `billing`
--

LOCK TABLES `billing` WRITE;
/*!40000 ALTER TABLE `billing` DISABLE KEYS */;
/*!40000 ALTER TABLE `billing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cabin`
--

DROP TABLE IF EXISTS `cabin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cabin` (
  `cabin_id` int NOT NULL,
  `cabin_type` varchar(45) DEFAULT NULL,
  `cabin_status` varchar(45) DEFAULT NULL,
  `cabin_fare` int DEFAULT NULL,
  PRIMARY KEY (`cabin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cabin`
--

LOCK TABLES `cabin` WRITE;
/*!40000 ALTER TABLE `cabin` DISABLE KEYS */;
/*!40000 ALTER TABLE `cabin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `department` (
  `dept_id` int NOT NULL,
  `dept_name` varchar(45) DEFAULT NULL,
  `dept_manager` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`dept_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department`
--

LOCK TABLES `department` WRITE;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
/*!40000 ALTER TABLE `department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctor`
--

DROP TABLE IF EXISTS `doctor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor` (
  `doc_id` int NOT NULL,
  `doc_name` varchar(45) DEFAULT NULL,
  `mobile` varchar(45) DEFAULT NULL,
  `dept_id` int DEFAULT NULL,
  `degree` varchar(45) DEFAULT NULL,
  `specialization` varchar(45) DEFAULT NULL,
  `details` varchar(45) DEFAULT NULL,
  `doc_charge` int DEFAULT NULL,
  PRIMARY KEY (`doc_id`),
  KEY `doc_dept_idx` (`dept_id`),
  CONSTRAINT `doc_dept` FOREIGN KEY (`dept_id`) REFERENCES `department` (`dept_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor`
--

LOCK TABLES `doctor` WRITE;
/*!40000 ALTER TABLE `doctor` DISABLE KEYS */;
/*!40000 ALTER TABLE `doctor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employeeandnurse`
--

DROP TABLE IF EXISTS `employeeandnurse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employeeandnurse` (
  `emp_id` int NOT NULL,
  `emp_first_name` varchar(45) DEFAULT NULL,
  `emp_last_name` varchar(45) DEFAULT NULL,
  `emp_dob` date DEFAULT NULL,
  `emp_mobile` varchar(45) DEFAULT NULL,
  `emp_gender` varchar(45) DEFAULT NULL,
  `emp_address` varchar(45) DEFAULT NULL,
  `emp_email` varchar(45) DEFAULT NULL,
  `emp_join_date` date DEFAULT NULL,
  `dept_id` int DEFAULT NULL,
  `emp_salary` int DEFAULT NULL,
  PRIMARY KEY (`emp_id`),
  KEY `emp_dept_idx` (`dept_id`),
  CONSTRAINT `emp_dept` FOREIGN KEY (`dept_id`) REFERENCES `department` (`dept_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employeeandnurse`
--

LOCK TABLES `employeeandnurse` WRITE;
/*!40000 ALTER TABLE `employeeandnurse` DISABLE KEYS */;
/*!40000 ALTER TABLE `employeeandnurse` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employeeshift`
--

DROP TABLE IF EXISTS `employeeshift`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employeeshift` (
  `id` int NOT NULL,
  `emp_id` varchar(45) DEFAULT NULL,
  `start_work_hour` varchar(45) DEFAULT NULL,
  `end_work_hour` varchar(45) DEFAULT NULL,
  `weekend` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employeeshift`
--

LOCK TABLES `employeeshift` WRITE;
/*!40000 ALTER TABLE `employeeshift` DISABLE KEYS */;
/*!40000 ALTER TABLE `employeeshift` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `expense`
--

DROP TABLE IF EXISTS `expense`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `expense` (
  `expense_id` int NOT NULL,
  `emp_id` int DEFAULT NULL,
  `expense_item` varchar(45) DEFAULT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`expense_id`),
  KEY `exp_emp_idx` (`emp_id`),
  CONSTRAINT `exp_emp` FOREIGN KEY (`emp_id`) REFERENCES `employeeandnurse` (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `expense`
--

LOCK TABLES `expense` WRITE;
/*!40000 ALTER TABLE `expense` DISABLE KEYS */;
/*!40000 ALTER TABLE `expense` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lab`
--

DROP TABLE IF EXISTS `lab`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lab` (
  `lab_no` int NOT NULL,
  `emp_id` int DEFAULT NULL,
  `p_id` int DEFAULT NULL,
  `test_code` varchar(45) DEFAULT NULL,
  `test_cat_id` int DEFAULT NULL,
  `date` date DEFAULT NULL,
  `test_result` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`lab_no`),
  KEY `lab_emp_idx` (`emp_id`),
  KEY `lab_p_idx` (`p_id`),
  CONSTRAINT `lab_emp` FOREIGN KEY (`emp_id`) REFERENCES `employeeandnurse` (`emp_id`),
  CONSTRAINT `lab_p` FOREIGN KEY (`p_id`) REFERENCES `patient` (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lab`
--

LOCK TABLES `lab` WRITE;
/*!40000 ALTER TABLE `lab` DISABLE KEYS */;
/*!40000 ALTER TABLE `lab` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `med_report`
--

DROP TABLE IF EXISTS `med_report`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `med_report` (
  `med_report_id` int NOT NULL,
  `med_id` int DEFAULT NULL,
  `med_company` varchar(45) DEFAULT NULL,
  `med_quantity` int DEFAULT NULL,
  `med_production_date` date DEFAULT NULL,
  `med_expiry_date` date DEFAULT NULL,
  `med_country` varchar(45) DEFAULT NULL,
  `supplier_id` int DEFAULT NULL,
  PRIMARY KEY (`med_report_id`),
  KEY `med_sup_idx` (`supplier_id`),
  KEY `mp_med_idx` (`med_id`),
  CONSTRAINT `mp_med` FOREIGN KEY (`med_id`) REFERENCES `medicine` (`med_id`),
  CONSTRAINT `mp_sup` FOREIGN KEY (`supplier_id`) REFERENCES `supplier` (`supplier_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `med_report`
--

LOCK TABLES `med_report` WRITE;
/*!40000 ALTER TABLE `med_report` DISABLE KEYS */;
/*!40000 ALTER TABLE `med_report` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medicine`
--

DROP TABLE IF EXISTS `medicine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medicine` (
  `med_id` int NOT NULL,
  `med_name` varchar(45) DEFAULT NULL,
  `med_group_name` varchar(45) DEFAULT NULL,
  `med_type` varchar(45) DEFAULT NULL,
  `med_weight` varchar(45) DEFAULT NULL,
  `med_cost` int DEFAULT NULL,
  `med_description` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`med_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicine`
--

LOCK TABLES `medicine` WRITE;
/*!40000 ALTER TABLE `medicine` DISABLE KEYS */;
/*!40000 ALTER TABLE `medicine` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `operationtheatre`
--

DROP TABLE IF EXISTS `operationtheatre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `operationtheatre` (
  `ot_id` int NOT NULL,
  `patient_id` int DEFAULT NULL,
  `doc_id` int DEFAULT NULL,
  `operation_type` varchar(45) DEFAULT NULL,
  `desease` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ot_id`),
  KEY `ot__idx` (`patient_id`),
  KEY `ot_doc_idx` (`doc_id`),
  CONSTRAINT `ot_doc` FOREIGN KEY (`doc_id`) REFERENCES `doctor` (`doc_id`),
  CONSTRAINT `ot_p` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `operationtheatre`
--

LOCK TABLES `operationtheatre` WRITE;
/*!40000 ALTER TABLE `operationtheatre` DISABLE KEYS */;
/*!40000 ALTER TABLE `operationtheatre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient` (
  `p_id` int NOT NULL,
  `p_first_name` varchar(45) DEFAULT NULL,
  `p_last_name` varchar(45) DEFAULT NULL,
  `p_age` int DEFAULT NULL,
  `p_weight` int DEFAULT NULL,
  `p_gender` varchar(45) DEFAULT NULL,
  `p_address` varchar(45) DEFAULT NULL,
  `p_mobile` varchar(45) DEFAULT NULL,
  `platform` varchar(45) DEFAULT NULL,
  `p_username` varchar(45) DEFAULT NULL,
  `p_password` varchar(45) DEFAULT NULL,
  `p_email` varchar(45) DEFAULT NULL,
  `p_imageurl` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient`
--

LOCK TABLES `patient` WRITE;
/*!40000 ALTER TABLE `patient` DISABLE KEYS */;
/*!40000 ALTER TABLE `patient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient_addmission`
--

DROP TABLE IF EXISTS `patient_addmission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient_addmission` (
  `addmission_id` int NOT NULL,
  `p_id` int DEFAULT NULL,
  `addmission_date` date DEFAULT NULL,
  `cabin_id` int DEFAULT NULL,
  `addmitted_days` int DEFAULT NULL,
  `release_date` date DEFAULT NULL,
  `addmission_status` int DEFAULT NULL,
  PRIMARY KEY (`addmission_id`),
  KEY `pa_p_idx` (`p_id`),
  KEY `pa_cbn_idx` (`cabin_id`),
  CONSTRAINT `pa_cbn` FOREIGN KEY (`cabin_id`) REFERENCES `cabin` (`cabin_id`),
  CONSTRAINT `pa_p` FOREIGN KEY (`p_id`) REFERENCES `patient` (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_addmission`
--

LOCK TABLES `patient_addmission` WRITE;
/*!40000 ALTER TABLE `patient_addmission` DISABLE KEYS */;
/*!40000 ALTER TABLE `patient_addmission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payroll`
--

DROP TABLE IF EXISTS `payroll`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payroll` (
  `id` int NOT NULL,
  `emp_id` int DEFAULT NULL,
  `salary` int DEFAULT NULL,
  `net_salary` int DEFAULT NULL,
  `hourly_salary` int DEFAULT NULL,
  `bonus_salary` int DEFAULT NULL,
  `account_no` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `prl_emp_idx` (`emp_id`),
  CONSTRAINT `prl_emp` FOREIGN KEY (`emp_id`) REFERENCES `employeeandnurse` (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payroll`
--

LOCK TABLES `payroll` WRITE;
/*!40000 ALTER TABLE `payroll` DISABLE KEYS */;
/*!40000 ALTER TABLE `payroll` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prescription`
--

DROP TABLE IF EXISTS `prescription`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prescription` (
  `prescription_id` int NOT NULL,
  `prescription_time` date DEFAULT NULL,
  `doc_id` int DEFAULT NULL,
  `p_id` int DEFAULT NULL,
  `admission_id` int DEFAULT NULL,
  `test_cat_id` int DEFAULT NULL,
  `test_item1` varchar(45) DEFAULT NULL,
  `test_item2` varchar(45) DEFAULT NULL,
  `test_item3` varchar(45) DEFAULT NULL,
  `test_item4` varchar(45) DEFAULT NULL,
  `test_item5` varchar(45) DEFAULT NULL,
  `medicine_item1` varchar(45) DEFAULT NULL,
  `medicine_item2` varchar(45) DEFAULT NULL,
  `medicine_item3` varchar(45) DEFAULT NULL,
  `medicine_item4` varchar(45) DEFAULT NULL,
  `medicine_item5` varchar(45) DEFAULT NULL,
  `medicine_item6` varchar(45) DEFAULT NULL,
  `medicine_item7` varchar(45) DEFAULT NULL,
  `medicine_item8` varchar(45) DEFAULT NULL,
  `medicine_item9` varchar(45) DEFAULT NULL,
  `medicine_item10` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`prescription_id`),
  KEY `pres_doc_idx` (`doc_id`),
  KEY `pres_p_idx` (`p_id`),
  KEY `pres_admission_idx` (`admission_id`),
  CONSTRAINT `pres_admission` FOREIGN KEY (`admission_id`) REFERENCES `patient_addmission` (`addmission_id`),
  CONSTRAINT `pres_doc` FOREIGN KEY (`doc_id`) REFERENCES `doctor` (`doc_id`),
  CONSTRAINT `pres_p` FOREIGN KEY (`p_id`) REFERENCES `patient` (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prescription`
--

LOCK TABLES `prescription` WRITE;
/*!40000 ALTER TABLE `prescription` DISABLE KEYS */;
/*!40000 ALTER TABLE `prescription` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reference`
--

DROP TABLE IF EXISTS `reference`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reference` (
  `ref_id` int NOT NULL,
  `ref_name` varchar(45) DEFAULT NULL,
  `ref_adress` varchar(45) DEFAULT NULL,
  `ref_type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ref_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reference`
--

LOCK TABLES `reference` WRITE;
/*!40000 ALTER TABLE `reference` DISABLE KEYS */;
/*!40000 ALTER TABLE `reference` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supplier`
--

DROP TABLE IF EXISTS `supplier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supplier` (
  `supplier_id` int NOT NULL,
  `supplier_company` varchar(45) DEFAULT NULL,
  `supplier_phone` varchar(45) DEFAULT NULL,
  `supplier_email` varchar(45) DEFAULT NULL,
  `supplier_address` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`supplier_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supplier`
--

LOCK TABLES `supplier` WRITE;
/*!40000 ALTER TABLE `supplier` DISABLE KEYS */;
/*!40000 ALTER TABLE `supplier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test_cat`
--

DROP TABLE IF EXISTS `test_cat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `test_cat` (
  `test_cat_id` int NOT NULL,
  `test_cat_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`test_cat_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test_cat`
--

LOCK TABLES `test_cat` WRITE;
/*!40000 ALTER TABLE `test_cat` DISABLE KEYS */;
/*!40000 ALTER TABLE `test_cat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test_table`
--

DROP TABLE IF EXISTS `test_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `test_table` (
  `test_id` int NOT NULL,
  `test_name` varchar(45) DEFAULT NULL,
  `test_cat_id` int DEFAULT NULL,
  `testing_amount` int DEFAULT NULL,
  `p_id` int DEFAULT NULL,
  PRIMARY KEY (`test_id`),
  KEY `tst_tstc_idx` (`test_cat_id`),
  KEY `tst_p_idx` (`p_id`),
  CONSTRAINT `tst_p` FOREIGN KEY (`p_id`) REFERENCES `patient` (`p_id`),
  CONSTRAINT `tst_tstc` FOREIGN KEY (`test_cat_id`) REFERENCES `test_cat` (`test_cat_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test_table`
--

LOCK TABLES `test_table` WRITE;
/*!40000 ALTER TABLE `test_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `test_table` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-11  1:00:16
