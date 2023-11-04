
import { MedicalHistory, Role, TypedRequestBody, TypedRequestQuery, User, UserRole, UserWithoutPassword } from '@seg-apps-web/api-interfaces';
import { RolesService, UserService } from './app/services';
import { setup } from './setup';
import { MedicalHistoryService } from './app/services/medicalHistory.service';

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
  const user = await UserService.getUserByUsername(req.body.username)
  if (user == null) {
    res.status(404).send({ message: 'User not found' })
    return
  }
  const { ok, message } = await UserService.recoverPassword(req.body.username)
  const status = ok ? 200 : 404
  res.status(status).send({ message })
})

app.get('/users', async (req, res) => {
  const userSearch = req.query.userSearch as string;
  const users = await UserService.findUsernameLike(userSearch)
  console.log({ userSearch, users })
  /*   if (medicalHistories == null) {
      res.status(404).send({ message: 'User not found' })
      return
    } */

  res.status(200).send(users)
})

app.get('/observations', async (req: TypedRequestQuery<{ medicalHistories: MedicalHistory[] }>, res) => {
  const medicalHistories = await MedicalHistoryService.getAll()
  /*   if (medicalHistories == null) {
      res.status(404).send({ message: 'User not found' })
      return
    } */

  res.status(200).send(medicalHistories)
})

app.get('/observations/:userId', async (req: TypedRequestQuery<{ userId: string }>, res) => {
  //@ts-ignore
  const medicalHistories = await MedicalHistoryService.getByUserId(req.params.userId)
  /*   if (medicalHistories == null) {
      res.status(404).send({ message: 'User not found' })
      return
    } */

  res.status(200).send({ medicalHistories })
})


app.post('/observations/update', async (req: TypedRequestBody<MedicalHistory>, res) => {
  const ok = await MedicalHistoryService.create(req.body)

  const status = ok ? 200 : 404
  res.status(status).send({ ok })
})


const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port);
});
server.on('error', console.error);
