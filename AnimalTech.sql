create database AnimalTech;
use AnimalTech;

create table tutor(
idTutor int primary key auto_increment not null,
nome varchar(100) not null,
idade int not null,
profissao varchar(50) not null,
email varchar(200) not null,
senha varchar(20) not null,
cpf char(11) not null,
telefone char(11) not null,
edereco varchar(100) not null
)engine=InnoDB;


create table Animal(
idAnimal int primary key auto_increment not null,
nome varchar(200) not null,
DataDeEntrada datetime not null,
idade varchar(45) not null,
tipo varchar(20),
raca varchar(30) not null,
situacao varchar(100) not null,
descricao varchar(200) not null, 
DataDeSaida datetime,
Tutor int,
foreign key (tutor) references tutor(idTutor)
)engine=InnoDB;

create table funcionario(
idFuncionario int primary key auto_increment not null,
nome varchar(200) not null,
idade int,
cargo varchar(50),
email varchar(200) not null,
senha varchar(20) not null,
cpf char(11) not null,
telefone char(11),
edereco varchar(100)
)engine=InnoDB;

create table contact(
idContact int primary key auto_increment not null,
nome varchar(200) not null,
email varchar(200) not null,
mensagem varchar(1000) not null
)engine=InnoDB;


select * from Animal;
Select * from funcionario;
insert into funcionario values (null,"Rafael", 19, "Medico Veterinario", "rafael@gmail.com", "1234", "12345678901", "31912345678", "Rua dom helder 77");
insert into funcionario values (null,"Vinicius", 18, "Atendente", "vini@gmail.com", "senha", "10928374658", "31912342639", "Rua dom helder 22");
insert into tutor values (null,"Douglas", 37, "Professor", "douglas@gmail.com", "4321", "10987654321", "3143218765", "Rua dom helder 35");
insert into tutor values (null,"vinicius", 20, "Estagiario", "vinicius@gmail.com", "password", "85264595178", "3196358741", "Rua dom helder 90");
insert into Animal() values (null, 'juca', '2024-03-21 12:00:00', '7 meses', 'cachorro', 'chihuahua', 'tosa', 'Cachorro em bom estado', '2024-03-21 13:00:00', 1);
insert into Animal() values (null, 'vini', '2023-10-10 20:50:00', '3 meses', 'cachorro', 'bulldog', 'cirurgia de hernia', 'Cirurgia bem sucedida', '2023-10-14 09:00:00', 2);
show tables;
Drop table Animal;
SELECT * FROM funcionario WHERE email = 'vini@gmail.com'  AND senha = 'senha1';
select nome from tutor where idTutor = 1;
