// eslint-disable-next-line @typescript-eslint/no-var-requires
import { MedicalHistory, MedicalHistoryCreation, Role, UserRole } from "@seg-apps-web/api-interfaces";
import { RootRepository } from "./root.repository";

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
    const sql = 'SELECT * FROM historial WHERE id_paciente = ?';
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
    const sql = `INSERT INTO historial(id_profesional, id_paciente, fecha, tipo_atencion, observaciones) VALUES (
      ?,
      ?,
      DATETIME('now'),
      ?,
      ?
  )`;
    //console.log(sql);
    return await new Promise((resolve, reject) => {
      console.log(`UPDATE historial SET observaciones='${data.observation}' WHERE id=${parseInt(data.id)}`);
     // RootRepository.database.run(`UPDATE historial SET observaciones='${data.observation}' WHERE id=${parseInt(data.id)}`,{}, 
     const result = RootRepository.database.run(`SELECT * FROM users`, 
     (result, err) => {
        console.log({result,err})
        if (err) {
          reject(err);
        } else if (result) {
         // console.log(1,rows);
          //@ts-ignore
        //  resolve(result);
        } else {
         // console.log(2,rows);
          //resolve([]);
        }
      });
      console.log(result);
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
