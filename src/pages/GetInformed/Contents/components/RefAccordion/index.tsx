import { useState } from "react";

import ArrowBottomIcon from "@assets/GetInformed/Contents/icons/ArrowBottomIcon.svg";
import ArrowTopIcon from "@assets/GetInformed/Contents/icons/ArrowTopIcon.svg";

import styles from "./styles.module.css";

export default function RefAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.accordionTitle} onClick={toggleAccordion}>
        <span>Referências</span>
        <img
          src={isOpen ? ArrowTopIcon : ArrowBottomIcon}
          alt="accordion arrow icon"
          sizes="16px"
        />
      </div>
      {isOpen && (
        <div className={styles.accordionContent}>
          <p className="accordion__text">
            AMERICAN CANCER SOCIETY. Health Benefits of Quitting Smoking Over
            Time. Disponível em:{" "}
            <a
              href="https://www.cancer.org/cancer/risk-prevention/tobacco/benefits-of-quitting-smoking-over-time.html"
              target="_blank"
            >
              https://www.cancer.org/cancer/risk-prevention/tobacco/benefits-of-quitting-smoking-over-time.html
            </a>
            . Acesso em: 29 de julho de 2024.
          </p>
          <p className="accordion__text">
            FUNDAÇÃO OSWALDO CRUZ. Tabagismo – O Mal da Destruição em Massa.
            Disponível em:{" "}
            <a
              href="https://www.fiocruz.br/biosseguranca/Bis/infantil/tabagismo.htm"
              target="_blank"
            >
              https://www.fiocruz.br/biosseguranca/Bis/infantil/tabagismo.htm
            </a>
            . Acesso em: 20 de julho de 2024.
          </p>
          <p className="accordion__text">
            INSTITUTO NACIONAL DE CÂNCER. Tratamento do tabagismo. Disponível
            em:{" "}
            <a
              href="https://www.gov.br/inca/pt-br/assuntos/gestor-e-profissional-de-saude/programa-nacional-de-controle-do-tabagismo/tratamento"
              target="_blank"
            >
              https://www.gov.br/inca/pt-br/assuntos/gestor-e-profissional-de-saude/programa-nacional-de-controle-do-tabagismo/tratamento
            </a>
            . Acesso em: 29 de julho de 2024.
          </p>
          <p className="accordion__text">
            MINISTÉRIO DA SAÚDE, Biblioteca Virtual em Saúde. Tabagismo.
            Disponível em:{" "}
            <a href="https://bvsms.saude.gov.br/tabagismo-13/" target="_blank">
              https://bvsms.saude.gov.br/tabagismo-13/
            </a>
            . Acesso em: 29 de julho de 2024.
          </p>
          <p className="accordion__text">
            MINISTÉRIO DA SAÚDE. Ministério da Saúde e INCA lançam campanha de
            prevenção ao uso de cigarros eletrônicos. Disponível em:{" "}
            <a
              href="https://www.gov.br/saude/pt-br/assuntos/noticias/2024/maio/ministerio-da-saude-e-inca-lancam-campanha-de-prevencao-ao-uso-de-cigarros-eletronicos"
              target="_blank"
            >
              https://www.gov.br/saude/pt-br/assuntos/noticias/2024/maio/ministerio-da-saude-e-inca-lancam-campanha-de-prevencao-ao-uso-de-cigarros-eletronicos
            </a>
            . Acesso em: 5 de agosto de 2024.
          </p>
          <p className="accordion__text">
            MSD BRASIL. Cessação do tabagismo. Disponível em:{" "}
            <a
              href="https://www.msdmanuals.com/pt-br/profissional/t%C3%B3picos-especiais/tabagismo/cessa%C3%A7%C3%A3o-do-tabagismo"
              target="_blank"
            >
              https://www.msdmanuals.com/pt-br/profissional/t%C3%B3picos-especiais/tabagismo/cessa%C3%A7%C3%A3o-do-tabagismo
            </a>
            . Acesso em: 29 de julho de 2024.
          </p>
          <p className="accordion__text">
            ORGANIZAÇÃO MUNDIAL DA SAÚDE. Tabaco. Disponível em:{" "}
            <a
              href="https://www.paho.org/pt/101-razoes-para-parar-fumar-0"
              target="_blank"
            >
              https://www.paho.org/pt/101-razoes-para-parar-fumar-0
            </a>
            . Acesso em: 20 de julho de 2024.
          </p>
          <p className="accordion__text">
            PREFEITURA MUNICIPAL DE RIBEIRÃO PRETO. Saúde. Disponível em:{" "}
            <a
              href="https://www.ribeiraopreto.sp.gov.br/portal/pdf/saude154202108.pdf"
              target="_blank"
            >
              https://www.ribeiraopreto.sp.gov.br/portal/pdf/saude154202108.pdf
            </a>
            . Acesso em: 20 de julho de 2024.
          </p>
        </div>
      )}
    </div>
  );
}
