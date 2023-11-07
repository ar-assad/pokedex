import PropTypes from "prop-types";

export default function Stats({ data }) {
  return (
    <div className="main">
      <div className="abilities">
        <p>Abilities</p>
        <ul>
          {data.abilities.map((item) => (
            <li key={item.ability.name}>{item.ability.name}</li>
          ))}
        </ul>
      </div>
      <div className="stats">
      <p>Stats</p>
        {data.stats.map((item) => (
            <li key={item.stat.name}>{item.stat.name} {item.base_stat}</li>
        ))}
      </div>
      <div className="index">
        <p>Index</p>
        <ul>
            <li key="height">Height: {data.height / 10} m</li>
            <li key="weight">Weight: {data.weight / 10} kg</li>
        </ul>
      </div>
    </div>
  );
}

Stats.propTypes = {
  data: PropTypes.object.isRequired,
};
