import Card from "../../../../components/Card";
import "./styles.css";
import EntendendoOTabagismoImg from "../../../../assets/GetInformed/Contents/Heros/entendendo-o-tabagismo-conteudo.jpg";
import ImpactoDoCigarroImg from "../../../../assets/GetInformed/Contents/Heros/impacto-do-cigarro-conteudo.png";
import BeneficiosDePararDeFumarImg from "../../../../assets/GetInformed/Contents/Heros/beneficios-de-parar-de-fumar-conteudo.jpg";
import ComparacaoEntreMetodosDeCessacaoDoTabagismoImg from "../../../../assets/GetInformed/Contents/Heros/comparacao-entre-metodos-de-cessação-do-tabagismo-conteudo.jpg";
import OPapelDasMidiasSociaisNaPromocaoDoTabagismoEntreOsJovensImg from "../../../../assets/GetInformed/Contents/Heros/o-papel-das-midias-sociais-na-promocao-do-tabagismo-entre-os-jovens-conteudo.jpg";
import CigarroEletronicoMitosEVerdadesImg from "../../../../assets/GetInformed/Contents/Heros/cigarro-eletronico-mitos-e-verdades-conteudo.jpg";

function CardSection() {
  return (
    <section className="section_informe-se">
      <div className="card_grid">
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
        <Card
          title="O Papel das Mídias Sociais na Promoção do Tabagismo entre os Jovens"
          image={OPapelDasMidiasSociaisNaPromocaoDoTabagismoEntreOsJovensImg}
          description="Cigarro e redes sociais: uma combinação explosiva para sua saúde."
          to="/informe-se/o-papel-das-midias-sociais-na-promocao-do-tabagismo-entre-os-jovens"
        />
        <Card
          title="Cigarro Eletrônico: Mitos e Verdades"
          image={CigarroEletronicoMitosEVerdadesImg}
          description="Um novo visual, os mesmos perigos!"
          to="/informe-se/cigarro-eletronico-mitos-e-verdades"
        />
      </div>
    </section>
  );
}

export default CardSection;
