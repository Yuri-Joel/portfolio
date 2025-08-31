import "../App.css"
import { useEffect, useState } from "react";

export const menuData = [
  { id: "home", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "skills", label: "Habilidades" },
  { id: "work", label: "Projetos" },
  { id: "services", label: "Serviços" },
  { id: "contact", label: "Contato" },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // ativa quando 50% da seção estiver visível
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <aside className="sidebar" id="sidebar">
      <nav className="nav">
        <div className="nav-menu">
          <div className="menu">
            <ul className="nav-list">
              {menuData.map((item) => (
                <li className="nav-item" key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="nav-close" id="nav-close">
          <i className="uil uil-times"></i>
        </div>
      </nav>
    </aside>
  );
}
