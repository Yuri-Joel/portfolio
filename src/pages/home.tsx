import profile from '../assets/image.png';
import Carrossel from '../components/Carrosel';
import { Footer } from '../components/footer';
import SectionHome from '../components/sectionHome';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';
import Skills from '../components/Skills';
import Testimonials from '../components/Testimonals';
import Portfolio from '../components/work';

export const Home = () => {

    return (
        <>
            <div className="nav-toggle" id="nav-toggle">
                <i className="uil uil-bars"></i>
            </div>

            <Sidebar />

            <main className="main">
                <SectionHome />

                <section className="about section" id="about">
                    <h2 className="section-title" data-heading="Minha Introdução">Sobre mim</h2>

                    <div className="about-container container grid">
                        <img
                            src={profile}
                            alt="Foto de perfil"
                            className="about-img"
                        />

                        <div className="about-data">
                            <h3 className="about-heading">
                                Olá, sou Yuri Joel
                            </h3>
                            <p className="about-description">
                                Tenho experiência sólida no desenvolvimento <strong>frontend</strong> e <strong>backend</strong>,
                                dominando desde a criação de interfaces modernas até a construção de APIs robustas e escaláveis.
                                Trabalho com foco em qualidade, boas práticas e performance.
                            </p>

                            <div className="about-info">
                                <div className="about-box">
                                    <i className="uil uil-award about-icon"></i>
                                    <h3 className="about-title">Experiência</h3>
                                    <span className="about-subtitle">+2 anos</span>
                                </div>

                                <div className="about-box">
                                    <i className="uil uil-suitcase-alt about-icon"></i>
                                    <h3 className="about-title">Projetos</h3>
                                    <span className="about-subtitle">+10 concluídos</span>
                                </div>

                                <div className="about-box">
                                    <i className="uil uil-headphones-alt about-icon"></i>
                                    <h3 className="about-title">Suporte</h3>
                                    <span className="about-subtitle">Online 24/7</span>
                                </div>
                            </div>

                            <a href="#contact" className="button">
                                <i className="uil uil-navigator button-icon"></i>Entre em contato
                            </a>
                        </div>
                    </div>

                    {/* Carrossel com margin-top */}
                    <div className="mt-10">
                        <Carrossel
                            items={[
                                <div className="p-4 bg-white rounded shadow text-center">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" className="w-12 h-12 mx-auto mb-2" />
                                    <h5>JavaScript</h5>
                                    <p>É uma linguagem de programação utilizada principalmente para desenvolvimento web, permitindo criar sites interativos.</p>
                                </div>,
                                <div className="p-4 bg-white rounded shadow text-center">
                                    <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" alt="TypeScript" className="w-12 h-12 mx-auto mb-2" />
                                    <h5>TypeScript</h5>
                                    <p>Superset do JavaScript que adiciona tipagem estática, ajudando a evitar erros e melhorar a manutenção de código.</p>
                                </div>,
                                <div className="p-4 bg-white rounded shadow text-center">
                                    <img src="https://nodejs.org/static/images/logo.svg" alt="Node.js" className="w-12 h-12 mx-auto mb-2" />
                                    <h5>Node.js</h5>
                                    <p>É um runtime de JavaScript no servidor, permitindo criar aplicações back-end escaláveis e rápidas.</p>
                                </div>,
                                <div className="p-4 bg-white rounded shadow text-center">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React / Next.js" className="w-12 h-12 mx-auto mb-2" />
                                    <h5>React / Next.js</h5>
                                    <p>Bibliotecas/frameworks para construção de interfaces web modernas e performáticas.</p>
                                </div>,
                                <div className="p-4 bg-white rounded shadow text-center">
                                    <img src="https://www.svgrepo.com/show/331488/mongodb.svg" className="w-12 h-12 mx-auto mb-2" alt="" />
                                    <h5>MongoDB</h5>
                                    <p>
                                        Banco de dados NoSQL orientado a documentos, altamente flexível e escalável, ideal para aplicações modernas.
                                    </p>
                                </div>

                            ]}
                        />
                    </div>
                </section>




                <section className="qualification section">
                    <h2 className="section-title" data-heading="Minha Jornada">Qualificações</h2>

                    <div className="qualification-container container grid">

                        {/* Educação */}
                        <div className="education">
                            <h3 className="qualification-title">
                                <i className="uil uil-graduation-cap"></i>Educação
                            </h3>

                            <div className="timeline">
                                <div className="timeline-item">
                                    <div className="circle-dot"></div>
                                    <h3 className="timeline-title">IPIL - Instituto Politécnico Industrial de Luanda</h3>
                                    <p className="timeline-text">Gestão de Sistemas Informáticos (Médio)</p>
                                    <span className="timeline-date">
                                        <i className="uil uil-calendar-alt"></i>2024
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Experiência */}
                        <div className="experience">
                            <h3 className="qualification-title">
                                <i className="uil uil-suitcase"></i>Experiencia
                            </h3>

                            <div className="timeline">
                                <div className="timeline-item">
                                    <div className="circle-dot"></div>
                                    <h3 className="timeline-title">Dev Bantu (Estágio)</h3>
                                    <p className="timeline-text">Backend Developer</p>
                                    <span className="timeline-date">
                                        <i className="uil uil-calendar-alt"></i>2024
                                    </span>
                                </div>

                                <div className="timeline-item">
                                    <div className="circle-dot"></div>
                                    <h3 className="timeline-title">Startup Zeno</h3>
                                    <p className="timeline-text">Iniciei como Frontend, depois FullStack Developer</p>
                                    <span className="timeline-date">
                                        <i className="uil uil-calendar-alt"></i>2024 - 2025
                                    </span>
                                </div>

                                <div className="timeline-item">
                                    <div className="circle-dot"></div>
                                    <h3 className="timeline-title">Hipertecno</h3>
                                    <p className="timeline-text">FullStack Developer</p>
                                    <span className="timeline-date">
                                        <i className="uil uil-calendar-alt"></i>2025 - Presente</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>


                <Skills />
                <Portfolio />

                <Services />

                <Testimonials />


                <section className="contact section" id="contact">
                    <h2 className="section-title" data-heading="Entre em Contato">Fale comigo</h2>

                    <div className="contact-container container">
                        <div className="contact-content">
                            <div className="contact-info" style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}
                            >

                                <div className="contact-card">
                                    <i className="uil uil-envelope-edit contact-card-icon"></i>
                                    <h3 className="contact-card-title">Email</h3>
                                    <span className="contact-card-data">yurijooel04@gmail.com</span>
                                </div>

                                <div className="contact-card">
                                    <i className="uil uil-whatsapp contact-card-icon"></i>
                                    <h3 className="contact-card-title">WhatsApp</h3>
                                    <span className="contact-card-data">935 699 190</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>




                <Footer />
            </main>
        </>
    );
}