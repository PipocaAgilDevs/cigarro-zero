import "../Sobre-nos/SobreNos.css";
import Casal from "../../assets/SobreNosImg/casal (2).svg";
import Waves from "../../assets/SobreNosImg/Waves 02.svg";
import Ibson from "../../assets/SobreNosImg/Ibson.svg";
import Linkedin from "../../assets/SobreNosImg/LogoLinkedin.svg";
import Alex from "../../assets/SobreNosImg/Alex.png";
import Flavia from "../../assets/SobreNosImg/Flavia.png";
import Marialice from "../../assets/SobreNosImg/Marialice.png";
import Gabriela from "../../assets/SobreNosImg/Gabriela.png";
import Wesley from "../../assets/SobreNosImg/Wesley.jpg";
import Rodrigo from "../../assets/SobreNosImg/Rodrigo.png";
import Maicon from "../../assets/SobreNosImg/Maicon.png";
import Ana from "../../assets/SobreNosImg/Ana.jpg";
import Carla from "../../assets/SobreNosImg/Carla.png";
import Andrea from "../../assets/SobreNosImg/Andrea.jpg";
import Profile from "../../assets/SobreNosImg/Profile.png";

interface TeamMember {
  id: number;
  name: string;
  photoUrl: string;
  cargo: string;
  linkedin: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alex Coelho",
    photoUrl: Alex,
    cargo: "Product Owner",
    linkedin: "https://linkedin.com/in/alex",
  },
  {
    id: 2,
    name: "Flávia dos Santos",
    photoUrl: Flavia,
    cargo: "Product Owner",
    linkedin: "https://www.linkedin.com/in/flaviapkhc/",
  },
  {
    id: 3,
    name: "Marialice Moro",
    photoUrl: Marialice,
    cargo: "UX/UI Designer",
    linkedin: "https://linkedin.com/in/joao",
  },
  {
    id: 4,
    name: "Gabriela Buarque",
    photoUrl: Gabriela,
    cargo: "UX/UI Designer",
    linkedin: "https://linkedin.com/in/joao",
  },
  {
    id: 5,
    name: "Wesley Reis",
    photoUrl: Wesley,
    cargo: "Desenvolvedor Frontend",
    linkedin:
      "https://www.linkedin.com/in/wesley-reis-2034b3227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 6,
    name: "Paule Pereira",
    photoUrl: Profile,
    cargo: "Desenvolvedor Backend",
    linkedin: "https://linkedin.com/in/joao",
  },
  {
    id: 7,
    name: "Rodrigo Criscuolo",
    photoUrl: Rodrigo,
    cargo: "Desenvolvedor Mobile",
    linkedin: "https://www.linkedin.com/in/rodrigo-criscuolo/in/",
  },
  {
    id: 8,
    name: "Maicon Douglas",
    photoUrl: Maicon,
    cargo: "Desenvolvedor Backend",
    linkedin: "https://www.linkedin.com/in/mikedpsm/",
  },
  {
    id: 9,
    name: "Ana Laura",
    photoUrl: Ana,
    cargo: "Desenvolvedor Mobile",
    linkedin: "https://linkedin.com/in/joao",
  },
  {
    id: 10,
    name: "Carla Castello",
    photoUrl: Carla,
    cargo: "Quality Assurance",
    linkedin: "www.linkedin.com/in/carla-castello-853260124",
  },
  {
    id: 11,
    name: "Andréa Silvestre",
    photoUrl: Andrea,
    cargo: "Scrum Master",
    linkedin: "https://www.linkedin.com/in/andreasilvestre/",
  },
  {
    id: 12,
    name: "William Nunes",
    photoUrl: Profile,
    cargo: "Scrum Master",
    linkedin: "https://linkedin.com/in/joao",
  },
];

function SobreNos() {
  return (
    <>
      <div className="HeroSobreNos">
        <div className="ImgHero">
          <img src={Casal} alt="Casal" className="Casal" />
        </div>
        <div className="HeroText">
          <h1>
            Conheça o projeto <span className="CigarroZero">cigarro zero</span>
          </h1>
          <h2>Uma iniciativa para ajudar pessoas a pararem de fumar</h2>
          <p>
            O Projeto foi criado com base em extensas pesquisas sobre
            <br /> Doenças Pulmonares Obstrutivas Crônicas (DPOC).
            <br />
            Reconhecendo o cigarro como um dos principais causadores
            <br /> dessas doenças, decidimos atacar a raiz do problema para um
            impacto mais abrangente na saúde das pessoas.
          </p>
        </div>
        <div className="HeroText2">
          <h2>Nosso propósito</h2>
          <p>
            Ser uma fonte confiável de informações e uma ferramenta de apoio na{" "}
            <br />
            luta contra o tabagismo. Ao ajudar indivíduos a abandonarem o
            cigarro,
            <br /> buscamos reduzir os casos de doenças relacionadas ao
            tabagismo e<br /> melhorar a qualidade de vida das pessoas.
          </p>
          <img src={Waves} alt="" className="waves" />
        </div>
      </div>
      <div className="SobreNos">
        <div className="Miolo">
          <h3>Conheça o time desse projeto!</h3>
          <p>
            Ibson Cabral, facilitador e entusiasta da transformação ágil e
            digital, criou a iniciativa
            <br /> "Simulação de Projetos Ágeis" em 2023 para oferecer um
            ambiente seguro onde
            <br /> profissionais em transição de carreira possam aplicar seus
            conhecimentos na prática.
            <br />
            <br />
            <br />
            Dentro dessa iniciativa, formamos o Time Vermelho Rubi, composto por
            integrantes de
            <br /> diversas funções, com a missão de desenvolver o projeto
            Cigarro Zero. Trabalhamos
            <br />
            voluntariamente, utilizando o framework Scrum para gerenciar o
            projeto e garantir uma entrega de valor contínua.
          </p>
        </div>
        <div className="CardSobreNos">
          <img src={Ibson} alt="Foto de Perfil Ibson" className="Ibson" />
          <p>Ibson Cabral</p>
          <div className="LinkedinIbson">
            <div className="LogoLinkedin1">
              <img src={Linkedin} alt="Logo Linkedin" />
            </div>
            <a href="#">Linkedin</a>
          </div>
        </div>
      </div>
      <h3 className="TimeVermelhoRubi">Time Vermelho Rubi</h3>
      <div className="VermelhoRubi">
        {teamMembers.map((member) => (
          <div key={member.id} className="CardVermelhoRubi">
            <img src={member.photoUrl} alt={`Foto de Perfil ${member.name}`} />
            <p className="Nome">{member.name}</p>
            <p>
              <span className="Cargo">{member.cargo}</span>
            </p>
            <div className="LogoLinkedin">
              <img src={Linkedin} alt="Logo Linkedin" />
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SobreNos;
