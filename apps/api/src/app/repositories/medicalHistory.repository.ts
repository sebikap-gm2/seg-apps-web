// eslint-disable-next-line @typescript-eslint/no-var-requires
import { MedicalHistory, MedicalHistoryCreation, Role, UserRole } from "@seg-apps-web/api-interfaces";
import { RootRepository } from "./root.repository";
import { spawn } from 'node:child_process'

export class MedicalHistoryRepository {

  static async getAll(): Promise<MedicalHistory[]> {
    const sql = 'SELECT * FROM historial';
    return await new Promise((resolve, reject) => {
      RootRepository.database.all<MedicalHistory>(sql, [], (err, rows) => {
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


  static async getByUserId(userId: number): Promise<MedicalHistory[]> {
    console.log({ userId });
    const sql = 'SELECT * FROM historial WHERE userId = ?';
    return await new Promise((resolve, reject) => {
      RootRepository.database.all<MedicalHistory>(sql, [userId], (err, rows) => {
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

  static async create(data: MedicalHistory): Promise<MedicalHistory[]> {
    return await new Promise((resolve, reject) => {
      // RootRepository.database.run(`UPDATE historial SET observaciones='${data.observation}' WHERE id=${parseInt(data.id)}`,{}, 
      const result = RootRepository.database.all(`SELECT * FROM users`,
        (err, result) => {
          console.log({ result, err })
          if (err) {
            console.log(1)
            reject(err);
          } else if (result) {
            console.log(2)
            // console.log(1,rows);
            //  resolve(result);
          } else {
            console.log(3)
            // console.log(2,rows);
            //resolve([]);
          }
        });
      // console.log(4, result.);
      resolve([]);
      /*   RootRepository.database.run(sql, [data.doctorId,data.userId,data.attentionType,data.observation], (err, rows) => {
          if (err) {
            reject(err);
          } else if (rows) {
            resolve(rows);
          } else {
            resolve([]);
          }
        }); */
    });
  }




}
