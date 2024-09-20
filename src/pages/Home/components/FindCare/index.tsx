import { useNavigate } from "react-router-dom";
import ButtonCTA from "../../../../components/ButtonCTA";
import "./styles.css";

export default function FindCare() {

  const navigate = useNavigate();

  return (
    <section className="find-care">
      <section className="find-care__container">
        <h2 className="find-care__title">
          A luta contra o tabagismo <br></br>não precisa ser solitária
        </h2>
        <div className="find-care__container__text">
          <p className="find-care__subtitle">
            Buscar ajuda profissional aumenta significativamente o sucesso de
            conseguir parar de fumar.
          </p>
          <p className="find-care__subtitle">
            O Sistema Único de Saúde (SUS)
            oferece tratamentos integrais e gratuitos!
          </p>
        </div>
        <ButtonCTA onClick={() => navigate("/encontrar-ajuda")} >Encontre atendimento perto de você</ButtonCTA>
      </section>
    </section>
  );
}
