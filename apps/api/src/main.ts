
import { TypedRequestBody, User, UserWithoutPassword } from '@seg-apps-web/api-interfaces';
import { RolesService, UserService } from './app/services';
import { setup } from './setup';

const app = setup()

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

    const roles = await RolesService.getRolesByUserId(user.id)

    if (user.password !== req.body.password) {
      res.status(401).send({ message: 'Password is incorrect' });
    } else {
      res.status(200).send({ ...user, roles });
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
