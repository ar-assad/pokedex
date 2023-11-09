import PropTypes from "prop-types";
import Sprite from "../Sprite";
import { useState } from "react";
import "./PokeCard.css";
import "./Types.css";
import symbols from "../../assets/symbols.png";

export default function PokeCard({ data }) {
  const [spriteUrl, setSpriteUrl] = useState(data.sprites.front_default);
  const spriteUrls = {
    O: data.sprites.front_default,
    S: data.sprites.front_shiny,
    I: data.sprites.versions["generation-i"]["red-blue"].front_default,
    II: data.sprites.versions["generation-ii"].crystal.front_default,
    III: data.sprites.versions["generation-iii"].emerald.front_default,
    IV: data.sprites.versions["generation-iv"].platinum.front_default,
    V: data.sprites.versions["generation-v"]["black-white"].animated
      .front_default,
    VI: data.sprites.versions["generation-vi"]["x-y"].front_default,
    VII: data.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"]
      .front_default,
  };

  return (
    <div className="card">
      <div className="top-bar">
        <p className="dexNo">No. {data.id}</p>
        <img src={symbols} className="symbols"/>
      </div>
      <div className="sprite-container">
        <Sprite name={data.name} url={spriteUrl} />
      </div>
      <ul className="sprite-buttons">
        {Object.entries(spriteUrls).map(
          ([version, url], index) =>
            url && (
              <li key={index}>
                <button onClick={() => setSpriteUrl(url)}>{version}</button>
              </li>
            )
        )}
      </ul>
      <p className="name">{data.name}</p>
      <ul className="type-container">
        {data.types.map((item, index) => (
          <li key={index} className={`${item.type.name} type`}>
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
