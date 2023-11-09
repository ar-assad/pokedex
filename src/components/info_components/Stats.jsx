import PropTypes from "prop-types";
import "./Stats.css";

export default function Stats({ data }) {
  return (
    <div className="stats-container">
      <div className="abilities">
        <p>Abilities</p>
        <ul>
          {data.abilities.map((item) => {
            if (item.is_hidden)
              return (
                <li key={item.ability.name} className="hidden">
                  {item.ability.name}
                </li>
              );
            return <li key={item.ability.name}>{item.ability.name}</li>;
          })}
        </ul>
      </div>
      <div className="battle-stats">
        <p>Stats</p>
        <ul>
          {data.stats.map((item) => (
            <li key={item.stat.name} className={item.stat.name}>
              <p>
                {item.stat.name === "special-attack"
                  ? "sp.atk"
                  : item.stat.name === "special-defense"
                  ? "sp.def"
                  : item.stat.name}
              </p>
              <p>{item.base_stat}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="index">
        <p>Index</p>
        <ul>
          <li key="height">
            <p>Height</p> <p>{data.height * 10} cm</p>
          </li>
          <li key="weight">
            <p>Weight</p> <p>{data.weight / 10} kg</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

Stats.propTypes = {
  data: PropTypes.object.isRequired,
};
