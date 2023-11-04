import { ReactNode } from "react";
import { getCookie } from "../../services";
import { User } from "@seg-apps-web/api-interfaces";

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const user = getCookie<User>("user");
  if (!user) return null


  return (
    <div style={{ backgroundColor: "#f6f6f6", display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <nav className="navbar">
        <img
          src="../assets/Medicare-sin-fondo.png"
          alt="Logo"
          className="logo"
        />

        <a href="/profile" className="profile">
          Perfil
        </a>
      </nav>

      <div className="content">
        <div className="sidebar">
          <a href="/home">Inicio</a>
          <a href={`/myHistory/${user.id}`}>Mi historial</a>
        </div>
        <div style={{ flex: 1, flexDirection: 'column' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
