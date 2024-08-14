import { useState } from "react";
import "../Calculadora/Calculadora.css";
import Homem from "../../assets/calculadora/homem.svg";
import Calendar from "../../assets/calculadora/Calendar.svg";
import Coins from "../../assets/calculadora/Coins.svg";
import Confete from "../../assets/calculadora/Confete.svg";
import DoctorOn from "../../assets/calculadora/doctor ON.svg";
import DoctorOff from "../../assets/calculadora/doctor OFF.svg";
import JumpOn from "../../assets/calculadora/jump ON.svg";
import JumpOff from "../../assets/calculadora/jump OFF.svg";
import PoleOn from "../../assets/calculadora/pole ON.svg";
import PoleOff from "../../assets/calculadora/pole OFF.svg";
import CelebrationOn from "../../assets/calculadora/celebration ON.svg";
import CelebrationOff from "../../assets/calculadora/celebration OFF.svg";
import HeartOn from "../../assets/calculadora/heart ON.svg";
import HeartOff from "../../assets/calculadora/heart OFF.svg";
import MeditationOn from "../../assets/calculadora/meditation ON.svg";
import MeditationOff from "../../assets/calculadora/meditation OFF.svg";
import FireworksOn from "../../assets/calculadora/fireworks ON.svg";
import FireworksOff from "../../assets/calculadora/fireworks OFF.svg";
import HighFiveOn from "../../assets/calculadora/high five ON.svg";
import HighFiveOff from "../../assets/calculadora/high five OFF.svg";
import TwoHeartsOn from "../../assets/calculadora/2hearts ON.svg";
import TwoHeartsOff from "../../assets/calculadora/2hearts OFF.svg";
import SunflowerOn from "../../assets/calculadora/sunflower ON.svg";
import SunflowerOff from "../../assets/calculadora/sunflower OFF.svg";
import TreesOn from "../../assets/calculadora/trees ON.svg";
import TreesOff from "../../assets/calculadora/trees OFF.svg";
import EatOn from "../../assets/calculadora/eat ON.svg";
import EatOff from "../../assets/calculadora/eat OFF.svg";
import TrophyOn from "../../assets/calculadora/Trophy.svg";
import TrophyOff from "../../assets/calculadora/TrophyOff.svg";
import Accordion from "../../components/Accordion/Accordion";

function Calculadora() {
  const [textVisible, setTextVisible] = useState(true);
  const [textVisible2, setTextVisible2] = useState(true);
  const [calculatorVisible, setCalculatorVisible] = useState(true);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [cardStates, setCardStates] = useState(Array(12).fill(false)); // Inicialmente todos os cards estão OFF

  const [cards] = useState([
    {
      id: 1,
      imageOn: HeartOn,
      imageOff: HeartOff,
      Title: "Após 20 min",
      Text: "A pressão sanguínea e a pulsação voltam ao normal",
      extraImageOn: TrophyOn,
      extraImageOff: TrophyOff,
    },
    {
      id: 2,
      imageOn: JumpOn,
      imageOff: JumpOff,
      Title: "Após 2 horas",
      Text: "Não há mais nicotina circulando no sangue",
      extraImageOn: TrophyOn,
      extraImageOff: TrophyOff,
    },
    {
      id: 3,
      imageOn: TwoHeartsOn,
      imageOff: TwoHeartsOff,
      Title: "Após 8 horas",
      Text: "O nível de oxigênio no sangue se normaliza",
      extraImageOn: TrophyOn,
      extraImageOff: TrophyOff,
    },
    {
      id: 4,
      imageOn: EatOn,
      imageOff: EatOff,
      Title: "Após 2 dias",
      Text: "O olfato e o paladar já estão mais sensíveis",
      extraImageOn: TrophyOn,
      extraImageOff: TrophyOff,
    },
    {
      id: 5,
      imageOn: MeditationOn,
      imageOff: MeditationOff,
      Title: "Após 3 semanas",
      Text: "A respiração se torna mais fácil e a circulação melhora",
      extraImageOn: TrophyOn,
      extraImageOff: TrophyOff,
    },
    {
      id: 6,
      imageOn: PoleOn,
      imageOff: PoleOff,
      Title: "De 1 a 9 meses",
      Text: "A tosse e a falta de ar diminuem",
      extraImageOn: TrophyOn,
      extraImageOff: TrophyOff,
    },
    {
      id: 7,
      imageOn: HighFiveOn,
      imageOff: HighFiveOff,
      Title: "De 1 a 12 meses",
      Text: "O muco dos pulmões começam a recuperar a função normal",
      extraImageOn: TrophyOn,
      extraImageOff: TrophyOff,
    },
    {
      id: 8,
      imageOn: DoctorOn,
      imageOff: DoctorOff,
      Title: "Após 1 ano",
      Text: "O risco de morte por infarto já foi reduzido pela metade",
      extraImageOn: TrophyOn,
      extraImageOff: TrophyOff,
    },
    {
      id: 9,
      imageOn: CelebrationOn,
      imageOff: CelebrationOff,
      Title: "De 5 a 10 anos",
      Text: "O risco de infarto será igual ao de pessoas que nunca fumaram",
      extraImageOn: TrophyOn,
      extraImageOff: TrophyOff,
    },
    {
      id: 10,
      imageOn: FireworksOn,
      imageOff: FireworksOff,
      Title: "De 5 a 15 anos",
      Text: "O risco de AVC é reduzido ao de um não fumante",
      extraImageOn: TrophyOn,
      extraImageOff: TrophyOff,
    },
    {
      id: 11,
      imageOn: SunflowerOn,
      imageOff: SunflowerOff,
      Title: "Após 10 anos",
      Text: "A taxa de mortalidade por câncer de pulmão é cerca de metade da de um fumante",
      extraImageOn: TrophyOn,
      extraImageOff: TrophyOff,
    },
    {
      id: 12,
      imageOn: TreesOn,
      imageOff: TreesOff,
      Title: "Após 15 anos",
      Text: "O risco de doença cardíaca é igual ao de um não fumante",
      extraImageOn: TrophyOn,
      extraImageOff: TrophyOff,
    },
  ]);

  const calculateCardStates = (anos: number, meses: number, dias: number) => {
    const totalDias = anos * 365 + meses * 30 + dias;

    let newCardStates = Array(12).fill(false);

    if (totalDias >= 1) {
      newCardStates[0] = true;
      newCardStates[1] = true;
      newCardStates[2] = true;
    }
    if (totalDias >= 2 && totalDias <= 20) {
      newCardStates[3] = true;
    }
    if (totalDias >= 21 && totalDias <= 365) {
      for (let i = 0; i < 7; i++) {
        newCardStates[i] = true;
      }
    }
    if (totalDias >= 366 && totalDias <= 1824) {
      for (let i = 0; i < 8; i++) {
        newCardStates[i] = true;
      }
    }
    if (totalDias >= 1825 && totalDias <= 3650) {
      for (let i = 0; i < 10; i++) {
        newCardStates[i] = true;
      }
    }
    if (totalDias >= 3651 && totalDias <= 5474) {
      for (let i = 0; i < 11; i++) {
        newCardStates[i] = true;
      }
    }
    if (totalDias >= 5475) {
      newCardStates = Array(12).fill(true);
    }

    setCardStates(newCardStates);

    setTextVisible(true);
    setTextVisible2(false);
    setCalculatorVisible(true);
    setCardsVisible(true);
  };

  const handleCalculate = () => {
    const inputs = document.querySelectorAll('input[type="number"]');

    if (inputs.length < 3) {
      console.error("Número insuficiente de inputs");
      return;
    }

    const anos = parseInt((inputs[0] as HTMLInputElement).value) || 0;
    const meses = parseInt((inputs[1] as HTMLInputElement).value) || 0;
    const dias = parseInt((inputs[2] as HTMLInputElement).value) || 0;

    calculateCardStates(anos, meses, dias);
  };

  const handleReset = () => {
    setTextVisible(true);
    setTextVisible2(true);
    setCalculatorVisible(true);
    setCardsVisible(false);
    setCardStates(Array(12).fill(false));
    Number(1);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="containerCalculadora">
      <div className="containerCalculadora section1">
        {textVisible && (
          <div className="container1">
            <div className="textCalculadora">
              <h1>Calculadora de Saúde</h1>
              <p>
                Quer parar de fumar ou precisa de um incentivo extra? <br></br>
                Descubra quanto tempo é necessário para sua saúde<br></br> se
                restabelecer dos efeitos do cigarro
              </p>
              <p>
                <span className="smallText">
                  Simule e descubra os{" "}
                  <span className="textBolder">
                    benefícios de parar de fumar!
                  </span>
                </span>
              </p>
            </div>
            <div className="fotoHomem">
              <img src={Homem} className="homem" alt="" />
            </div>
          </div>
        )}
        {calculatorVisible && (
          <div className="calculadora">
            <div className="calculadoraItens">
              <h2>
                Preencha as informações abaixo e surpreenda-se com os resultados
              </h2>
              <div className="leftItens">
                <h3>Há quanto tempo você parou de fumar?</h3>
                <input type="number" placeholder="0" className="inputCalc" />
                <label>anos</label>
                <input type="number" placeholder="0" className="inputCalc" />
                <label>meses</label>
                <input type="number" placeholder="0" className="inputCalc" />
                <label>dias</label>
              </div>
              <div className="rightItens">
                <h3>Quantos cigarros você fumava por dia?</h3>
                <input type="number" placeholder="0" className="inputCalc" />
                <label>cigarros</label>
                <p>
                  <span className="obs">
                    Obs.: 20 cigarro é igual a um maço.
                  </span>
                </p>
              </div>
              <div className="leftItens2">
                <label>Quantos reais voçê pagava na maço?</label>
                <input
                  type="number"
                  placeholder="R$ 00,00"
                  className="inputCalc"
                />
              </div>
              <div className="btnResultado">
                <button onClick={handleCalculate}>Ver Resultado</button>
              </div>
            </div>
          </div>
        )}
      </div>
      {textVisible2 && (
        <div className="textCigarroZero">
          <h2>Você está prestes a começar uma jornada Cigarro Zero!</h2>
          <div className="listText">
            <p>
              Sabemos que essa jornada pode ser desafiadora, mas você não está
              sozinho. Nosso site oferece o apoio, ferramentas e <br></br>os
              recursos necessários para você superar o vício do cigarro de forma
              eficaz.
            </p>
            <ul className="list2">
              <li className="listItens">
                Use nossa calculadora para descobrir a quantidade de cigarros
                que você já evitou fumar, quanto dinheiro economizou e acompanhe
                os benefícios para o seu corpo.
              </li>
              <li className="listItens">
                Acompanhe em tempo real os benefícios para sua saúde ao parar de
                fumar e veja quanto você economiza com nossa Calculadora de
                Saúde.
              </li>
              <li className="listItens">
                Transforme sua vida e recupere sua saúde com o apoio que você
                merece. Explore nosso site, utilize nossas ferramentas e comece
                sua caminhada rumo a uma vida mais saudável e livre do cigarro.
              </li>
            </ul>
            <span className="textLeft">
              <p>Estamos juntos nessa jornada! Sua nova vida começa agora.</p>
            </span>
          </div>
        </div>
      )}
      {cardsVisible && (
        <div className="cardContainer">
          <h2>Resultados</h2>
          <div className="Banerresultados">
            <div className="resultItens">
              <div className="resultCard">
                <div className="resultIcon">
                  <img src={Calendar} alt="Calendario" />
                  <p>
                    <span className="dadosResult">07</span>
                  </p>
                </div>
                <p className="textResult">dias sem fumar</p>
              </div>
              <div className="resultCard">
                <div className="resultIcon">
                  <img src={Confete} alt="Confete" />
                  <p>
                    <span className="dadosResult">140</span>
                  </p>
                </div>
                <p className="textResult">Cigarros evitados</p>
              </div>
              <div className="resultCard">
                <div className="resultIcon">
                  <img src={Coins} alt="Moedas" />
                  <p>
                    <span className="dadosResult">R$ 84</span>
                  </p>
                </div>
                <p className="textResult">a mais no seu bolso!</p>
              </div>
            </div>
          </div>
          <div className="cardSection">
            <div className="cards">
              {cards.map((card, index) => (
                <div
                  key={card.id}
                  className={`cardInformacao ${
                    cardStates[index] ? "card-on" : "card-off"
                  }`}
                >
                  <div className="cardImage">
                    <img
                      src={cardStates[index] ? card.imageOn : card.imageOff}
                      alt="Card"
                    />
                  </div>
                  <div className="cardText">
                    <div className="cardTitle">
                      <h3 className="titleCard">{card.Title}</h3>
                      <img
                        src={
                          cardStates[index]
                            ? card.extraImageOn
                            : card.extraImageOff
                        }
                        alt="Extra"
                      />
                    </div>
                    <p>{card.Text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="button">
            <button onClick={handleReset}>Calcular novamente</button>
          </div>
          <Accordion title="Referências">
            <p>
              OPAS, Organização Pan-Americana da Saúde. Disponível em:{" "}
              <a href="https://www.paho.org/pt/101-razoes-para-parar-fumar">
                https://www.paho.org/pt/101-razoes-para-parar-fumar
              </a>
            </p>
            <p>
              MINISTÉRIO DA SAÚDE, Biblioteca Virtual em Saúde. Disponível em:
              <a href="https://bvsms.saude.gov.br/tabagismo-13/">
                {" "}
                https://bvsms.saude.gov.br/tabagismo-13/
              </a>
            </p>
            <p>
              AMERICAN CANCER SOCIETY. Disponível em:
              <a href="https://www.cancer.org/cancer/risk-prevention/tobacco/benefits-of-quitting-smoking-over-time.html">
                {" "}
                https://www.cancer.org/cancer/risk-prevention/tobacco/benefits-of-quitting-smoking-over-time.html
              </a>{" "}
            </p>
          </Accordion>
        </div>
      )}
    </div>
  );
}

export default Calculadora;
