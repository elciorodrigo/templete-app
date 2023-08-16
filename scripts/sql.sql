CREATE DATABASE `songsapi`;

USE `songsapi`;

CREATE TABLE `song`
(
    `id`       int(11)      NOT NULL AUTO_INCREMENT,
    `name`     varchar(200) NOT NULL,
    `artist`   varchar(200) NOT NULL,
    `duration` int(11)      DEFAULT NULL,
    `genre`    varchar(45)  DEFAULT NULL,
    `album`    varchar(200) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;