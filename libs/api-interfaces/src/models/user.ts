export type Role = {
  id: string
  title: string
}
export type RoleNotCreated = Omit<Role, 'id'>

export type User = {
  id: string
  username: string
  password: string
}

export type UserNotCreated = Omit<User, 'id'>
export type UserWithoutPassword = Omit<User, 'password'>