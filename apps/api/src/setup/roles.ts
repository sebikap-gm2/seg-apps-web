import { v4 } from 'uuid'
import { UserRepository } from '../app/repositories/user.repository';
import { ROLES } from './mockData';

export function setupRoles(db) {
  db.serialize(async function () {
    await db.run("CREATE TABLE roles (id TEXT PRIMARY KEY, title TEXT)");

    for (let i = 0; i < ROLES.length; i++) {
      const stmt = db.prepare("INSERT INTO roles VALUES (?, ?)");
      const role = ROLES[i]
      stmt.run(v4(), role.title);
      stmt.finalize();
    }

    db.each("SELECT * FROM users", function (err, row) {
      console.log(row);
    });
  });

  UserRepository.setDatabase(db)
}