import React from "react";
import PropTypes from "prop-types";

function Coins({ name, symbol }) {
  return (
    <div className="coins">
      <div className="coins__data">

        <ul className="coins_name">
          {name.map((name, index) => (
            < li key={index} className="Cname">
              # {index} : {name}
            </li>
          ))}
        </ul>
        <h5 className="coins__symbol">{symbol}</h5>

      </div>
    </div>
  );
}

//website는 links안에 있는데 이걸 어떻게 가져오지?
Coins.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired
};

export default Coins;