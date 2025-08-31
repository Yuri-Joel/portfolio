import profile from '../assets/image.png'
export default function SectionHome () {
  return (
    <section className="home" id="home">
      <div className="home-container container grid">
        
        {/* Redes sociais */}
        <div className="home-social">
          <span className="home-social-follow">Siga-me</span>
          <div className="home-social-links">
           <a href="https://www.linkedin.com/in/yuri-joel-76128a2a3" target="_blank" className="home-social-link">
              <i className="uil uil-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Imagem principal */}
        <img
          src={profile}
          alt="Foto principal"
          className="home-img"
        />

        {/* Texto de apresentação */}
        <div className="home-data">
          <h1 className="home-title">Olá, eu sou o Yuri Gomes</h1>
          <h3 className="home-subtitle">Frontend & Backend Develop</h3>
          <p className="home-description">
            Sou apaixonado por tecnologia, design e inovação. 
            Trabalho com desenvolvimento web (React, Next.js, Node.js), 
            criação de sistemas e também com projetos criativos, 
            sempre buscando unir performance e experiência visual.
          </p>
          <a href="#about" className="button">
            <i className="uil uil-user button-icon"></i>
            Saiba mais sobre mim!
          </a>
        </div>

        {/* Informações de contato rápidas */}
        <div className="my-info">
          <div className="info-item">
            <i className="uil uil-whatsapp info-icon"></i>
            <div>
              <h3 className="info-title">Whatsapp</h3>
              <span className="info-subtitle">+244 935 699 190</span>
            </div>
          </div>

          <div className="info-item">
            <i className="uil uil-envelope-edit info-icon"></i>
            <div>
              <h3 className="info-title">Email</h3>
              <span className="info-subtitle">yurijooel04@gmail.com</span>
            </div>
          </div>

          <div className="info-item">
            <i className="uil uil-github-alt info-icon"></i>
            <div>
              <h3 className="info-title">GitHub</h3>
              <span className="info-subtitle">https://github.com/Yuri-Joel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
