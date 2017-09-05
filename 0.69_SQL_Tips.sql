ORDER BY [column name] DESC --returns results from highest to lowest.

--we use AND when we want to match multiple criteria.  OR works as we'd expect.

-- Use INSERT to add data to SQL.  
INSERT INTO table-name (column1, column2)
VALUES (value, value2);

NULL means there is no data in a cell.

--To update data, we use the following:
UPDATE table-name
SET column-name = value-to-change-to, column2 = new-value2
(WHERE clause);

-- We can update multiple rows in one command.
UPDATE table-name
SET genre = 'Romance'
WHERE id = 3 or 5;

-- We can delete data as shown below:
DELETE
FROM movies
WHERE id = 5;

-- We create databases as shown below:
CREATE DATABASE Chaplin Theaters;

-- We get rid of databases as shown below:
DROP DATABASE Chaplin Theaters;

-- We add tables to databases as shown below:
CREATE TABLE tableName
(
    column_1 datatype,
    column_2 datatype
);

-- For example:
CREATE TABLE movies
(
    id int,
    title varchar(50),
    genre varchar(15),
    duration int
);

-- We drop tables as shown below:
DROP TABLE tableName;

-- We add columns to tables as shown below:
ALTER TABLE tableName
ADD COLUMN ratings int;

-- We drop columns as shown below:
ALTER TABLE tableName
DROP COLUMN ratings;

-- Common agregate functions(counting)
SELECT count(*) --column name could go inside
FROM Movies;
-- includes Null values in the count

SELECT count(title) 
FROM Movies;
-- counts all rows without NULL values

-- The four below only work if a column contains numbers
-- We sum as shown below:
SELECT sum(columnName)
FROM tableName;

-- We average as shown below:
SELECT avg(columnName)
FROM tableName;

-- We find the largest value as shown below:
SELECT max(columnName)
FROM tableName;

-- We find the smallest value as shown below:
SELECT min(columnName)
FROM tableName;

-- We can use these in combination
SELECT min(tickets), max(tickets)
FROM tableName;

-- Group BY Clause example:
SELECT genre, sum(cost)
FROM Movies
GROUP BY genre;

-- HAVING Clause example:
SELECT genre, sum(cost), count(genre)
FROM Movies
WHERE ColumnName operator value -- optional
GROUP BY genre
HAVING count(*) > 1;

SELECT genre, sum(cost), count(genre)
FROM Movies
WHERE revenue >= 1000000
GROUP BY genre
HAVING count(*) > 1;

--Identifying Constraints can prevent NULL values, ensure column values are unique, and provide aditional validations:

--The NOT NULL column constraint ensures that values cannot be NULL as shown below:
CREATE TABLE Promotions
(
    id int,
    name varchar(50) NOT NULL,
    category varchar(15)
);

-- Preventing duplicate values with UNIQUE constraint:
CREATE TABLE Promotions
(
    id int,
    name varchar(50) NOT NULL UNIQUE,
    category varchar(15)
);

-- Assigning names to constraints with table constraints:
CREATE TABLE Promotions
(
    id int,
    name varchar(50) NOT NULL,
    category varchar(15)
    CONSTRAINT unique_name UNIQUE (columnName)
);
-- Except for NOT NULL every column constrain can be written as a table constraint

-- Ensuring columns are unique:
CREATE TABLE Promotions
(
    id int,
    name varchar(50) NOT NULL,
    category varchar(15)
    CONSTRAINT unique_name UNIQUE (name, category)
);

--Ensuring primary key uniqueness and NOT NULL status
--We can use the primary key constraint only once, but NOT NULL with UNIQUE more than once.
CREATE TABLE Promotions
(
    id int PRIMARY KEY,
    name varchar(50) NOT NULL,
    category varchar(15)
    CONSTRAINT unique_name UNIQUE (name, category)
);

-- Value Constraints

--References between two tables:
--We singularize the table name followed by an _theColumnNameInTheOtherTable
--This is called a foreign key, which references the primary key of another table.

SELECT name, category
FROM Promotions
WHERE movie_id = 2;

-- Foreign Key Constraint:
CREATE TABLE Promotions
(
    id int PRIMARY KEY,
    movie_id int REFERENCES movies(id) --Foreign key constraint here, the part in () is optional.
    name varchar(50) NOT NULL,
    category varchar(15)
);

-- Foreign Key as table constraint
CREATE TABLE Promotions
(
    id int PRIMARY KEY,
    movie_id int,
    name varchar(50) NOT NULL,
    category varchar(15),
    FOREIGN KEY (movie_id) REFERENCES movies --Foreign key constraint here
);

-- Orphan Records: Records which reference rows in other tables that have been deleted.
-- We delete the referencing row (promotion) before we can delete movie.

-- Validating data insertion:
-- The CHECK constraint validates info placed into a column.

CREATE TABLE Movies
(
    id int PRIMARY KEY,
    movie_id int,
    title varchar(50) NOT NULL UNIQUE,
    genre varchar(15),
    duration int CHECK (duration > 0)
);

-- Normalization is reducing duplication in tables
-- 1st normal: only one value in each column
-- 2nd normal: no redundant data in each column

-- Join Table
-- Naming convention: Movies_Genre, the name of one table_name of other taple
-- columns: movie_id genre_id

--IN (2, 3) instead of multiple OR statements

-- Relationships
--One-to-One
--One-to-Many
--Many-to-Many

-- Inner Joins
SELECT Movies.title, Reviews.review
FROM Movies
INNER JOIN Reviews
ON Movies.id=Reviews.movie_id;

-- Inner Join on Three Tables
SELECT Movies.title, Genres.name
FROM Movies
INNER JOIN Movies_Genres
ON Movies.id = Movies_Genres.movie_id;
INNER JOIN Genres
ON Movies_Genres.genre_id = Genres.id;
WHERE Movies.title = 'Peter Pan';

-- Aliases
SELECT Movies.title AS "Weekly Movies", Reviews.review AS reviews --AS is optional
FROM Movies
INNER JOIN Reviews
ON Movies.id=Reviews.movie_id;
-- We need "" to capitalize or use spaces in aliases.

--Table Aliases
SELECT m.title, r.review
FROM Movies m
INNER JOIN Reviews r
ON m.id=r.movie_id
ORDER BY m.title;

SELECT m.title, g.name
FROM Movies m
INNER JOIN Movies_Genres mg
ON m.id = mg.movie_id;
INNER JOIN Genres g
ON mg.genre_id = g.id;
WHERE m.title = 'Peter Pan';

-- Outer Joins
-- For example, we use outer joins to get all movies with optional reviews.

-- Left Outer Join example:
SELECT *
FROM Movies
LEFT OUTER JOIN Reviews
ON Movies.id=Reviews.movie_id;

-- Right Outer Join example:
SELECT *
FROM Movies
RIGHT OUTER JOIN Reviews
ON Movies.id=Reviews.movie_id;

-- Subqueries
SELECT SUM(sales)
FROM Movies
WHERE id IN -- We could use NOT IN to get everything not in the subquery.
(
    SELECT movie_id
    FROM Promotions
    WHERE category = 'Non-cash';
);

-- Correlated Subqueries
SELECT *
FROM Movies
WHERE duration >
(
    SELECT avg(duration)
    FROM Movies
);