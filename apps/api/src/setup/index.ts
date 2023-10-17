import * as express from 'express';
import * as cors from 'cors'
import { setupUsers } from './users';
import { setupRoles } from './roles';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const sqlite3 = require('sqlite3').verbose();

export function setup() {
  const app = express();
  app.use(cors())
  app.use(express.json())

  const db = new sqlite3.Database(':memory:');

  setupUsers(db)
  setupRoles(db)

  return app
}