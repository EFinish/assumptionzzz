create table if not exists statements
(
	id int auto_increment,
	truth_value TINYINT(1) not null,
	description varchar(255) not null,
	parent_argument_id int null,
	commentary text null,
	constraint statements_pk
		primary key (id)
);


