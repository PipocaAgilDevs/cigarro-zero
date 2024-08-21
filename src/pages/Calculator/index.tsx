import { useRef, useState } from "react";

import { images } from "@assets/Calculator/images";

import Accordion from "../../components/Accordion/Accordion";
import "./styles.css";

function Calculadora() {
  const inputAnosRef = useRef<HTMLInputElement>(null);
  const inputMesesRef = useRef<HTMLInputElement>(null);
  const inputDiasRef = useRef<HTMLInputElement>(null);
  const inputCigarrosRef = useRef<HTMLInputElement>(null);
  const inputPrecoRef = useRef<HTMLInputElement>(null);

  const [calculatorVisible, setCalculatorVisible] = useState(true);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [cardStates, setCardStates] = useState(Array(12).fill(false));

  const [totalDays, setTotalDays] = useState(0);
  const [totalCigarettesAvoided, setTotalCigarettesAvoided] = useState(0);
  const [totalMoneySaved, setTotalMoneySaved] = useState(0);

  const cards = [
    {
      id: 1,
      imageOn: "HeartOn",
      imageOff: "HeartOff",
      Title: "Após 20 min",
      Text: "A pressão sanguínea e a pulsação voltam ao normal",
      extraImageOn: "TrophyOn",
      extraImageOff: "TrophyOff",
    },
    {
      id: 2,
      imageOn: "JumpOn",
      imageOff: "JumpOff",
      Title: "Após 2 horas",
      Text: "Não há mais nicotina circulando no sangue",
      extraImageOn: "TrophyOn",
      extraImageOff: "TrophyOff",
    },
    {
      id: 3,
      imageOn: "TwoHeartsOn",
      imageOff: "TwoHeartsOff",
      Title: "Após 8 horas",
      Text: "O nível de oxigênio no sangue se normaliza",
      extraImageOn: "TrophyOn",
      extraImageOff: "TrophyOff",
    },
    {
      id: 4,
      imageOn: "EatOn",
      imageOff: "EatOff",
      Title: "Após 2 dias",
      Text: "O olfato e o paladar já estão mais sensíveis",
      extraImageOn: "TrophyOn",
      extraImageOff: "TrophyOff",
    },
    {
      id: 5,
      imageOn: "MeditationOn",
      imageOff: "MeditationOff",
      Title: "Após 3 semanas",
      Text: "A respiração se torna mais fácil e a circulação melhora",
      extraImageOn: "TrophyOn",
      extraImageOff: "TrophyOff",
    },
    {
      id: 6,
      imageOn: "PoleOn",
      imageOff: "PoleOff",
      Title: "De 1 a 9 meses",
      Text: "A tosse e a falta de ar diminuem",
      extraImageOn: "TrophyOn",
      extraImageOff: "TrophyOff",
    },
    {
      id: 7,
      imageOn: "HighFiveOn",
      imageOff: "HighFiveOff",
      Title: "De 1 a 12 meses",
      Text: "O muco dos pulmões começam a recuperar a função normal",
      extraImageOn: "TrophyOn",
      extraImageOff: "TrophyOff",
    },
    {
      id: 8,
      imageOn: "DoctorOn",
      imageOff: "DoctorOff",
      Title: "Após 1 ano",
      Text: "O risco de morte por infarto já foi reduzido pela metade",
      extraImageOn: "TrophyOn",
      extraImageOff: "TrophyOff",
    },
    {
      id: 9,
      imageOn: "CelebrationOn",
      imageOff: "CelebrationOff",
      Title: "De 5 a 10 anos",
      Text: "O risco de infarto será igual ao de pessoas que nunca fumaram",
      extraImageOn: "TrophyOn",
      extraImageOff: "TrophyOff",
    },
    {
      id: 10,
      imageOn: "FireworksOn",
      imageOff: "FireworksOff",
      Title: "De 5 a 15 anos",
      Text: "O risco de AVC é reduzido ao de um não fumante",
      extraImageOn: "TrophyOn",
      extraImageOff: "TrophyOff",
    },
    {
      id: 11,
      imageOn: "SunflowerOn",
      imageOff: "SunflowerOff",
      Title: "Após 10 anos",
      Text: "A taxa de mortalidade por câncer de pulmão é cerca de metade da de um fumante",
      extraImageOn: "TrophyOn",
      extraImageOff: "TrophyOff",
    },
    {
      id: 12,
      imageOn: "TreesOn",
      imageOff: "TreesOff",
      Title: "Após 15 anos",
      Text: "O risco de doença cardíaca é igual ao de um não fumante",
      extraImageOn: "TrophyOn",
      extraImageOff: "TrophyOff",
    },
  ];

  const calculadoraRef = useRef<HTMLDivElement>(null);
  const resultadoRef = useRef<HTMLDivElement>(null);

  const calculateCardStates = (anos: number, meses: number, dias: number) => {
    const totalDias = anos * 365 + meses * 30 + dias;
    const newCardStates = Array(12).fill(false);

    if (totalDias >= 1) newCardStates[0] = true;
    if (totalDias >= 1) newCardStates[1] = true;
    if (totalDias >= 1) newCardStates[2] = true;
    if (totalDias >= 2) newCardStates[3] = true;
    if (totalDias >= 21) newCardStates[4] = true;
    if (totalDias >= 30) newCardStates[5] = true;
    if (totalDias >= 30) newCardStates[6] = true;
    if (totalDias >= 365) newCardStates[7] = true;
    if (totalDias >= 1825) newCardStates[8] = true;
    if (totalDias >= 3650) newCardStates[9] = true;
    if (totalDias >= 5475) newCardStates[10] = true;
    if (totalDias >= 7300) newCardStates[11] = true;

    setCardStates(newCardStates);
    setTotalDays(totalDias);
    setCalculatorVisible(true);
    setCardsVisible(true);
  };

  const handleCalculate = () => {
    requestAnimationFrame(() => {
      const element = resultadoRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const offset = window.scrollY + rect.top - 100;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    });

    const anos = parseInt(inputAnosRef.current?.value || "0", 10) || 0;
    const meses = parseInt(inputMesesRef.current?.value || "0", 10) || 0;
    const dias = parseInt(inputDiasRef.current?.value || "0", 10) || 0;
    const cigarrosPorDia =
      parseInt(inputCigarrosRef.current?.value || "0", 10) || 0;
    const precoCigarro = parseFloat(
      inputPrecoRef.current?.value.replace(/[^0-9,]/g, "").replace(",", ".") ||
        "0",
    );

    calculateCardStates(anos, meses, dias);

    const totalDias = anos * 365 + meses * 30 + dias;
    const totalCigarrosEvitados = totalDias * cigarrosPorDia;
    const totalDinheiroEconomizado =
      (totalCigarrosEvitados / 20) * precoCigarro;

    setTotalCigarettesAvoided(totalCigarrosEvitados);
    setTotalMoneySaved(totalDinheiroEconomizado);
  };

  const formatCurrencyInput = (value: string) => {
    const cleanValue = value.replace(/[^0-9]/g, "");
    const numberValue = Number(cleanValue) / 100;
    return numberValue.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  function formatMoney(value: number) {
    const formatNumber = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 3,
    });
    return formatNumber.format(value);
  }

  const handlePrecoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const formattedValue = formatCurrencyInput(value);
    inputPrecoRef.current!.value = formattedValue;
  };

  const handleReset = () => {
    setCalculatorVisible(true);
    setCardsVisible(false);
    setCardStates(Array(12).fill(false));
    setTotalDays(0);
    setTotalCigarettesAvoided(0);
    setTotalMoneySaved(0);
    setCalculatorVisible(true);
    setCardsVisible(false);

    if (inputAnosRef.current) inputAnosRef.current.value = "";
    if (inputMesesRef.current) inputMesesRef.current.value = "";
    if (inputDiasRef.current) inputDiasRef.current.value = "";
    if (inputCigarrosRef.current) inputCigarrosRef.current.value = "";
    if (inputPrecoRef.current) inputPrecoRef.current.value = "";
  };

  return (
    <div className="calculadora-container" ref={calculadoraRef}>
      <div className="calculadora-content">
        <div className="calculadora-header">
          <div className="calculadora-text-container">
            <h1>CALCULADORA DE SAÚDE</h1>
            <p>
              Quer parar de fumar ou precisa de um incentivo extra? <br></br>
              Descubra quanto tempo é necessário para sua saúde<br></br> se
              restabelecer dos efeitos do cigarro
            </p>
            <p>
              <span className="calculadora-text-small">
                Simule e descubra os{" "}
                <span className="calculadora-text-small-bolder">
                  benefícios de parar de fumar!
                </span>
              </span>
            </p>
          </div>
          <div className="calculadora-banner-container">
            <img
              src={images.Homem}
              className="calculadora-banner-image"
              alt=""
            />
          </div>
        </div>

        {calculatorVisible && (
          <div className="calculadora">
            <div className="calculadora-forms">
              <h2>
                Preencha as informações abaixo e surpreenda-se com os resultados
              </h2>
              <div className="calculadora-all-inputs">
                <div className="calculadora-input-container">
                  <div className="coluna leftItens">
                    <h3>Há quanto tempo você parou de fumar?</h3>
                    <div className="inputs">
                      <input
                        ref={inputAnosRef}
                        type="number"
                        placeholder="0"
                        className="inputCalc"
                        min="0"
                      />
                      <label htmlFor="">anos</label>
                      <input
                        ref={inputMesesRef}
                        type="number"
                        placeholder="0"
                        className="inputCalc"
                      />
                      <label htmlFor="">meses</label>
                      <input
                        ref={inputDiasRef}
                        type="number"
                        placeholder="0"
                        className="inputCalc"
                      />
                      <label htmlFor="">dias</label>
                    </div>
                  </div>
                  <div className="coluna rightItens">
                    <h3>Quantos cigarros você fumava por dia?</h3>
                    <div className="inputs">
                      <input
                        ref={inputCigarrosRef}
                        type="number"
                        placeholder="0"
                        className="inputCalc"
                      />

                      <span className="obs">
                        Obs.: 20 cigarro é igual a um maço.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="calculadora-input">
                  <div className="coluna leftItens2">
                    <h3>Quantos reais você pagava no maço?</h3>
                    <input
                      ref={inputPrecoRef}
                      type="text"
                      placeholder="R$ 00,00"
                      className="inputCalc"
                      onChange={handlePrecoChange}
                    />
                  </div>
                </div>
              </div>
              <div className="btnResultado">
                <button onClick={handleCalculate}>Ver Resultado</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {cardsVisible && (
        <div className="cardContainer" ref={resultadoRef}>
          <div className="cardContent">
            <h2>Resultado</h2>
            <div className="Banerresultados">
              <div className="resultItens">
                <div className="resultCardTwoFirst">
                  <div className="resultCard">
                    <div className="resultIcon">
                      <img src={images.Calendar} alt="Calendario" />
                      <p>
                        <span className="dadosResult">
                          {totalDays.toLocaleString("pt-BR")}
                        </span>
                      </p>
                    </div>
                    <p className="textResult">dias sem fumar</p>
                  </div>
                  <div className="resultCard">
                    <div className="resultIcon">
                      <img src={images.Confete} alt="Confete" />
                      <p>
                        <span className="dadosResult">
                          {totalCigarettesAvoided.toLocaleString("pt-BR")}
                        </span>
                      </p>
                    </div>
                    <p className="textResult">Cigarros evitados</p>
                  </div>
                </div>
                <div className="resultCard">
                  <div className="resultIcon">
                    <img src={images.Coins} alt="Moedas" />
                    <p>
                      <span className="dadosResult">
                        {formatMoney(totalMoneySaved)}
                      </span>
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
                        src={
                          cardStates[index]
                            ? images[card.imageOn]
                            : images[card.imageOff]
                        }
                      />
                    </div>
                    <div className="cardText">
                      <div className="cardTitle">
                        <h3 className="titleCard">{card.Title}</h3>
                        <img
                          className="trofeu"
                          src={
                            cardStates[index]
                              ? images[card.extraImageOn]
                              : images[card.extraImageOff]
                          }
                          alt="Extra"
                        />
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
        </div>
      )}
    </div>
  );
}

export default Calculadora;
