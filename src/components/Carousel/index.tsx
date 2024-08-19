import { useState } from "react";
import "./styles.css";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const topics = [
    {
      title: "Riscos para a saúde",
      cards: [
        {
          title: "Doença cardíaca",
          content: "O tabagismo é a principal causa de doenças cardíacas.",
        },
        {
          title: "Câncer de pulmão",
          content: "O tabagismo é a principal causa de câncer de pulmão.",
        },
      ],
    },
    { title: "Recursos de apoio" },
    { title: "Saúde mental" },
    { title: "Benefícios da cessação" },
    { title: "Métodos de cessação" },
    { title: "Dicas para superar a dependência" },
  ];

  const handleTopicClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-topics">
        {topics.map((topic, index) => (
          <button
            key={index}
            className={`carousel-topic ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => handleTopicClick(index)}
          >
            {topic.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
