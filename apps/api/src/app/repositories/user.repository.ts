// eslint-disable-next-line @typescript-eslint/no-var-requires
import { User } from "@seg-apps-web/api-interfaces";
import { RootRepository } from "./root.repository";

export class UserRepository {

  static async getByUsername(username: string): Promise<User> {
    const sql = 'SELECT * FROM users WHERE username = ?';
    return await new Promise((resolve, reject) => {
      RootRepository.database.get<User>(sql, [username], (err, row) => {
        if (err) {
          reject(err);
        } else if (row) {
          resolve(row);
        } else {
          resolve(null);
        }
      });
    });
  }

  static updatePassword(username: string, newPassword: string) {
    const sql = 'UPDATE users SET password = ? WHERE username = ?';
    return new Promise<void>((resolve, reject) => {
      RootRepository.database.run(sql, [newPassword, username], (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}
