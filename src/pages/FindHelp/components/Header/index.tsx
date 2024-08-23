import heroImage from "@assets/FindHelp/hero-image-banner.svg";

import "./styles.css";

export default function Header() {
  return (
    <section className="find-help">
      <div className="header__container">
        <div className="header__text">
          <h1 className="header__title">
            A luta contra o tabagismo<br></br>{" "}
            <span className="header__title--big-font">
              NÃO PRECISA SER SOLITÁRIA
            </span>
          </h1>
          <p className="header__subtitle">
            O tabagismo é um grave problema de saúde pública, associado a mais
            de 50 doenças. Pelo Sistema Único de Saúde (SUS), são oferecidos
            tratamentos integrais e gratuitos às pessoas que desejam parar de
            fumar.
          </p>
          <br></br>

          <p className="header__subtitle">
            Procure atendimento em uma das mais de 48 mil unidades distribuídas
            em todo o Brasil, que fornecerão informações sobre locais e horários
            de tratamento em cada região.
          </p>
        </div>
        <img
          className="header__image"
          src={heroImage}
          alt="quatro pessoas abraçadas de costas"
        />
      </div>
    </section>
  );
}
