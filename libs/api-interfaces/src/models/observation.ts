export type MedicalHistory = {
    id: string
    userId: string
    doctorId: string
    attentionType: string
    observation: string
  }

export type MedicalHistoryCreation=Omit<MedicalHistory,"id">
  