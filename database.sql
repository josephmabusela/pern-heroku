-- CREATE DATABASE perntodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

-- INSERT INTO todo (description) VALUES("Build more React Webapps");