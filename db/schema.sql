DROP DATABASE IF EXISTS artist_dev;
CREATE DATABASE artist_dev;
\c artist_dev;


CREATE TABLE artist 
(


id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
skills TEXT NOT NULL,
genre TEXT NOT NULL,
instruments TEXT NOT NULL,
independent BOOLEAN,
years_of_experience INTEGER,
record_label VARCHAR(30)







);