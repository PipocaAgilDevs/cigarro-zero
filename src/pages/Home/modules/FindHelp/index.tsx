import ButtonCTA from "../../../../components/ButtonCTA";
import "./FindHelp.css";

export default function FindHelp() {
  return (
    <section className="find-help-section">
      <section className="container-cta">
        <p className="title-cta">
          A luta contra o tabagismo <br></br>não precisa ser solitária
        </p>
        <p className="sub-text-cta">
          Buscar ajuda profissional aumenta significativamente o sucesso de
          conseguir parar de fumar.<br></br> O Sistema Único de Saúde (SUS) oferece
          tratamentos integrais e gratuitos!
        </p>
        <ButtonCTA>Encontre atendimento perto de você</ButtonCTA>
      </section>
    </section>
  );
}
