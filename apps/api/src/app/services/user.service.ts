import { USERS } from "../../mockData";
import { Emailer } from "../utils/emailer";
import { getLeftSideOfEmail } from "../utils/mail";
import {UserRepository} from "../repositories/user.repository";

const UserBD = UserRepository

export class UserService {
  static getUserByUsername(username: string) {
    return UserBD.getByUsername(username, (err, row) => {
      if (err) {
        console.error('Error get by username:', err.message);
      } else {
        console.log('User Data:', row);
      }
    });
  }

  static updatePassword(username: string, newPassword: string) {
    UserBD.updatePassword(username, newPassword, (err) => {
      if (err) {
        console.error('Error get by username:', err.message);
      } else {
        console.log('Password updated successfully');
      }
    });
  }

  static async recoverPassword(username: string) {
    if (this.getUserByUsername(username) === null) {
      return { ok: false, message: 'User not found' }
    }
    const newPass = getLeftSideOfEmail(username)
    this.updatePassword(username, newPass)
    const Email = new Emailer()
    const result = await Email.sendRecoverMail(username, newPass)
    if (result) {
      return { ok: true, message: 'Email Sent' }
    } else {
      return { ok: false, message: 'There was an issue sending the email' }
    }
  }
}
