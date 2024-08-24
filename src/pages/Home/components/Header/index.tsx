import heroImage from "@assets/hero-image.svg";

import "./styles.css";

export default function Header() {
  return (
    <section className="banner__header">
      <div className="banner__content">
        <div className="banner__content__text">
          <p className="banner__title">COMECE UMA VIDA</p>
          <p className="banner__second__title">
            SAÚDAVEL E <span className="banner__second_title--color">SEM CIGARRO</span>
          </p>
          <div className="banner__content__subtext">
            <p className="banner__subtitle">
              Nossa missão é fornecer informações valiosas e recursos de apoio
              para todos que desejam parar de fumar.{" "}
            </p>
            <p className="banner__subtitle">
              Navegue pelo nosso site e encontre tudo que você precisa para
              começar sua jornada livre do cigarro!
            </p>
          </div>
        </div>
        <img className="banner__image" src={heroImage} alt="três pessoas sorrindo e abraçadas dando depoimentos sobre estar sem fumar, como 'um dia de cada vez', 'juntos somos mais fortes' e 'menos um cigarro hoje'" />
      </div>
    </section>
  );
}
