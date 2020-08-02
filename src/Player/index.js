import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import PlayerDetails from "../PlayerDetails";
import PrimaryObjectiveScorer from "../PrimaryObjectiveScorer";
import SecondaryObjectiveScorer from "../SecondaryObjectiveScorer";

import "./style.css";

const Player = ({id, visible}) => {
  const [primaryPoints, setPrimaryPoints] = useState(0);
  const [secondaryPoints, setSecondaryPoints] = useState(0);

  const classes = classNames("Player", {
    "Player--visible": visible
  });

  return (
    <div className={ classes }>
      <PlayerDetails id={id} />
      <PrimaryObjectiveScorer updateTotal={setPrimaryPoints} />
      <SecondaryObjectiveScorer updateTotal={setSecondaryPoints} />

      <div className="total-points">
        <div className="total-points__label">
          Final Total
        </div>
        <div className="total-points__number">
          { primaryPoints + secondaryPoints } / 90
        </div>
      </div>
    </div>
  );
};
Player.propTypes = {
  id: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired
};

export default Player;
