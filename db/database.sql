CREATE DATABASE IF NOT EXISTS companydb,
use companydb;

CREATE TABLE employe(
    id INT (11)NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(10)DEFAULT NULL,
    PRIMARY KEY (id)
);
DESCRIBE employe;

INSERT INTO employe VALUES
(1,'joe',1000),
(2,'Sam',1520),
(3,'Max',2000),
(4,'Tom',1800);
