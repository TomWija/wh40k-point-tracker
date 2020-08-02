import React, { useState }  from "react";
import PropTypes from "prop-types";
import PlayerInput from "../PlayerInput";

import "./style.css";

const PlayerDetails = ({id}) => {
  const [name, setName] = useState("");
  const [cp, setCP] = useState("0");
  const [faction, setFaction] = useState("");

  return (
    <div className="PlayerDetails">
      <PlayerInput
        id={`player-name-${id}`}
        label={`Player ${id} Name`}
        onChange={setName}
        value={name}
        className="PlayerInput__name"
      />
      <PlayerInput
        id={`cp-${id}`}
        type="number"
        label={"CP"}
        onChange={setCP}
        value={cp}
        className="PlayerInput__cp"
      />
      <PlayerInput
        id={`faction-${id}`}
        label={"Faction"}
        onChange={setFaction}
        value={faction}
      />
    </div>
  );
};

PlayerDetails.propTypes = {
  id: PropTypes.number.isRequired
};

export default PlayerDetails;