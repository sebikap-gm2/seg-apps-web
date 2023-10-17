import * as express from 'express';
import * as cors from 'cors'
import { TypedRequestBody, User, UserWithoutPassword } from '@seg-apps-web/api-interfaces';
import { UserService } from './app/services';
import {UserRepository} from "./app/repositories/user.repository";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const sqlite3 = require('sqlite3').verbose();

const app = express();
app.use(cors())
app.use(express.json())

const db = new sqlite3.Database(':memory:');
db.serialize(async function () {
  await db.run("CREATE TABLE users (id INT, username TEXT, password TEXT)");

  // You can add some initial data if needed
  const stmt = db.prepare("INSERT INTO users VALUES (?, ?, ?)");
  stmt.run(1, 'user1', 'password1');
  stmt.finalize();

  db.each("SELECT * FROM users", function (err, row) {
    console.log(row.id, row.username, row.password);
  });
});
UserRepository.setDatabase(db)
const greeting = { message: 'Welcome to api!' };

app.get('/api', (req, res) => {
  res.send(greeting);
});

app.post('/login', async (req: TypedRequestBody<User>, res) => {
  console.log('received POST /login request')
  try {
    const user = await UserService.getUserByUsername(req.body.username);

    if (!user) {
      res.status(401).send({ message: 'User not found' });
      return;
    }

    if (user.password !== req.body.password) {
      res.status(401).send({ message: 'Password is incorrect' });
    } else {
      console.log('found user', user)
      res.status(200).send({ message: 'user authorized'});
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.post('/recover', async (req: TypedRequestBody<UserWithoutPassword>, res) => {
  const user = UserService.getUserByUsername(req.body.username)
  if (user != null) {
    res.status(401).send({ message: 'User not found' })
    return
  }
  const { ok, message } = await UserService.recoverPassword(req.body.username)
  const status = ok ? 200 : 401
  res.status(status).send({ message })
})

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port);
});
server.on('error', console.error);
