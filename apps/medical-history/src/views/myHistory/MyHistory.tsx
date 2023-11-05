import { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap"
import { HTTP, getCookie } from "../../services";
import { MedicalHistory, Role, User, UserRole } from "@seg-apps-web/api-interfaces";
import { MedicalHistoryEntry } from "./MedicalHistoryEntry";
import { useParams } from "react-router-dom";
import { Layout } from "../../components";
import { UserSearch } from "./UserSearch";

const http = new HTTP('http://localhost:3333');

export const MyHistory = () => {
  const { userId } = useParams()
  const user = getCookie<User & { roles: string[] }>("user");

  const [medicalHistories, setMedicalHistories] = useState<MedicalHistory[]>([]);
  const [selectedMedicalHistoryId, setSelectedMedicalHistoryId] = useState<MedicalHistory['id']>();
  const [observation, setObservation] = useState('')

  const [selectedUserId, setSelectedUserId] = useState<User['id']>()


  useEffect(() => {
    ; (async () => {
      console.log(selectedUserId ? selectedUserId : userId)
      const medicalHistoriesRes = await http.get<{ medicalHistories: MedicalHistory[] }>(`/observations/${selectedUserId ? selectedUserId : userId}`);
      if (medicalHistoriesRes.ok) {
        console.log(medicalHistoriesRes)
        setMedicalHistories(medicalHistoriesRes.payload.medicalHistories)
      }
    })()

  }, [selectedUserId])

  const handleOpenObservation = (id: MedicalHistory['id']) => setSelectedMedicalHistoryId(id);

  const handleCloseModal = () => {
    setSelectedMedicalHistoryId(undefined);
    setObservation('')
  };


  const handleSave = async () => {
    const res = await http.post<boolean>('/observations/update', {
      userId,
      //medicalHistoryEntryId,
      id: 1,
      attentionType: "consulta medica",
      doctorId: "3",
      observation
    });

  }

  if (!user) return null

  return (
    <Layout>
      <p className="title">
        Historial de Atenciones para: <span style={{ fontWeight: "bold" }}>{user.name} {user.lastName}</span>
      </p>
      {user.roles.includes('Doctor') ? <UserSearch onSelectUser={setSelectedUserId} /> : null}
      <Table responsive className="custom-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Tipo Atencion</th>
            <th>Profesional</th>
            <th>Observaciones</th>
          </tr>
        </thead>
        <tbody>
          {medicalHistories.map(medicalHistoryEntry => <MedicalHistoryEntry medicalHistoryEntry={medicalHistoryEntry} onClick={handleOpenObservation} />)}
        </tbody>
      </Table>
      <Modal show={!!selectedMedicalHistoryId} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Observación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            value={medicalHistories.find(m => m.id === selectedMedicalHistoryId)?.observation}
            onChange={(e) => setObservation(e.target.value)}
            placeholder="Escribe tu observación aquí"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSave}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  )
}