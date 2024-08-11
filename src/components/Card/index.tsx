import { Link } from "react-router-dom";
import "./card.css";

type CardProps = {
  title: string;
  image: string;
  description: string;
  to: string;
};

export default function Card({ title, image, description, to }: CardProps) {
  return (
    <Link
      to={to}
      className="card"
      style={{ color: "inherit", textDecoration: "none" }}
    >
      <div>
        <img src={image} alt={title} className="card_image" />
      </div>
      <div className="card_content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}
