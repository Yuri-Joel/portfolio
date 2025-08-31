
import { useState } from "react"
import "../styles/services.css"

interface Service {
  id: number
  titulo: string
  icone: string
  descricao: string
  itens: string[]
}

export default function Services() {
  const [ativo, setAtivo] = useState<number | null>(null)

  const servicos: Service[] = [
    {
      id: 1,
      titulo: "Desenvolvedor Backend",
      icone: "uil uil-server",
      descricao:
        "Desenvolvo APIs rápidas, seguras e escaláveis, aplicando boas práticas de desenvolvimento.",
      itens: [
        "APIs REST e RestFull",
        "Integração com bancos de dados",
        "Autenticação e segurança",
        "Escalabilidade e performance",
      ],
    },
    {
      id: 2,
      titulo: "Desenvolvedor Frontend & Mobile",
      icone: "uil uil-web-grid",
      descricao:
        "Crio interfaces modernas, responsivas e otimizadas para melhor experiência do usuário.",
      itens: [
        "Aplicações React / Next.js",
        "React Native",
        "Responsividade (Mobile First)",
        "SEO e performance",
        "Integrações com APIs",
      ],
    },
    {
      id: 3,
      titulo: "UI/UX Designer",
      icone: "uil uil-arrow",
      descricao:
        "Desenho experiências digitais envolventes, acessíveis e intuitivas.",
      itens: [
        "Pesquisa com usuários",
        "Wireframes e protótipos",
        "Design Systems",
        "Testes de usabilidade",
      ],
    },
    {
      id: 4,
      titulo: "Designer de Branding",
      icone: "uil uil-edit",
      descricao:
        "Fortaleço a identidade visual de empresas através de design estratégico.",
      itens: [
        "Identidade visual",
        "Manual de marca",
        "Design de logotipos",
        "Materiais gráficos",
      ],
    },
  ]

  return (
    <section className="services section" id="services">
      <h2 className="section-title">O que eu ofereço</h2>

      <div className="services-container">
        {servicos.map((servico) => (
          <div key={servico.id} className="services-content">
            <div className="services-header">
              <i className={`${servico.icone} services-icon`}></i>
              <h3 className="services-title">{servico.titulo}</h3>
            </div>

            <button
              className="services-button"
              onClick={() => setAtivo(servico.id)}
            >
              Ver mais <i className="uil uil-arrow-right"></i>
            </button>

            {ativo === servico.id && (
              <div className="modal-overlay" onClick={() => setAtivo(null)}>
                <div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="modal-close"
                    onClick={() => setAtivo(null)}
                  >
                    <i className="uil uil-times"></i>
                  </button>

                  <h3>{servico.titulo}</h3>
                  <p>{servico.descricao}</p>

                  <ul>
                    {servico.itens.map((item, idx) => (
                      <li key={idx}>
                        <i className="uil uil-check-circle"></i> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
