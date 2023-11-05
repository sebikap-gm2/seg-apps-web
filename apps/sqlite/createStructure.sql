CREATE TABLE  users(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  name TEXT NOT NULL,
  lastName TEXT NOT NULL,
  edad INTEGER,
  sexo TEXT
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

INSERT INTO users (username,  password, name, lastName) VALUES ('admin','afDV-E21!+c.', 'Admin', 'Admin');
INSERT INTO users (username,  password, name, lastName, edad, sexo) VALUES ('skaplanski@frba.utn.edu.ar','seba', 'Sebastian', 'Kaplanski', 25, 'M');
INSERT INTO users (username,  password, name, lastName, edad, sexo) VALUES ('gramirez@gmail.com','gonza123', 'Gonzalo', 'Ramirez',34, 'M');
INSERT INTO users (username,  password, name, lastName, edad, sexo) VALUES ('mdiaz@gmail.com','madiaz', 'Mariano', 'Diaz', 42, 'M');
INSERT INTO users (username,  password, name, lastName, edad, sexo) VALUES ('alopez@gmail.com','aguslo', 'Agustin', 'Lopez', 22, 'M');
INSERT INTO users (username,  password, name, lastName, edad, sexo) VALUES ('ngarcia@gmail.com','ngarcia', 'Natalia', 'Garcia', 41, 'F');
INSERT INTO users (username,  password, name, lastName, edad, sexo) VALUES ('csosa@gmail.com','casosa', 'Catalina', 'Sosa', 68, 'F');
INSERT INTO users (username,  password, name, lastName, edad, sexo) VALUES ('calvarez@gmail.com','calvar', 'Cristina', 'Alvarez', 32, 'F');
INSERT INTO users (username,  password, name, lastName, edad, sexo) VALUES ('ltorres@gmail.com','ltorre', 'Luciano', 'Torres', 18, 'M');
INSERT INTO users (username,  password, name, lastName, edad, sexo) VALUES ('aruiz@gmail.com','arui', 'Alan', 'Ruiz', 14, 'M');
INSERT INTO users (username,  password, name, lastName, edad, sexo) VALUES ('gbenitez@gmail.com','gabenit', 'Gabriela', 'Benitez', 28, 'F');
INSERT INTO users (username,  password, name, lastName, edad, sexo) VALUES ('drperez@gmail.com','aperez', 'Alfonso', 'Perez', 41, 'M');
INSERT INTO users (username,  password, name, lastName, edad, sexo) VALUES ('drgomez@gmail.com','mgomez', 'Matias', 'Gomez', 34, 'M');
INSERT INTO users (username,  password, name, lastName, edad, sexo) VALUES ('drgonzalez@gmail.com','marcgonzalez', 'Marcos', 'Gonzalez', 39, 'M');
INSERT INTO users (username,  password, name, lastName, edad, sexo) VALUES ('drrodriguez@gmail.com','jrodri', 'Jorge', 'Rodriguez', 53, 'M');
INSERT INTO users (username,  password, name, lastName, edad, sexo) VALUES ('dralfonso@gmail.com','lucalfon', 'Lucas', 'Alfonso', 27, 'M');
INSERT INTO users (username,  password, name, lastName, edad, sexo) VALUES ('drfernandez@gmail.com','pafern', 'Pablo', 'Fernandez', 33, 'M');
INSERT INTO users (username,  password, name, lastName, edad, sexo) VALUES ('dralonso@gmail.com','maralo', 'Martin', 'Alonso',  37, 'M');
INSERT INTO users (username,  password, name, lastName, edad, sexo) VALUES ('drafuentes@gmail.com','martfuen', 'Martina', 'Fuentes', 28, 'F');
INSERT INTO users (username,  password, name, lastName, edad, sexo) VALUES ('drarojas@gmail.com','carojas', 'Camila', 'Rojas', 57, 'F');
INSERT INTO users (username,  password, name, lastName, edad, sexo) VALUES ('dramartinez@gmail.com','lumart', 'Lucila', 'Martinez',  37, 'F');
INSERT INTO users (username,  password, name, lastName, edad, sexo) VALUES ('draromero@gmail.com','ludromer', 'Ludmila', 'Romero',  42, 'F');


GO

INSERT INTO roles(title) VALUES ('Admin');
INSERT INTO roles(title) VALUES ('Doctor');
INSERT INTO roles(title) VALUES ('Patient');
GO

INSERT INTO user_roles(userId, roleId) VALUES ((SELECT id from users where username = 'admin'), (SELECT id from roles where title='Admin'));
INSERT INTO user_roles(userId, roleId) VALUES ((SELECT id from users where username = 'gramirez@gmail.com'), (SELECT id from roles where title='Admin'));
INSERT INTO user_roles(userId, roleId) VALUES ((SELECT id from users where username = 'skaplanski@frba.utn.edu.ar'), (SELECT id from roles where title='Patient'));
INSERT INTO user_roles(userId, roleId) VALUES ((SELECT id from users where username = 'mdiaz@gmail.com'), (SELECT id from roles where title='Patient'));
INSERT INTO user_roles(userId, roleId) VALUES ((SELECT id from users where username = 'alopez@gmail.com'), (SELECT id from roles where title='Patient'));
INSERT INTO user_roles(userId, roleId) VALUES ((SELECT id from users where username = 'ngarcia@gmail.com'), (SELECT id from roles where title='Patient'));
INSERT INTO user_roles(userId, roleId) VALUES ((SELECT id from users where username = 'calvarez@gmail.com'), (SELECT id from roles where title='Patient'));
INSERT INTO user_roles(userId, roleId) VALUES ((SELECT id from users where username = 'ltorres@gmail.com'), (SELECT id from roles where title='Patient'));
INSERT INTO user_roles(userId, roleId) VALUES ((SELECT id from users where username = 'aruiz@gmail.com'), (SELECT id from roles where title='Patient'));
INSERT INTO user_roles(userId, roleId) VALUES ((SELECT id from users where username = 'gbenitez@gmail.com'), (SELECT id from roles where title='Patient'));
INSERT INTO user_roles(userId, roleId) VALUES ((SELECT id from users where username = 'csosa@gmail.com'), (SELECT id from roles where title='Patient'));
INSERT INTO user_roles(userId, roleId) VALUES ((SELECT id from users where username = 'drperez@gmail.com'), (SELECT id from roles where title='Doctor'));
INSERT INTO user_roles(userId, roleId) VALUES ((SELECT id from users where username = 'drgomez@gmail.com'), (SELECT id from roles where title='Doctor'));
INSERT INTO user_roles(userId, roleId) VALUES ((SELECT id from users where username = 'drgonzalez@gmail.com'), (SELECT id from roles where title='Doctor'));
INSERT INTO user_roles(userId, roleId) VALUES ((SELECT id from users where username = 'drrodriguez@gmail.com'), (SELECT id from roles where title='Doctor'));
INSERT INTO user_roles(userId, roleId) VALUES ((SELECT id from users where username = 'dralfonso@gmail.com'), (SELECT id from roles where title='Doctor'));
INSERT INTO user_roles(userId, roleId) VALUES ((SELECT id from users where username = 'drfernandez@gmail.com'), (SELECT id from roles where title='Doctor'));
INSERT INTO user_roles(userId, roleId) VALUES ((SELECT id from users where username = 'dralonso@gmail.com'), (SELECT id from roles where title='Doctor'));
INSERT INTO user_roles(userId, roleId) VALUES ((SELECT id from users where username = 'drafuentes@gmail.com'), (SELECT id from roles where title='Doctor'));
INSERT INTO user_roles(userId, roleId) VALUES ((SELECT id from users where username = 'drarojas@gmail.com'), (SELECT id from roles where title='Doctor'));
INSERT INTO user_roles(userId, roleId) VALUES ((SELECT id from users where username = 'dramartinez@gmail.com'), (SELECT id from roles where title='Doctor'));
INSERT INTO user_roles(userId, roleId) VALUES ((SELECT id from users where username = 'draromero@gmail.com'), (SELECT id from roles where title='Doctor'));


GO

INSERT INTO historial(doctorId, userId, creationDate, attentionType, observation) VALUES (
    (SELECT id from users where username = 'drperez@gmail.com'),
    (SELECT id from users where username = 'skaplanski@frba.utn.edu.ar'),
    '2022-10-05 15:37:54',
    'Consulta Medica',
    'Paciente vino a realizar control general'
);

INSERT INTO historial(doctorId, userId, creationDate, attentionType, observation) VALUES (
    (SELECT id from users where username = 'drperez@gmail.com'),
    (SELECT id from users where username = 'gramirez@gmail.com'),
    '2022-10-12 16:40:51',
    'Consulta Medica',
    'Radiografía, re linda le salió'
);

INSERT INTO historial(doctorId, userId, creationDate, attentionType, observation) VALUES (
    (SELECT id from users where username = 'drperez@gmail.com'),
    (SELECT id from users where username = 'skaplanski@frba.utn.edu.ar'),
    '2022-11-02 11:05:41',
    'Consulta Medica',
    'Paciente molesto vino devuelta'
);

INSERT INTO historial(doctorId, userId, creationDate, attentionType, observation) VALUES (
    (SELECT id from users where username = 'drperez@gmail.com'),
    (SELECT id from users where username = 'mdiaz@gmail.com'),
    '2022-12-05 12:08:24',
    'Consulta Medica',
    'Paciente presenta una molestia en la rodilla. Se lo manda a realizar estudios.'
);

INSERT INTO historial(doctorId, userId, creationDate, attentionType, observation) VALUES (
    (SELECT id from users where username = 'drperez@gmail.com'),
    (SELECT id from users where username = 'mdiaz@gmail.com'),
    '2022-12-08 12:03:02',
    'Radiografia',
    'Radiografia no muestra lesiones graves'
);

INSERT INTO historial(doctorId, userId, creationDate, attentionType, observation) VALUES (
    (SELECT id from users where username = 'drperez@gmail.com'),
    (SELECT id from users where username = 'mdiaz@gmail.com'),
    '2023-01-04 11:02:02',
    'Consulta Kinesiologo',
    'Se le recetan ejercicios y sesiones de resonancia magnetica'
);

INSERT INTO historial(doctorId, userId, creationDate, attentionType, observation) VALUES (
    (SELECT id from users where username = 'drgomez@gmail.com'),
    (SELECT id from users where username = 'alopez@gmail.com'),
    '2023-02-10 08:05:06',
    'Guardia',
    'Paciente presenta dolor abdominal. Se lo mantiene en observacion'
);

INSERT INTO historial(doctorId, userId, creationDate, attentionType, observation) VALUES (
    (SELECT id from users where username = 'drgonzalez@gmail.com'),
    (SELECT id from users where username = 'ngarcia@gmail.com'),
    '2023-03-01 14:00:01',
    'Consulta Medica',
    'Paciente desea realizar control general. Se la manda a realizar estudios'
);

INSERT INTO historial(doctorId, userId, creationDate, attentionType, observation) VALUES (
    (SELECT id from users where username = 'drgonzalez@gmail.com'),
    (SELECT id from users where username = 'ngarcia@gmail.com'),
    '2023-03-10 11:10:04',
    'Analisis de sangre y orina',
    'Paciente realiza ambos analisis'
);

INSERT INTO historial(doctorId, userId, creationDate, attentionType, observation) VALUES (
    (SELECT id from users where username = 'drgonzalez@gmail.com'),
    (SELECT id from users where username = 'ngarcia@gmail.com'),
    '2023-03-17 12:15:04',
    'Chequeo de resultados de analisis',
    'Se revisan resultados, se deja notado un poco elevado el valor del colesterol'
);

INSERT INTO historial(doctorId, userId, creationDate, attentionType, observation) VALUES (
    (SELECT id from users where username = 'calvarez@gmail.com'),
    (SELECT id from users where username = 'drrodriguez@gmail.com'),
    '2023-03-12 16:12:04',
    'Mamografia',
    'Paciente realiza mamografia en el dia de la fecha'
);

INSERT INTO historial(doctorId, userId, creationDate, attentionType, observation) VALUES (
    (SELECT id from users where username = 'calvarez@gmail.com'),
    (SELECT id from users where username = 'drrodriguez@gmail.com'),
    '2023-03-14 12:15:04',
    'Chequeo mamografia',
    'Se detecta un absceso benigno'
);

INSERT INTO historial(doctorId, userId, creationDate, attentionType, observation) VALUES (
    (SELECT id from users where username = 'ltorres@gmail.com'),
    (SELECT id from users where username = 'dralfonso@gmail.com'),
    '2023-04-15 10:10:04',
    'Urologia',
    'Se lo manda a realizar analisis de orina por posible infeccion'
);

INSERT INTO historial(doctorId, userId, creationDate, attentionType, observation) VALUES (
    (SELECT id from users where username = 'ltorres@gmail.com'),
    (SELECT id from users where username = 'dralfonso@gmail.com'),
    '2023-04-22 11:20:04',
    'Chequeo Analisis de Orina',
    'No se detectan valores por fuera de lo normal.'
);

INSERT INTO historial(doctorId, userId, creationDate, attentionType, observation) VALUES (
    (SELECT id from users where username = 'aruiz@gmail.com'),
    (SELECT id from users where username = 'drafuentes@gmail.com'),
    '2023-05-13 09:24:04',
    'Guardia',
    'Paciente presenta dolor en la muñeca causado por una caida. Se lo manda a radiografia'
);

INSERT INTO historial(doctorId, userId, creationDate, attentionType, observation) VALUES (
    (SELECT id from users where username = 'aruiz@gmail.com'),
    (SELECT id from users where username = 'drafuentes@gmail.com'),
    '2023-05-13 10:10:04',
    'Radiografia',
    'Radiografia muestra fractura en muñeca'
);

INSERT INTO historial(doctorId, userId, creationDate, attentionType, observation) VALUES (
    (SELECT id from users where username = 'aruiz@gmail.com'),
    (SELECT id from users where username = 'drafuentes@gmail.com'),
    '2023-05-13 11:05:04',
    'Guardia',
    'Se le coloca un yeso en la zona de la muñeca al paciente'
);