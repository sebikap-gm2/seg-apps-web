import { Role, User } from "@seg-apps-web/api-interfaces"
import { useState } from "react"
import { HTTP } from "../../services";

const http = new HTTP('http://localhost:3333');

export const UserSearch = ({ onSelectUser }: { onSelectUser: (userId: User['id']) => void }) => {
  const [users, setUsers] = useState<User[]>([])
  const [userSearch, setUserSearch] = useState('')

  const handleUserSearch = async () => {
    const usersRes = await http.get<User[]>(`/users?userSearch=${userSearch}`);
    console.log(usersRes)
    if (usersRes.ok) {
      setUsers(usersRes.payload)
    }
  }

  return (
    <>
      <div>
        <input value={userSearch} onChange={e => setUserSearch(e.target.value)} />
        <button onClick={handleUserSearch}>Search</button>
      </div>
      <ul>
        {users.map(u => (
          <li>
            <button onClick={() => onSelectUser(u.id)}>{u.name} - {u.lastName}</button>
          </li>
        ))}
      </ul>
    </>
  )
}