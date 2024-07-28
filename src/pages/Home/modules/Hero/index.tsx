import heroImage from "../../../../assets/hero-image.svg";
import "./Hero.modules.css";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="text-section">
          <p className="first-title">comece uma vida</p>
          <p className="second-title">
            saudável e <span className="colored-text">sem cigarro</span>
          </p>
          <section className="sub-text-section">
            <p className="sub-text">
              Nossa missão é fornecer informações valiosas e recursos de apoio
              para todos que desejam parar de fumar.{" "}
            </p>
            <p className="sub-text">
              Navegue pelo nosso site e encontre tudo que você precisa para
              começar sua jornada livre do cigarro!
            </p>
          </section>
        </div>
        <div className="image-section">
          <img src={heroImage} alt="Foto depoimentos" />
        </div>
      </div>
    </section>
  );
}
