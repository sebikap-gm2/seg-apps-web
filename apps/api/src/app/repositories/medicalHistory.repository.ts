// eslint-disable-next-line @typescript-eslint/no-var-requires
import { MedicalHistory } from "@seg-apps-web/api-interfaces";
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

  static async update(data: MedicalHistory): Promise<MedicalHistory[]> {
    return await new Promise((resolve, reject) => {
      const sql = `UPDATE historial SET observaciones='${data.observation}' WHERE id=${parseInt(data.id)}`;
      RootRepository.database.run(sql,
        (err, result) => {
          console.log({ result, err })
          if (err) {
            console.log(1)
            reject(err);
          } else if (result) {
            console.log(2)
          } else {
            console.log(3)
          }
        });
      resolve([]);
    });
  }

  static async create(data: MedicalHistory): Promise<MedicalHistory[]> {
    return await new Promise((resolve, reject) => {
      const sql = `INSERT INTO historial(doctorId, userId, creationDate, attentionType, observation)
                        VALUES ('${data.doctorId}','${data.userId}', '${data.creationDate}', '${data.attentionType}', '${data.observation}')`;
      RootRepository.database.run(sql,
        (err, result) => {
          console.log({ result, err })
          if (err) {
            console.log('error creating history',err)
            reject(err);
          } else if (result) {
            console.log(result)
          } else {
            console.log(3)
          }
        });
      resolve([]);
    });
  }
}
