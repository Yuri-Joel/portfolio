import { useEffect, useState } from "react";
import "../styles/work.css";
interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    language: string;
    created_at: string;
}

export default function Portfolio() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [selectedRepo, setSelectedRepo] = useState<Repo | null>(null);
    const username = "Yuri-Joel";

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}/repos?sort=created&per_page=15`)
            .then((res) => res.json())
            .then((data) => {
                const filtered = data.filter((repo: Repo) =>
                    ["incubadora_html", "gestao-de-hotelaria", "Sistema-de-geolocalizacao-de-farmacias", "geofarma-mobile-React-native","aringome", "AndarDhack", "geracao-milionaria"].includes(repo.name)
                );
                setRepos(filtered);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <section className="work section" id="work">
            <h2 className="section-title" data-heading="Meu Portfólio">Projetos Recentes</h2>

            <div className="work-container container grid">
                {repos.map((repo) => (
                    <div key={repo.id} className="work-card">
                        <img
                            src={`https://opengraph.githubassets.com/1/${username}/${repo.name}`}
                            alt={repo.name}
                            className="work-img"
                        />
                        <h3 className="work-title">{repo.name}</h3>

                        {/* Botão Demo abre modal */}
                        <span onClick={() => setSelectedRepo(repo)} className="work-button"
                        >Demo<i className="uil uil-arrow-right work-button-icon"></i
                        ></span>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedRepo && (
                <div className="modal-overlay" onClick={() => setSelectedRepo(null)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedRepo(null)}>✕</button>

                        <h3 className="modal-title">{selectedRepo.name}</h3>
                        <p className="modal-description">
                            {selectedRepo.description ?? "Sem descrição disponível."}
                        </p>
                        <ul className="modal-info">
                            <li>
                                Criado: <span>{new Date(selectedRepo.created_at).toLocaleDateString("pt-BR")}</span>
                            </li>
                            <li>
                                Linguagem: <span>{selectedRepo.language ?? "N/A"}</span>
                            </li>
                            <li>
                                Link:{" "}
                                <a href={selectedRepo.html_url} target="_blank" rel="noopener noreferrer">
                                    {selectedRepo.html_url}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </section>
    );
}
