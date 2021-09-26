import React from "react";
import PropTypes from "prop-types";

function Exchanges({ name, website,description }) {
  return (
    <div className="exchanges">
      <div className="exchanges__data">
        <h3 className="exchanges__name">{name}</h3>
        <p className="exchanges__description">{description.slice(0, 200)}</p>
        {/* <h3 className="exchanges__website">{website}</h3> */}
      </div>
    </div>
  );
}

//website는 links안에 있는데 이걸 어떻게 가져오지?
Exchanges.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // website: PropTypes.string.isRequired
};

export default Exchanges;