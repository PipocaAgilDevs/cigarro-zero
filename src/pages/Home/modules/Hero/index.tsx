import heroImage from "../../../../assets/hero-image.svg";
import "./Hero.modules.css";

export default function HeroSection() {
  return (
    <section className="banner">
      <div className="banner-content">
        <div className="banner-content-text">
          <p className="banner-title">COMECE UMA VIDA</p>
          <p className="banner-second-title">
            SAÚDAVEL E <span className="colored-text">SEM CIGARRO</span>
          </p>
          <div className="sub-text-section">
            <p className="banner-subtitle">
              Nossa missão é fornecer informações valiosas e recursos de apoio
              para todos que desejam parar de fumar.{" "}
            </p>
            <p className="banner-subtitle">
              Navegue pelo nosso site e encontre tudo que você precisa para
              começar sua jornada livre do cigarro!
            </p>
          </div>
        </div>
        <img src={heroImage} alt="Foto depoimentos" />
      </div>
    </section>
  );
}
