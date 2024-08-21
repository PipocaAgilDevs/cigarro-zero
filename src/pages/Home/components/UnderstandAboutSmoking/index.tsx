import { useNavigate } from "react-router-dom";

import BeneficiosDePararDeFumarImg from "../../../../assets/GetInformed/Contents/Heros/beneficios-de-parar-de-fumar-conteudo.jpg";
import ComparacaoEntreMetodosDeCessacaoDoTabagismoImg from "../../../../assets/GetInformed/Contents/Heros/comparacao-entre-metodos-de-cessação-do-tabagismo-conteudo.jpg";
import EntendendoOTabagismoImg from "../../../../assets/GetInformed/Contents/Heros/entendendo-o-tabagismo-conteudo.jpg";
import ImpactoDoCigarroImg from "../../../../assets/GetInformed/Contents/Heros/impacto-do-cigarro-conteudo.png";
import Card from "../../../../components/Card";
import "./styles.css";

const UnderstandAboutSmoking = () => {
  const navigate = useNavigate();

  return (
    <section className="entenda-tabagismo">
      <div className="container">
        <div className="title_section_content">
          <h2>Entenda sobre o Tabagismo</h2>
          <p className="subtitle">A informação liberta do vício</p>
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
          className="btn-ver-mais"
          onClick={() => navigate("/informe-se")}
        >
          Ver mais conteúdos
        </button>
      </div>
    </section>
  );
};

export default UnderstandAboutSmoking;
