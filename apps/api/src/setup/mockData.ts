import { RoleNotCreated, UserNotCreated } from '@seg-apps-web/api-interfaces'

export const ROLES: RoleNotCreated[] = [
  { title: 'Admin' },
  { title: 'Doctor' },
  { title: 'Patient' },
]

export const USERS: UserNotCreated[] = [
  { username: 'admin@gmail.com', password: 'admin123' },
  { username: 'skaplanski@frba.utn.edu.ar', password: 'admin123' },
]