create database hackers default character set utf8;

grant select,insert,update,delete,create,drop,index,alter,create view,show view on hackers.* to hackers@'%' identified by 'Hn9~60/81x';

flush privileges;

show grants for hackers@'%';
