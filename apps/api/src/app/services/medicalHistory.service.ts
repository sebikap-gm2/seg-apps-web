import { MedicalHistory, MedicalHistoryCreation } from "@seg-apps-web/api-interfaces";
import { RoleRepository } from "../repositories";
import { MedicalHistoryRepository } from "../repositories/medicalHistory.repository";

export class MedicalHistoryService {

  static async getAll() {
    return MedicalHistoryRepository.getAll()
      .then(medicalHistory => medicalHistory)
      .catch((error) => {
        throw new Error(`Error fetching Medical History: ${error.message}`);
      });
  }


  static async getByUserId(userId: string) {
    console.log({userId});
    const intUserId = parseInt(userId);
    return MedicalHistoryRepository.getByUserId(intUserId)
      .then(medicalHistory => medicalHistory)
      .catch((error) => {
        throw new Error(`Error fetching Medical History by userId: ${error.message}`);
      });
  }

  static async create(data: MedicalHistory) {
    return MedicalHistoryRepository.create(data)
      .then(medicalHistory => medicalHistory)
      .catch((error) => {
        throw new Error(`Error creating Medical History: ${error.message}`);
      });
  }


}