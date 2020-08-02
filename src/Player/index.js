import React, { useState } from "react";
import PropTypes from "prop-types";
import PlayerDetails from "../PlayerDetails";
import PrimaryObjectiveScorer from "../PrimaryObjectiveScorer";
import SecondaryObjectiveScorer from "../SecondaryObjectiveScorer";

import "./style.css";

const Player = ({id}) => {
  const [primaryPoints, setPrimaryPoints] = useState(0);
  const [secondaryPoints, setSecondaryPoints] = useState(0);

  return (
    <div className="Player">
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
  id: PropTypes.number.isRequired
};

export default Player;