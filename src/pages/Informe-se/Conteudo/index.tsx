import { Link, useParams } from "react-router-dom";
import Layout from "../../../components/Layout";

import styles from "./styles.module.css";
import House from "../../../assets/Informa-se/Conteudo/House-r.svg";
import CaretRight from "../../../assets/Informa-se/Conteudo/CaretRight-r.svg";

export default function InformeSeConteudo() {
  const { contentTitle } = useParams();

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.breadcrumb}>
          <Link to="/">
            <img src={House} sizes="24px" />
          </Link>
          <img src={CaretRight} sizes="16px" />
          <p>Impacto do Cigarro na Saúde: Entendendo o Tabagismo</p>
        </div>
        <article>
          <h1>Entendendo o Tabagismo</h1>
          <h2>Desvende os seus perigos e abrace a esperança</h2>
        </article>
      </div>
    </Layout>
  );
}
