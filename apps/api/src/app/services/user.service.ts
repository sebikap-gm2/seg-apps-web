import { USERS } from "../../mockData";

// TODO: Implement with BD?
export class UserService {
  static getUserByUsername(username: string) {
    return USERS.find(u => u.username === username)
  }
}