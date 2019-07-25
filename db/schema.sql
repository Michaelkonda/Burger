CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(200) NOT NULL,
    eaten BOOLEAN DEFAULT false,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

SELECT 
    *
FROM
    burgers;
    
USE burgers_db;

INSERT INTO burgers (burger_name) VALUES
("Bacon burger"),
("Double burger");

INSERT INTO burgers (burger_name, eaten) VALUES
("Cheesburger", true);
    