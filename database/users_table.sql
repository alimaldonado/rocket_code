CREATE TABLE users_test_ali_maldonado (
  id INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(100) DEFAULT NULL,
  middleName VARCHAR(100) DEFAULT NULL,
  lastName VARCHAR(100) DEFAULT NULL,
  lastLastName VARCHAR(100) DEFAULT NULL,
  birthDate DATETIME DEFAULT NULL,
  email VARCHAR(100) DEFAULT NULL,
  phone VARCHAR(100) DEFAULT NULL,
  createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);
