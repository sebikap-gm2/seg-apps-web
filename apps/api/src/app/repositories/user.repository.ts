// eslint-disable-next-line @typescript-eslint/no-var-requires
import {User} from "@seg-apps-web/api-interfaces";
import {Database} from "sqlite3";

export class UserRepository {
  private static db: Database;

  static setDatabase(db: Database) {
    UserRepository.db = db;
  }

  static async getByUsername(username: string): Promise<User> {
    const sql = 'SELECT * FROM users WHERE username = ?';
    return await new Promise<User | null>((resolve, reject) => {
      this.db.get(sql, [username], (err, row: any) => {
        if (err) {
          reject(err);
        } else if (row) {
          const user: User = {
            username: row.username,
            password: row.password,
          };
          resolve(user);
        } else {
          resolve(null);
        }
      });
    });
  }

  static updatePassword(username: string, newPassword: string) {
    const sql = 'UPDATE users SET password = ? WHERE username = ?';
    return new Promise<void>((resolve, reject) => {
      this.db.run(sql, [newPassword, username], (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}
