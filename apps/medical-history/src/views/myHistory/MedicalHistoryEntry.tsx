import { MedicalHistory } from "@seg-apps-web/api-interfaces"

interface MedicalHistoryEntryProps {
  medicalHistoryEntry: MedicalHistory
  onClick: (id: MedicalHistory['id']) => void
}

export const MedicalHistoryEntry = ({ medicalHistoryEntry, onClick }: MedicalHistoryEntryProps) => {
  return (
    <tr>
      <td>{new Date(medicalHistoryEntry.creationDate).toLocaleDateString()}</td>
      <td>{medicalHistoryEntry.attentionType}</td>
      {/* <td>{getDoctorById(medicalHistoryEntry.doctorId)}</td> */}
      <td>{medicalHistoryEntry.doctorId}</td>
      <td>
        <span>{medicalHistoryEntry.observation}
        </span>
        <i onClick={() => onClick(medicalHistoryEntry.id)} className="bi bi-pencil-square"></i>
      </td>
    </tr>
  )
}