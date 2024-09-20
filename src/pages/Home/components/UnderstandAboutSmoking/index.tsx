import { useNavigate } from "react-router-dom";

import BeneficiosDePararDeFumarImg from "@assets/GetInformed/Contents/heros/beneficios-de-parar-de-fumar-conteudo.jpg";
import ComparacaoEntreMetodosDeCessacaoDoTabagismoImg from "@assets/GetInformed/Contents/heros/comparacao-entre-metodos-de-cessação-do-tabagismo-conteudo.jpg";
import EntendendoOTabagismoImg from "@assets/GetInformed/Contents/heros/entendendo-o-tabagismo-conteudo.jpg";
import ImpactoDoCigarroImg from "@assets/GetInformed/Contents/heros/impacto-do-cigarro-conteudo.png";

import Card from "../../../../components/Card";
import "./styles.css";

export default function UnderstandAboutSmoking() {
  const navigate = useNavigate();

  return (
    <section className="understand-about-smoking">
      <div className="understand-about-smoking__container">
        <div className="understand-about-smoking__container__text">
          <h2 className="understand-about-smoking__title">Entenda sobre o Tabagismo</h2>
          <p className="understand-about-smoking__subtitle">Uma seleção especial de conteúdos</p>
        </div>
        <div className="card-grid">
          <Card
            title="Entendendo o Tabagismo"
            image={EntendendoOTabagismoImg}
            description="O tabagismo é reconhecido como uma doença epidêmica que causa dependência física, psicológica e comportamental."
            to="/informe-se/entendendo-o-tabagismo"
          />
          <Card
            title="Impacto do Cigarro na Saúde: Doenças e Complicações"
            image={ImpactoDoCigarroImg}
            description="O tabagismo causa diversas doenças graves, incluindo problemas respiratórios, cardiovasculares e diferentes tipos de câncer."
            to="/informe-se/impacto-do-cigarro"
          />
          <Card
            title="Benefícios de Parar de Fumar"
            image={BeneficiosDePararDeFumarImg}
            description="Quando alguém para de fumar, há uma série de benefícios significativos para a saúde. Confira!"
            to="/informe-se/beneficios-de-parar-de-fumar"
          />
          <Card
            title="Comparação Entre Métodos de Cessação do Tabagismo"
            image={ComparacaoEntreMetodosDeCessacaoDoTabagismoImg}
            description="Parar de fumar é possível e cada vez mais acessível."
            to="/informe-se/comparacao-entre-metodos-de-cessação-do-tabagismo"
          />
        </div>
        <button
          className="btn--see-more"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",  
            });
            navigate("/informe-se")}
          }
        >
          Ver mais conteúdos
        </button>
      </div>
    </section>
  );
}


