import Card from "../../../../components/Card";
import "./cardSection.css";
import card1Image from "../../../../assets/Card/card1.jpg";
import card2Image from "../../../../assets/Card/card2.jpg";
import card3Image from "../../../../assets/Card/card3.jpg";
import card4Image from "../../../../assets/Card/card4.jpg";

function CardSection() {
  return (
    <section className="section_informe-se">
      <div className="card_grid">
        <Card
          title="Entendendo o Tabagismo"
          image={card1Image}
          description="O tabagismo é reconhecido como uma doença epidêmica que causa dependência física, psicológica e comportamental."
          to="/informe-se/entendendo-o-tabagismo"
        />
        <Card
          title="Impacto do Cigarro na Saúde: Doenças e Complicações"
          image={card2Image}
          description="O tabagismo causa diversas doenças graves, incluindo problemas respiratórios, cardiovasculares e diferentes tipos de câncer."
          to="/informe-se/impacto-do-cigarro"
        />
        <Card
          title="Benefícios de Parar de Fumar"
          image={card3Image}
          description="Quando alguém para de fumar, há uma série de benefícios significativos para a saúde. Confira!"
          to="/informe-se/beneficios-de-parar-de-fumar"
        />
        <Card
          title="Comparação Entre Métodos de Cessação do Tabagismo"
          image={card4Image}
          description="Terapia de reposição de nicotina, medicamentos, acupuntura, hipnose e tratamentos comportamentais. Avalie a eficácia de cada um."
          to="/informe-se/comparacao-entre-metodos-de-cessação-do-tabagismo"
        />
      </div>
    </section>
  );
}

export default CardSection;
