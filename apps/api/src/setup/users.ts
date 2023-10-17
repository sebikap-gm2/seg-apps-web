import { v4 } from 'uuid'
import { USERS } from "./mockData";
import { UserRepository } from '../app/repositories/user.repository';

export function setupUsers(db) {
  db.serialize(async function () {
    await db.run("CREATE TABLE users (id TEXT PRIMARY KEY, username TEXT, password TEXT)");

    for (let i = 0; i < USERS.length; i++) {
      const stmt = db.prepare("INSERT INTO users VALUES (?, ?, ?)");
      const user = USERS[i]
      console.log('INSERTING ' + user.username)
      stmt.run(v4(), user.username, user.password);
      stmt.finalize();
    }

    db.each("SELECT * FROM users", function (err, row) {
      console.log(row);
    });
  });

  UserRepository.setDatabase(db)
}