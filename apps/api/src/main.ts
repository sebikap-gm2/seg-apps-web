import * as express from 'express';
import * as cors from 'cors'
import { TypedRequestBody, User, UserWithoutPassword } from '@seg-apps-web/api-interfaces';
import { UserService } from './app/services';

const app = express();
app.use(cors())
app.use(express.json())

const greeting = { message: 'Welcome to api!' };

app.get('/api', (req, res) => {
  res.send(greeting);
});

app.post('/login', (req: TypedRequestBody<User>, res) => {
  const user = UserService.getUserByUsername(req.body.username)
  if (!user) {
    res.status(401).send({ message: 'User not found' })
    return
  }
  if (user.password !== req.body.password) {
    res.status(401).send({ message: 'Password is incorrect' })
  }
  res.status(200).send(greeting);
});

app.post('/recover', (req: TypedRequestBody<UserWithoutPassword>, res) => {
  const user = UserService.getUserByUsername(req.body.username)
  if (!user) {
    res.status(401).send({ message: 'User not found' })
    return
  }

  res.status(200).send({ message: 'Email sent' })
})

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port);
});
server.on('error', console.error);
