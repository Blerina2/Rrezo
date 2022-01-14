-- create database rrezo;
create table PytMesazh(
  id int auto_increment primary key ,
  Mesazh text,
  Emri varchar(255),
  Pranus varchar(255),
  Dergus varchar(255),
  DataKrijimit datetime,
  DataDergimit datetime

);

create table Perdoruesi(
    id int auto_increment primary key ,
    Emri varchar(255),
    Email varchar(255),
    Passvordi varchar(255),
    DataKrijimit datetime
);
