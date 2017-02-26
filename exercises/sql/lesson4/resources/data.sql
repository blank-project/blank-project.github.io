-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 26, 2017 at 10:54
-- Server version: 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `join`
--

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `name`, `age`, `address`, `city`, `zip_code`) VALUES
(1, 'Sherlock Holmes', 47, '221 Baker Street', 'London', 'NW16XE'),
(2, 'Wile E. Coyote', 3, 'Arizona', 'Unknown', 'B0000M'),
(3, 'Santa Claus', 3, '', 'North Pole', 'H0H0H0');

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `date`, `customer_id`, `price_ht`) VALUES
(1, '1953-09-19 00:00:00', 2, NULL),
(2, '1954-08-14 00:00:00', 2, NULL),
(3, '1955-04-30 00:00:00', 2, NULL),
(4, '1887-01-19 00:00:00', 1, NULL),
(5, '1892-02-09 00:00:00', 1, NULL),
(6, '2017-03-01 00:00:00', 1, NULL);

--
-- Dumping data for table `orders_products`
--

INSERT INTO `orders_products` (`order_id`, `product_id`, `amount`) VALUES
(1, 3, 1),
(1, 4, 1),
(1, 5, 1),
(1, 6, 1),
(2, 6, 2),
(2, 7, 2),
(3, 8, 1),
(3, 9, 1),
(4, 1, 1),
(4, 10, 1),
(5, 2, 3);

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `ref`, `unit_price`) VALUES
(1, 'Pipe', NULL, 100),
(2, 'Tabac à Pipe', NULL, 50),
(3, 'Bomb + Detonator', NULL, 150),
(4, 'Giant Kite Kit', NULL, 150),
(5, 'Nitroglycerin', NULL, 150),
(6, 'Bird Seeds', NULL, 150),
(7, 'Triple Strength Fortified Leg Muscle Vitamins', NULL, 14),
(8, 'Glue', NULL, 12),
(9, 'Female Road-Runner Costume', NULL, 400),
(10, 'Canne Epée', NULL, 257);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
