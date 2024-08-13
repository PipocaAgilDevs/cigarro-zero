import Card from "../../../../components/Card";
import "./EntendaTabagismo.css";
import EntendendoOTabagismoImg from "../../../../assets/Informa-se/Conteudo/heros/entendendo-o-tabagismo-conteudo.jpg";
import ImpactoDoCigarroImg from "../../../../assets/Informa-se/Conteudo/heros/impacto-do-cigarro-conteudo.png";
import BeneficiosDePararDeFumar from "../../../../assets/Informa-se/Conteudo/heros/beneficios-de-parar-de-fumar-conteudo.jpg";
import ComparacaoEntreMetodosDeCessacaoDoTabagismo from "../../../../assets/Informa-se/Conteudo/heros/comparacao-entre-metodos-de-cessação-do-tabagismo-conteudo.jpg";

import { useNavigate } from "react-router-dom";

const EntendaTabagismo = () => {
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
            image={BeneficiosDePararDeFumar}
            description="Quando alguém para de fumar, há uma série de benefícios significativos para a saúde. Confira!"
            to="/informe-se/beneficios-de-parar-de-fumar"
          />
          <Card
            title="Comparação Entre Métodos de Cessação do Tabagismo"
            image={ComparacaoEntreMetodosDeCessacaoDoTabagismo}
            description="Terapia de reposição de nicotina, medicamentos, acupuntura, hipnose e tratamentos comportamentais. Avalie a eficácia de cada um."
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

export default EntendaTabagismo;
