import { useState, useRef, useEffect } from 'react';
import Layout from "../../components/Layout/index";
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
import Accordion from '../../components/Accordion/Accordion';

function Calculadora() {
  const inputAnosRef = useRef<HTMLInputElement>(null);
  const inputMesesRef = useRef<HTMLInputElement>(null);
  const inputDiasRef = useRef<HTMLInputElement>(null);
  const inputCigarrosRef = useRef<HTMLInputElement>(null);
  const inputPrecoRef = useRef<HTMLInputElement>(null);
  
  const [textVisible, setTextVisible] = useState(true);
  const [textVisible2, setTextVisible2] = useState(true);
  const [calculatorVisible, setCalculatorVisible] = useState(true);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [cardStates, setCardStates] = useState(Array(12).fill(false)); // Inicialmente todos os cards estão OFF

  const [cards] = useState([
    { id: 1, imageOn: HeartOn, imageOff: HeartOff, Title: "Após 20 min", Text: "A pressão sanguínea e a pulsação voltam ao normal", extraImageOn: TrophyOn, extraImageOff: TrophyOff },
    { id: 2, imageOn: JumpOn, imageOff: JumpOff, Title: "Após 2 horas", Text: "Não há mais nicotina circulando no sangue", extraImageOn: TrophyOn, extraImageOff: TrophyOff },
    { id: 3, imageOn: TwoHeartsOn, imageOff: TwoHeartsOff, Title: "Após 8 horas", Text: "O nível de oxigênio no sangue se normaliza", extraImageOn: TrophyOn, extraImageOff: TrophyOff },
    { id: 4, imageOn: EatOn, imageOff: EatOff, Title: "Após 2 dias", Text: "O olfato e o paladar já estão mais sensíveis", extraImageOn: TrophyOn, extraImageOff: TrophyOff },
    { id: 5, imageOn: MeditationOn, imageOff: MeditationOff, Title: "Após 3 semanas", Text: "A respiração se torna mais fácil e a circulação melhora", extraImageOn: TrophyOn, extraImageOff: TrophyOff },
    { id: 6, imageOn: PoleOn, imageOff: PoleOff, Title: "De 1 a 9 meses", Text: "A tosse e a falta de ar diminuem", extraImageOn: TrophyOn, extraImageOff: TrophyOff },
    { id: 7, imageOn: HighFiveOn, imageOff: HighFiveOff, Title: "De 1 a 12 meses", Text: "O muco dos pulmões começam a recuperar a função normal", extraImageOn: TrophyOn, extraImageOff: TrophyOff },
    { id: 8, imageOn: DoctorOn, imageOff: DoctorOff, Title: "Após 1 ano", Text: "O risco de morte por infarto já foi reduzido pela metade", extraImageOn: TrophyOn, extraImageOff: TrophyOff },
    { id: 9, imageOn: CelebrationOn, imageOff: CelebrationOff, Title: "De 5 a 10 anos", Text: "O risco de infarto será igual ao de pessoas que nunca fumaram", extraImageOn: TrophyOn, extraImageOff: TrophyOff },
    { id: 10, imageOn: FireworksOn, imageOff: FireworksOff, Title: "De 5 a 15 anos", Text: "O risco de AVC é reduzido ao de um não fumante", extraImageOn: TrophyOn, extraImageOff: TrophyOff },
    { id: 11, imageOn: SunflowerOn, imageOff: SunflowerOff, Title: "Após 10 anos", Text: "A taxa de mortalidade por câncer de pulmão é cerca de metade da de um fumante", extraImageOn: TrophyOn, extraImageOff: TrophyOff },
    { id: 12, imageOn: TreesOn, imageOff: TreesOff, Title: "Após 15 anos", Text: "O risco de doença cardíaca é igual ao de um não fumante", extraImageOn: TrophyOn, extraImageOff: TrophyOff }
  ]);

  const resultadoRef = useRef<HTMLDivElement>(null);
  const calculadoraRef = useRef<HTMLDivElement>(null);

  // const scrollToResultado = () => {
  //   resultadoRef.current?.scrollIntoView({ behavior: 'smooth' });
  // };

  // useEffect(() => {
  //   // Força a re-renderização quando os cards mudam
  //   if (cardsVisible && resultadoRef.current) {
  //     // Usando requestAnimationFrame para garantir que a renderização do DOM esteja completa
  //     requestAnimationFrame(() => {
  //       resultadoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //     });
  //   }
  // }, [cardsVisible]);

  useEffect(() => {
    if (cardsVisible && resultadoRef.current) {
      // Calcule a posição desejada
      const element = resultadoRef.current;
      const rect = element.getBoundingClientRect();
      const offset = window.scrollY + rect.top - 100; // Ajuste o valor 50 conforme necessário
      
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  }, [cardsVisible]);

  useEffect(() => {
    calculadoraRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // const scrollToCalculadora = () => {
  //   calculadoraRef.current?.scrollIntoView({ behavior: 'smooth' });
  // };



  const [totalDays, setTotalDays] = useState(0);
  const [totalCigarettesAvoided, setTotalCigarettesAvoided] = useState(0);
  const [totalMoneySaved, setTotalMoneySaved] = useState(0);

  const calculateCardStates = (anos: number, meses: number, dias: number) => {
    const totalDias = anos * 365 + meses * 30 + dias;
    const newCardStates = Array(12).fill(false);
  
    if (totalDias >= 1) {
        newCardStates[0] = true; // Após 20 min
    }
    if (totalDias >= 1) {
        newCardStates[1] = true; // Após 2 horas
    }
    if (totalDias >= 1) {
        newCardStates[2] = true; // Após 8 horas
    }
    if (totalDias >= 2) {
        newCardStates[3] = true; // Após 2 dias
    }
    if (totalDias >= 21) {
        newCardStates[4] = true; // Após 3 semanas
    }
    if (totalDias >= 30 && totalDias <= 304) {
        newCardStates[5] = true; // De 1 a 9 meses
    }
    if (totalDias >= 30) {
        newCardStates[6] = true; // De 1 a 12 meses
    }
    if (totalDias >= 365) {
        newCardStates[7] = true; // Após 1 ano
    }
    if (totalDias >= 1825) {
        newCardStates[8] = true; // De 5 a 10 anos
    }
    if (totalDias >= 3650) {
        newCardStates[9] = true; // De 5 a 15 anos
    }
    if (totalDias >= 5475) {
        newCardStates[10] = true; // Após 10 anos
    }
    if (totalDias >= 7300) {
        newCardStates[11] = true; // Após 15 anos
    }
  
    setCardStates(newCardStates);
    setTotalDays(totalDias);
    setTextVisible(true);
    setTextVisible2(false);
    setCalculatorVisible(true);
    setCardsVisible(true);
  };
    
  const handleCalculate = () => {
    const anos = parseInt(inputAnosRef.current?.value || "0", 10) || 0;
    const meses = parseInt(inputMesesRef.current?.value || "0", 10) || 0;
    const dias = parseInt(inputDiasRef.current?.value || "0", 10) || 0;
    const cigarrosPorDia = parseInt(inputCigarrosRef.current?.value || "0", 10) || 0;
    const precoPorMaco = parseFloat(inputPrecoRef.current?.value.replace(/[^0-9,]/g, '').replace(',', '.') || "0");

    console.log("Anos:", anos, "Meses:", meses, "Dias:", dias);
    console.log("Cigarros por Dia:", cigarrosPorDia, "Preço por Maço:", precoPorMaco);

    const totalDias = anos * 365 + meses * 30 + dias;
    const totalCigarrosEvitados = cigarrosPorDia * totalDias;
    const totalDinheiroEconomizado = (totalCigarrosEvitados / 20) * precoPorMaco;

    console.log("Total Dias:", totalDias);
    console.log("Total Cigarros Evitados:", totalCigarrosEvitados);
    console.log("Total Dinheiro Economizado:", totalDinheiroEconomizado);

    calculateCardStates(anos, meses, dias);

    setTotalCigarettesAvoided(totalCigarrosEvitados);
    setTotalMoneySaved(totalDinheiroEconomizado);

    setCalculatorVisible(true);
    setCardsVisible(true);
    scrollToResultado();
  };
    
  const formatCurrencyInput = (value: string) => {
      let cleanValue = value.replace(/[^0-9]/g, '');
      if (cleanValue.length > 2) {
          cleanValue = cleanValue.slice(0, -2) + ',' + cleanValue.slice(-2);
      }
      return cleanValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };
  
  const handlePrecoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      const formattedValue = formatCurrencyInput(value);
      inputPrecoRef.current!.value = formattedValue;
  };
  
  const handleReset = () => {
    setTextVisible(true);
    setTextVisible2(true);
    setCalculatorVisible(true);
    setCardsVisible(false);
    setCardStates(Array(12).fill(false));
    setTotalDays(0);
    setTotalCigarettesAvoided(0);
    setTotalMoneySaved(0);
    setCalculatorVisible(true);
    
    setCardsVisible(false);
    scrollToCalculadora();
  };
  
  return (
    <Layout>
      <div className="calculadora-container" ref={calculadoraRef}>
        <div className="calculadora-content">
          <div className="calculadora-header">
            <div className="calculadora-text-container">
              <h1>CALCULADORA DE SAÚDE</h1>
              <p>Quer parar de fumar ou precisa de um incentivo extra? <br></br>Descubra quanto tempo é necessário para sua saúde<br></br> se restabelecer dos efeitos do cigarro</p>
              <p><span className="calculadora-text-small">Simule e descubra os <span className="calculadora-text-small-bolder">benefícios de parar de fumar!</span></span></p>
            </div>
            <div className="calculadora-banner-container">
              <img src={Homem} className="calculadora-banner-image" alt="" />
            </div>
          </div>

          {calculatorVisible && (
            <div className="calculadora">
              <div className="calculadora-forms">
                <h2>Preencha as informações abaixo e surpreenda-se com os resultados</h2>
                <div className="calculadora-input-container">
                  <div className="coluna leftItens">
                    <h3>Há quanto tempo você parou de fumar?</h3>
                    <div className="inputs">
                      <input ref={inputAnosRef} type="number" placeholder="0" className="inputCalc"/>
                      <input ref={inputMesesRef} type="number" placeholder="0" className="inputCalc" />
                      <input ref={inputDiasRef} type="number" placeholder="0" className="inputCalc" />
                    </div>
                  </div>
                  <div className="coluna rightItens">
                    <h3>Quantos cigarros você fumava por dia?</h3>
                    <div className="inputs">
                      <input ref={inputCigarrosRef} type="number" placeholder="0" className="inputCalc" />
                      <span className="obs">Obs.: 20 cigarro é igual a um maço.</span>
                    </div>
                  </div>
                </div>
                <div className="calculadora-input">
                  <div className="coluna leftItens2">
                    <h3>Quantos reais você pagava no maço?</h3>
                    <input 
                      ref={inputPrecoRef} 
                      type="number" 
                      placeholder="R$ 00,00" 
                      className="inputCalc" 
                      onChange={handlePrecoChange}
                    />
                    </div>
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
                <p>Sabemos que essa jornada pode ser desafiadora, mas você não está sozinho. Nosso site oferece o apoio, ferramentas e os recursos necessários para você superar o vício do cigarro de forma eficaz.</p>
                <ul className="list2">
                  <li className="listItens">Use nossa calculadora para descobrir a quantidade de cigarros que você já evitou fumar, quanto dinheiro economizou e acompanhe os benefícios para o seu corpo.</li>
                  <li className="listItens">Acompanhe em tempo real os benefícios para sua saúde ao parar de fumar e veja quanto você economiza com nossa Calculadora de Saúde.</li>
                  <li className="listItens">Transforme sua vida e recupere sua saúde com o apoio que você merece. Explore nosso site, utilize nossas ferramentas e comece sua caminhada rumo a uma vida mais saudável e livre do cigarro.</li>
                </ul>
                  <span className="textLeft">
                      <p>Estamos juntos nessa jornada! Sua nova vida começa agora.</p>
                  </span>
              </div>
          </div>
        )}
        
        {cardsVisible && (
                      <div className="cardContainer" ref={resultadoRef}>
                          <div className="cardContent">                           
                              <h2>Resultado</h2>
                              <div className="Banerresultados">
                                  <div className="resultItens">
                                      <div className="resultCard">
                                          <div className="resultIcon">
                                              <img src={Calendar} alt="Calendario" />
                                              <p><span className="dadosResult">{totalDays}</span></p>
                                          </div>
                                          <p className="textResult">dias sem fumar</p>
                                      </div>
                                      <div className="resultCard">
                                          <div className="resultIcon">
                                              <img src={Confete} alt="Confete" />
                                              <p><span className="dadosResult">{totalCigarettesAvoided}</span></p>
                                          </div>
                                          <p className="textResult">Cigarros evitados</p>
                                      </div>
                                      <div className="resultCard">
                                          <div className="resultIcon">
                                              <img src={Coins} alt="Moedas" />
                                              <p><span className="dadosResult">R$ {totalMoneySaved}</span></p>
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
                                              className={`cardInformacao ${cardStates[index] ? 'card-on' : 'card-off'}`}
                                          >
                                              <div className="cardImage">
                                                  <img src={cardStates[index] ? card.imageOn : card.imageOff} alt="Card" />
                                              </div>
                                              <div className="cardText">
                                                  <div className="cardTitle">
                                                      <h3 className="titleCard">{card.Title}</h3>
                                                      <img src={cardStates[index] ? card.extraImageOn : card.extraImageOff} alt="Extra" />
                                                  </div>
                                                  <p className="cardSubtitle">{card.Text}</p>
                                              </div>
                                          </div>
                                      ))}
                                  </div>
                              </div>

                              <div className="button">
                                  <button onClick={handleReset}>Calcular novamente</button>
                              </div>
                              <Accordion title="Referências">
                                  <p>OPAS, Organização Pan-Americana da Saúde. Disponível em: <a href="https://www.paho.org/pt/101-razoes-para-parar-fumar">https://www.paho.org/pt/101-razoes-para-parar-fumar</a></p>
                                  <p>MINISTÉRIO DA SAÚDE, Biblioteca Virtual em Saúde. Disponível em:<a href="https://bvsms.saude.gov.br/tabagismo-13/"> https://bvsms.saude.gov.br/tabagismo-13/</a></p>
                                  <p>AMERICAN CANCER SOCIETY. Disponível em:<a href="https://www.cancer.org/cancer/risk-prevention/tobacco/benefits-of-quitting-smoking-over-time.html"> https://www.cancer.org/cancer/risk-prevention/tobacco/benefits-of-quitting-smoking-over-time.html</a> </p>
                              </Accordion>
                          </div>

                      </div>
                  )
              }
      </div >
      </Layout >
  );
}

export default Calculadora;
