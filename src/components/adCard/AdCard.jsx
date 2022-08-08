import "./adcard.css";
import { Link } from "react-router-dom";

export default function AdCard({ card }) {
  return (
    <Link to={"/ad-details"} className="ad">
      <img src={`./assets/imgs/ad-card/${card.img}`} alt="ad" />
      <div className="text fs-1">
        <span>{card.price}</span>
        <span>{card.name}</span>
      </div>
    </Link>
  );
}
