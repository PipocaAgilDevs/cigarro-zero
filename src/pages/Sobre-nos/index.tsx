import Layout from "../../components/Layout";
import MemberCard from "./modules/MemberCard";
import team from "./team";

import HeroImg from "../../assets/Sobre-nos/hero-sobre-nos.png";
import WavesImg from "../../assets/Sobre-nos/waves.png";
import IbsonCabralImg from "../../assets/Sobre-nos/profiles/ibson-cabral.png";
import LinkedinIcon from "../../assets/Sobre-nos/linkedin-icon.svg";
import styles from "./styles.module.css";

export default function SobreNos() {
  return (
    <Layout>
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.hero}>
            <div>
              <img src={HeroImg} alt="casar com cão na praia" />
            </div>
            <div>
              <p className={styles.pretitle}>CONHEÇA O PROJETO</p>
              <h1 className={styles.title}>CIGARRO ZERO</h1>
              <div className={styles.textCard}>
                <h3>Uma iniciativa para ajudar pessoas a pararem de fumar</h3>
                <p>
                  O Projeto foi criado com base em extensas pesquisas sobre
                  Doenças Pulmonares Obstrutivas Crônicas (DPOC). Reconhecendo o
                  cigarro como um dos principais causadores dessas doenças,
                  decidimos atacar a raiz do problema para um impacto mais
                  abrangente na saúde das pessoas.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.subhero}>
            <div className={styles.textCard}>
              <h3>Nosso propósito</h3>
              <p className={styles.paddingBottom}>
                Ser uma fonte confiável de informações e uma ferramenta de apoio
                na luta contra o tabagismo. Ao ajudar indivíduos a abandonarem o
                cigarro, buscamos reduzir os casos de doenças relacionadas ao
                tabagismo e melhorar a qualidade de vida das pessoas.
              </p>
            </div>
            <img
              src={WavesImg}
              alt="imagem de fundo estilo onda para fins estéticos"
            />
          </div>
        </section>
        <section className={styles.teamSection}>
          <header>
            <div className={styles.textCard}>
              <h2>Conheça o time desse projeto!</h2>
              <p>
                Ibson Cabral, facilitador e entusiasta da transformação ágil e
                digital, criou a iniciativa "Simulação de Projetos Ágeis" em
                2023 para oferecer um ambiente seguro onde profissionais em
                transição de carreira possam aplicar seus conhecimentos na
                prática.
              </p>
              <p>
                Dentro dessa iniciativa, formamos o Time Vermelho Rubi, composto
                por integrantes de diversas funções, com a missão de desenvolver
                o projeto Cigarro Zero. Trabalhamos voluntariamente, utilizando
                o framework Scrum para gerenciar o projeto e garantir uma
                entrega de valor contínua.
              </p>
            </div>
            <div className={styles.ibsonCard}>
              <img src={IbsonCabralImg} alt="Ibson Cabral" />
              <p className={styles.name}>Ibson Cabral</p>
              <a
                className={styles.linkedinLink}
                href="https://www.linkedin.com/in/ibson-cabral"
                target="_blank"
              >
                <img src={LinkedinIcon} alt="linkedin icon" />
                Linkedin
              </a>
            </div>
          </header>
          <div>
            <h2 className={styles.teamTitle}>Time Vermelho Rubi</h2>
            <div className={styles.teamGrid}>
              {team.map((member, i) => (
                <MemberCard {...member} key={i} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
