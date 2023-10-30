CREATE TABLE  users(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
    )
GO


CREATE TABLE roles(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT UNIQUE NOT NULL
)
GO

CREATE TABLE user_roles(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    roleId INTEGER,
    FOREIGN KEY(userId) REFERENCES [users] (id),
    FOREIGN KEY(roleId) REFERENCES [roles] (id)
)
GO

CREATE TABLE historial(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_profesional INTEGER,
    id_paciente INTEGER,
    fecha DATETIME NOT NULL,
    observaciones TEXT NOT NULL,
    FOREIGN KEY(id_profesional) REFERENCES [users] (id),
    FOREIGN KEY(id_paciente) REFERENCES [users] (id)
    
)
GO

INSERT INTO users (username,  password) VALUES ('skaplanski@frba.utn.edu.ar','seba');
INSERT INTO users (username,  password) VALUES ('admin@gmail.com','admin123');
INSERT INTO users (username,  password) VALUES ('drperez@gmail.com','doctor');

GO

INSERT INTO roles(title) VALUES ('Admin');
INSERT INTO roles(title) VALUES ('Doctor');
INSERT INTO roles(title) VALUES ('Patient');
GO

INSERT INTO user_roles(userId, roleId) VALUES ((SELECT id from users where username = 'skaplanski@frba.utn.edu.ar'), (SELECT id from roles where title='Patient'));
INSERT INTO user_roles(userId, roleId) VALUES ((SELECT id from users where username = 'admin@gmail.com'), (SELECT id from roles where title='Admin'));
INSERT INTO user_roles(userId, roleId) VALUES ((SELECT id from users where username = 'drperez@gmail.com'), (SELECT id from roles where title='Doctor'));
GO

INSERT INTO historial(id_profesional, id_paciente, fecha, observaciones) VALUES (
    (SELECT id from users where username = 'drperez@gmail.com'),
    (SELECT id from users where username = 'skaplanski@frba.utn.edu.ar'),
    DATETIME('now'),
    'Consulta Medica'
);