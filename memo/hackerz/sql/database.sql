create database hackers default character set utf8;

grant select,insert,update,delete,create,drop,index,alter,create view,show view on hackers.* to hackers@'%' identified by 'thackers007';

flush privileges;

show grants for hackers@'%';
