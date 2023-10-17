// eslint-disable-next-line @typescript-eslint/no-var-requires
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

export class UserRepository {
  static getByUsername(username: string, callback: (err: Error | null, row: any) => void) {
    const sql = 'SELECT * FROM users WHERE username = ?';
    db.get(sql, [username], callback);
  }

  static updatePassword(username: string, newPassword: string, callback: (err: Error | null) => void) {
    const sql = 'UPDATE users SET password = ? WHERE username = ?';
    db.run(sql, [newPassword, username], callback);
  }
}
