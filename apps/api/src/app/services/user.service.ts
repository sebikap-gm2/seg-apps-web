import { USERS } from "../../mockData";
import { Emailer } from "../utils/emailer";
import { getLeftSideOfEmail } from "../utils/mail";

// TODO: Implement with BD
let UserBD = [...USERS]
const Email = new Emailer()


export class UserService {
  static getUserByUsername(username: string) {
    return UserBD.find(u => u.username === username)
  }

  static updatePassword(username: string, newPassword: string) {
    UserBD = UserBD.map(u => u.username !== username ? u : { username, password: newPassword })
  }

  static async recoverPassword(username: string) {
    if (!this.getUserByUsername(username)) {
      return { ok: false, message: 'User not found' }
    }
    const newPass = getLeftSideOfEmail(username)
    this.updatePassword(username, newPass)
    const result = await Email.sendRecoverMail(username, newPass)
    if (result) {
      return { ok: true, message: 'Email Sent' }
    } else {
      return { ok: false, message: 'There was an issue sending the email' }
    }
  }
}