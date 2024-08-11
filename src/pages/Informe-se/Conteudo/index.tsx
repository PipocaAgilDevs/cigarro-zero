import { Link } from "react-router-dom";
import Layout from "../../../components/Layout";
import RefAccordion from "./modules/RefAccorion";

import styles from "./styles.module.css";
import HouseIcon from "../../../assets/Informa-se/Conteudo/HouseIcon.svg";
import ArrowRightIcon from "../../../assets/Informa-se/Conteudo/ArrowRightIcon.svg";
import EntendendoOTabagismoImg from "../../../assets/Informa-se/Conteudo/entendendo-o-tabagismo-img.jpg";
import RobertaEscritoraImg from "../../../assets/Informa-se/Conteudo/roberta-escritora.jpg";

export default function InformeSeConteudo() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.breadcrumb}>
          <Link to="/">
            <img src={HouseIcon} alt="home icon" sizes="24px" />
          </Link>
          <img src={ArrowRightIcon} alt="arrow right icon" sizes="16px" />
          <p>Impacto do Cigarro na Saúde: Entendendo o Tabagismo</p>
        </div>
        <main className={styles.main}>
          <h1 className={styles.title}>Entendendo o Tabagismo</h1>
          <h2 className={styles.subtitle}>
            Desvende os seus perigos e abrace a esperança
          </h2>

          <div className={styles.heroImage}>
            <img src={EntendendoOTabagismoImg} alt="hero image" />
          </div>

          <div className={styles.writerCard}>
            <div className={styles.writerPhoto}>
              <img src={RobertaEscritoraImg} alt="writer photo" />
            </div>
            <div>
              <p>
                Escrito por <strong>Roberta Braz</strong>
              </p>
              <p>20 de julho de 2024</p>
            </div>
          </div>

          <article className={styles.article}>
            <section>
              <p>
                O tabagismo é o ato de se consumir cigarros ou outros produtos
                que contenham tabaco, cuja droga ou princípio ativo é a
                nicotina. A{" "}
                <a href="https://www.who.int/" target="_blank">
                  Organização Mundial da Saúde (OMS)
                </a>{" "}
                considera o tabagismo uma pandemia silenciosa, causando danos
                irreversíveis à saúde dos fumantes e das pessoas ao seu redor.
              </p>
              <p>
                De acordo com a Fundação Oswaldo Cruz (Fiocruz), a fumaça do
                cigarro é uma mistura de cerca de 4.720 substâncias tóxicas,
                divididas em duas fases fundamentais: a fase gasosa e a fase
                particulada. A fase gasosa inclui monóxido de carbono, amônia,
                cetonas, formaldeído, acetaldeído e acroleína. A fase
                particulada contém nicotina e alcatrão. Essas substâncias
                tóxicas afetam diversos sistemas e órgãos do corpo, incluindo
                mais de 60 substâncias cancerígenas, destacando-se as seguintes:
              </p>
              <ul>
                <li>Nicotina: causa dependência e é cancerígena.</li>
                <li>
                  Benzopireno: facilita a combustão no papel que envolve o fumo.
                </li>
                <li>
                  Substâncias radioativas: incluem polônio-210 e carbono-14.
                </li>
                <li>Agrotóxicos: como o Dicloro-Difenil-Tricloroetano(DDT).</li>
                <li>Solvente: benzeno.</li>
                <li>
                  Metais pesados: chumbo e cádmio (um cigarro contém de 1 a 2 mg
                  de cádmio, que se acumula no fígado, rins e pulmões, com
                  meia-vida de 10 a 30 anos, levando à perda da capacidade
                  ventilatória dos pulmões, além de causar dispneia, enfisema,
                  fibrose pulmonar, hipertensão, e câncer nos pulmões, próstata,
                  rins e estômago).
                </li>
                <li>
                  Níquel e arsênico: armazenam-se no fígado, rins, coração,
                  pulmões, ossos e dentes, podendo resultar em gangrena dos pés
                  e danos ao miocárdio.
                </li>
              </ul>
              <p>
                O tabaco pode ser consumido de diversas maneiras, dependendo da
                sua forma de apresentação: inalado (cigarro, charuto, cigarro de
                palha), aspirado (rapé) e mascado (fumo-de-rolo). No entanto,
                independentemente da forma de uso, ele é prejudicial à saúde.
              </p>
              <p>
                Além disso, o tabagismo está associado a cerca de 50 doenças
                diferentes, com destaque para as cardiovasculares como
                hipertensão, infarto, angina e derrame. É também responsável por
                muitas mortes devido a cânceres como os de pulmão, boca,
                laringe, esôfago, estômago, pâncreas, rim e bexiga, além de
                causar doenças respiratórias obstrutivas como bronquite crônica
                e enfisema pulmonar. O tabaco compromete as defesas naturais do
                organismo, aumentando a suscetibilidade a doenças como gripe e
                tuberculose, e é associado à impotência sexual.
              </p>
            </section>
            <section>
              <h3>Por que as pessoas começam a fumar?</h3>
              <p>
                Existem vários fatores que levam as pessoas a experimentar
                cigarros ou outros derivados do tabaco:
              </p>
              <ul>
                <li>
                  A publicidade desempenha um papel significativo, sendo
                  amplamente veiculada nos meios de comunicação. Para os jovens,
                  esse impacto é ainda mais pronunciado, pois são influenciados
                  não apenas pela publicidade, mas também por pais, professores,
                  ídolos e amigos durante a fase crucial de construção da sua
                  personalidade, antes dos 19 anos.
                </li>
                <li>
                  Pesquisas indicam que a maioria dos adolescentes que fumam
                  iniciou o hábito nessa faixa etária, muitas vezes buscando
                  autoafirmação. O tabaco não se enquadra no conceito moderno de
                  moda, que abrange música, roupas, gostos, gírias e danças.
                </li>
                <li>
                  No passado, a publicidade manipulava psicologicamente
                  diferentes grupos sociais, como adolescentes, mulheres e
                  pessoas de baixa renda, sugerindo que o tabagismo era mais
                  comum e socialmente aceito do que era na realidade. Comerciais
                  frequentemente retratavam pessoas atraentes, jovens e
                  bem-sucedidas desfrutando de momentos de lazer ou convívio
                  social, associados ao cigarro. No Brasil, essa forma de
                  publicidade foi proibida pela Lei 10.167, que restringe a
                  propaganda de cigarros e seus derivados.
                </li>
              </ul>
            </section>
            <section>
              <h3>Fumar durante a gravidez: riscos e consequências</h3>
              <p>
                Fumar durante a gravidez apresenta sérios riscos tanto para a
                gestante quanto para o bebê, aumentando significativamente a
                mortalidade fetal e infantil. Entre os riscos associados estão:
              </p>
              <ul>
                <li>Abortos espontâneos.</li>
                <li>Nascimentos prematuros.</li>
                <li>Bebês com baixo peso ao nascer.</li>
                <li>Mortes fetais e de recém-nascidos.</li>
                <li>Gravidez ectópica.</li>
                <li>Descolamento prematuro da placenta.</li>
                <li>Placenta prévia.</li>
                <li>Episódios de sangramento.</li>
              </ul>
              <p>
                Comparativamente, gestantes que fumam enfrentam mais
                complicações durante o parto e têm o dobro de chances de ter
                bebês com peso e comprimento abaixo do esperado em comparação
                com gestantes não fumantes.
              </p>
            </section>
            <section>
              <h3>O que é ser um fumante passivo?</h3>
              <p>
                Um fumante passivo é alguém que convive com fumantes e inala a
                fumaça dos derivados do tabaco em ambientes fechados.
              </p>
              <p>
                A Poluição Tabagística Ambiental (PTA) refere-se à fumaça dos
                produtos de tabaco em locais fechados, identificada pela
                Organização Mundial de Saúde (OMS) como a principal fonte de
                poluição nesses ambientes. Pesquisas indicam que o tabagismo
                passivo é considerado a terceira maior causa de morte evitável
                no mundo, ficando atrás apenas do tabagismo ativo e do consumo
                excessivo de álcool.
              </p>
              <p>
                Indivíduos não fumantes expostos à fumaça do tabaco enfrentam um
                risco elevado de desenvolver doenças relacionadas ao tabagismo.
                Quanto mais tempo permanecem expostos à poluição tabagística
                ambiental, maior é a probabilidade de adoecer. As crianças são
                particularmente vulneráveis devido à sua frequência respiratória
                elevada, enfrentando impactos significativos na saúde, como
                bronquite, pneumonia, asma e infecções do ouvido médio.
              </p>
              <p>
                Lembre-se dos benefícios: Parar de fumar não só melhora sua
                saúde imediata e a longo prazo, reduzindo o risco de diversas
                doenças graves, mas também aumenta sua qualidade de vida e te
                aproxima de uma vida mais plena.
              </p>
              <p>
                Você não está sozinho nessa jornada! Junte-se a nós, no
                movimento Cigarro Zero, para construir um futuro livre do
                tabagismo, onde a saúde e o bem-estar sejam prioridades para
                todos.
              </p>
            </section>
            <RefAccordion />
          </article>
        </main>
      </div>
    </Layout>
  );
}
