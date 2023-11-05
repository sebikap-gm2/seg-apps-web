export type MedicalHistory = {
    id: string
    userId: string
    doctorId: string
    attentionType: string
    observation: string
    creationDate: string
  }

export type MedicalHistoryCreation=Omit<MedicalHistory,"id">
  