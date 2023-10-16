import * as express from 'express';
import { Message } from '@seg-apps-web/api-interfaces';
import * as cors from 'cors'
import { USERS } from './models';

const app = express();
app.use(cors())
app.use(express.json())

const greeting: Message = { message: 'Welcome to api!' };

app.get('/api', (req, res) => {
  res.send(greeting);
});

app.post('/login', (req, res) => {
  const user = USERS.find(u => u.username === req.body.username)
  if (!user) {
    res.status(401).send({ message: 'User not found' })
    return
  }
  if (user.password !== req.body.password) {
    res.status(401).send({ message: 'Password is incorrect' })
  }
  res.status(200).send(greeting);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port);
});
server.on('error', console.error);
