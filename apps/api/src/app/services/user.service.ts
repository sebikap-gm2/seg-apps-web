import { Emailer } from "../utils/emailer";
import { getLeftSideOfEmail } from "../utils/mail";
import { UserRepository } from "../repositories/user.repository";
import { User } from "@seg-apps-web/api-interfaces";

const Email = new Emailer()

export class UserService {
  static async getUserByUsername(username: string): Promise<User> {
    return UserRepository.getByUsername(username).then((user) => {
      if (user) {
        return user;
      } else {
        return null
      }
    }).catch((error) => {
      throw new Error(`Error fetching user by username: ${error.message}`);
    });
  }

  static async updatePassword(username: string, newPassword: string) {
    try {
      await UserRepository.updatePassword(username, newPassword);
    } catch (error) {
      throw new Error(`Error updating user password: ${error.message}`);
    }
  }

  static async recoverPassword(username: string) {
    const user = await this.getUserByUsername(username);
    if (!user) {
      return { ok: false, message: 'User not found' }
    }
    const newPass = getLeftSideOfEmail(username)
    await this.updatePassword(username, newPass)
    const result = await Email.sendRecoverMail(username, newPass)
    if (result) {
      return { ok: true, message: 'Email Sent' }
    } else {
      return { ok: false, message: 'There was an issue sending the email' }
    }
  }
}
