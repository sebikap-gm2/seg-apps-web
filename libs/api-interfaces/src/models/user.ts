export type User = {
  username: string
  password: string
}

export type UserWithoutPassword = Omit<User, 'password'>