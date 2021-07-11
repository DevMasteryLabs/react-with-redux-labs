import { Link } from "react-router-dom";

const Card = ({ title, image, buttonText, buttonLink }) => {
  return (
    <div className="card bg-dark text-light" style={{ width: "18rem", display: "inline-block" }}>
      <img src={image} className="card-img-top" alt="illustration" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <Link to={buttonLink} className="btn btn-primary">{buttonText}</Link>
      </div>
    </div>
  );
}

export default Card;

