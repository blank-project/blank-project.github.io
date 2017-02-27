--
-- Table structure for table `Score`
--

CREATE TABLE `Score` (
  `id` int NOT NULL AUTO_INCREMENT,
  `game` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `score` int NOT NULL,
  PRIMARY KEY (`id`)
);

--
-- Table structure for table `User`
--

CREATE TABLE `User` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);
