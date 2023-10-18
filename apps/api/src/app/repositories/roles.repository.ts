// eslint-disable-next-line @typescript-eslint/no-var-requires
import { Role, UserRole } from "@seg-apps-web/api-interfaces";
import { RootRepository } from "./root.repository";

export class RoleRepository {


  static async getAll(): Promise<Role[]> {
    const sql = 'SELECT * FROM roles';
    return await new Promise((resolve, reject) => {
      RootRepository.database.all<Role>(sql, [], (err, rows) => {
        if (err) {
          reject(err);
        } else if (rows) {
          resolve(rows);
        } else {
          resolve(null);
        }
      });
    });
  }

  static async getByUserId(userId: string): Promise<UserRole[]> {
    const sql = 'SELECT * FROM user_roles WHERE userId = ?';
    return await new Promise((resolve, reject) => {
      RootRepository.database.all<UserRole>(sql, [userId], (err, rows) => {
        if (err) {
          reject(err);
        } else if (rows) {
          resolve(rows);
        } else {
          resolve(null);
        }
      });
    });
  }
}
