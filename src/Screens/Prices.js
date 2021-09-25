import React from "react";
import PropTypes from "prop-types";

function Prices({ name, symbol }) {
  return (
    <div className="prices">
      <div className="prices__data">
        <h3 className="prices__name">{name}</h3>
        <h5 className="prices__symbol">{symbol}</h5>
      </div>
    </div>
  );
}
Prices.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired
};

export default Prices;