# assumptionzzz
Statement building tool.

## Goals
- create series of statements
	- assign truth values to such statements
- create logical arithmetic using such statements
	- use prepositional statements for logical statements (i.e if... then, if... then not, if not... then, etc)
	- assign statements to the conclusion values of logical arithmetic
- program will tell you if logical arithmetic
	- is valid (based on if logic lines up)
	- is true (based on if truth value in arithmetic leads to true statement)

## How to run
- docker-compose down --remove-orphans && docker-compose up --build


## migrations
- runs using github.com/golang-migrate/migrate/
- migrate create -ext sql -dir database/migrations -seq name_of_unique_migration_file