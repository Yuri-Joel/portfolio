

export const Footer = ()=> {


    return (
        <footer className="footer">
        <div className="footer-bg">
            <div className="footer-container container grid">
                <div>
                    <h1 className="footer-title">Yuri Joel</h1>
                    <span className="footer-subtitle">Frontend & Backend Develop</span>
                </div>

                <ul className="footer-links">
                    <li>
                        <a href="#services" className="footer-links">Serviços</a>
                    </li>
                    <li>
                        <a href="#work" className="footer-links">Projetos</a>
                    </li>
                    <li>
                        <a href="#contact" className="footer-links">Contactos</a>
                    </li>
                </ul>

                <div className="footer-socials">
                <a href="https://www.linkedin.com/in/yuri-joel-76128a2a3" target="_blank" className="home-social-link">
              <i className="uil uil-linkedin"></i>
            </a>
                </div>
            </div>
            <p className="footer-copy">
            &#169;
            <a href="https://github.com/Yuri-Joel">Dev CC</a>.
            Todos os direitos reservados.
          </p>
        
        </div>
    </footer>
    )
}