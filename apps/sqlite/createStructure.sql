CREATE TABLE  users(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  name TEXT NOT NULL,
  lastName TEXT NOT NULL
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
  doctorId INTEGER,
  userId INTEGER,
  creationDate DATETIME NOT NULL,
  attentionType TEXT NOT NULL,
  observation TEXT NOT NULL,
  FOREIGN KEY(doctorId) REFERENCES [users] (id),
  FOREIGN KEY(userId) REFERENCES [users] (id)
)
GO

INSERT INTO users (username,  password, name, lastName) VALUES ('skaplanski@frba.utn.edu.ar','seba', 'Sebastian', 'Kaplanski');
INSERT INTO users (username,  password, name, lastName) VALUES ('gramirez@gmail.com','gonza123', 'Gonzalo', 'Ramirez');
INSERT INTO users (username,  password, name, lastName) VALUES ('drperez@gmail.com','doctor', 'Alfonso', 'Perez');
INSERT INTO users (username,  password, name, lastName) VALUES ('drgomez@gmail.com','doctor', 'Matias', 'Gomez');

GO

INSERT INTO roles(title) VALUES ('Admin');
INSERT INTO roles(title) VALUES ('Doctor');
INSERT INTO roles(title) VALUES ('Patient');
GO

INSERT INTO user_roles(userId, roleId) VALUES ((SELECT id from users where username = 'skaplanski@frba.utn.edu.ar'), (SELECT id from roles where title='Patient'));
INSERT INTO user_roles(userId, roleId) VALUES ((SELECT id from users where username = 'gramirez@gmail.com'), (SELECT id from roles where title='Admin'));
INSERT INTO user_roles(userId, roleId) VALUES ((SELECT id from users where username = 'gramirez@gmail.com'), (SELECT id from roles where title='Patient'));
INSERT INTO user_roles(userId, roleId) VALUES ((SELECT id from users where username = 'drperez@gmail.com'), (SELECT id from roles where title='Doctor'));
INSERT INTO user_roles(userId, roleId) VALUES ((SELECT id from users where username = 'drgomez@gmail.com'), (SELECT id from roles where title='Doctor'));
GO

INSERT INTO historial(doctorId, userId, creationDate, attentionType, observation) VALUES (
    (SELECT id from users where username = 'drperez@gmail.com'),
    (SELECT id from users where username = 'skaplanski@frba.utn.edu.ar'),
    DATETIME('now'),
    'Consulta Medica',
    'Paciente vino a realizar control general'
);

INSERT INTO historial(doctorId, userId, creationDate, attentionType, observation) VALUES (
    (SELECT id from users where username = 'drperez@gmail.com'),
    (SELECT id from users where username = 'gramirez@gmail.com'),
    DATETIME('now'),
    'Consulta Medica',
    'Radiografía, re linda le salió'
);

INSERT INTO historial(doctorId, userId, creationDate, attentionType, observation) VALUES (
    (SELECT id from users where username = 'drperez@gmail.com'),
    (SELECT id from users where username = 'skaplanski@frba.utn.edu.ar'),
    DATETIME('now'),
    'Consulta Medica',
    'Paciente molesto vino devuelta'
);