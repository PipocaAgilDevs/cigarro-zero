import FindHelpImage from "../../assets/FindHelp/find-help-image.png";
import "../FindHelp/styles.css";

function EncontrarAjuda() {
  return (
    <section className="root-wrapper">
      <div className="text-wrapper">
        <header>
          <h2>A luta contra o tabagismo</h2>
          <h1>NÃO PRECISA SER SOLITÁRIA</h1>
        </header>
        <p className="text-paragraph">
          O tabagismo é um grave problema de saúde pública, associado a mais de
          50 doenças. Pelo Sistema Único de Saúde (SUS), são oferecidos
          <strong> tratamentos integrais e gratuitos</strong> às pessoas que
          desejam parar de fumar.
        </p>
        <p className="text-paragraph">
          Procure atendimento em uma das mais de 48 mil unidades distribuídas em
          todo o Brasil, que fornecerão informações sobre locais e horários de
          tratamento em cada região.
        </p>
      </div>
      <figure className="image-wrapper">
        <img
          src={FindHelpImage}
          alt="Grupo de pessoas lado a lado se abraçando"
          className="find-help-image"
        />
      </figure>
    </section>
  );
}

export default EncontrarAjuda;
