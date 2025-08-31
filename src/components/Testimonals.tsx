
import { useRef, type MouseEvent } from "react";

interface Testimonial {
  name: string;
  role: string;
  year: number;
  text: string;
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Drag state
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    isDown = true;
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
  };

  const handleMouseUp = () => {
    isDown = false;
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // velocidade do scroll
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const testimonials: Testimonial[] = [
    {
      name: "Antonio Lunguela",
      role: "Presidente da Associação AGM",
      year: 2025,
      text: "Eu tive o prazer de trabalhar com este profissional para desenvolver o site da nossa associação AGM. Fiquei muito satisfeito com o resultado!"
    },
    {
      name: "Gaspar Dias",
      role: "CEO da SidasJoin",
      year: 2025,
      text: "Solicitei uma plataforma personalizada para minha empresa, e o projeto foi entregue de forma impecável, moderna e funcional."
    },
    {
      name: "Abraao Daniel",
      role: "Colaborador em projeto",
      year: 2025,
      text: "Colaborei com este profissional em um projeto e fiquei impressionado com sua organização e qualidade no desenvolvimento das funcionalidades."
    },
    {
      name: "Adalberto (Adobe)",
      role: "Designer",
      year: 2024,
      text: "Também participei de outros projetos com ele, e posso afirmar que sempre entrega resultados excelentes, com atenção aos detalhes e pontualidade."
    }
  ];

  return (
    <section className="testimonials section" id="testimonials">
      <h2 className="section-title" data-heading="O que meus clientes dizem">
        Depoimentos
      </h2>

    
      <div
        className="testimonials-container container swiper"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ cursor: "grab"  }}
      >
                  <div className="swiper-wrapper">

        {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card swiper-slide ">
            <div className="testimonial-quote">
              <i className="bx bxs-quote-alt-left"></i>
            </div>
            <p className="testimonial-description">
              {t.text}
            </p>
            <h3 className="testimonial-date">{t.year}</h3>
            <div className="testimonial-profile">
             

              <div className="testimonial-profile-data">
                <span className="testimonial-profile-name">{t.name}</span>
                <span className="testimonail-profile-detail"
                  >{t.role}</span>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
