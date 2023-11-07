import PropTypes from "prop-types";
import Sprite from "../Sprite";

export default function PokeCard({ data }) {
  return (
    <div className="card-container">
      <p className="dexNo">No. {data.id}</p>
      <Sprite name={data.name} />
      <p className="name">{data.name}</p>
      <ul>
        {data.types.map((item, index) => (
          <li key={index} className={item.type.name}>
            {item.type.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

PokeCard.propTypes = {
  data: PropTypes.object.isRequired,
};
