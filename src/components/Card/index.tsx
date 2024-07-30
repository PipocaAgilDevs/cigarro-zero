import "./card.css";

type CardProps = {
  title: string;
  image: string;
  description: string;
};

export default function Card({ title, image, description } : CardProps) {
  return (
    <div className="card">
      <div>
        <img src={image} alt={title} className="card_image" />
      </div>
      <div className="card_content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}


