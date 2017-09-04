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
