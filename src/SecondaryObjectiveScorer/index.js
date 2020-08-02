import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import SecondaryObjectiveTally from "./SecondaryObjectiveTally";

const calculateTotal = (points) => Object.values(points).reduce((total, round) => {
  total += round;
  return total >= 45 ? 45 : total;
}, 0);

const SecondaryObjectiveScorer = ({updateTotal}) => {
  const [points, setPoints] = useState({
    secondary1: 0,
    secondary2: 0,
    secondary3: 0,
  });

  const handlePointUpdate = useCallback((secondary, total) => {
    setPoints({
      ...points,
      ...{[`secondary${secondary}`]: total}
    });
  }, [setPoints, points]);

  useEffect(() => {
    updateTotal(calculateTotal(points));
  }, [points, updateTotal]);

  return(
    <div className="SecondaryObjectiveScorer">
      <SecondaryObjectiveTally
        number="One"
        handlePointUpdate={(points) => handlePointUpdate(1, points)} />
      <SecondaryObjectiveTally
        number="Two"
        handlePointUpdate={(points) => handlePointUpdate(2, points)} />
      <SecondaryObjectiveTally
        number="Three"
        handlePointUpdate={(points) => handlePointUpdate(3, points)}/>

      <div className="total-points">
        <div className="total-points__label">
                    Secondary Points Total
        </div>
        <div className="total-points__number">
          { calculateTotal(points) } / 45
        </div>
      </div>
    </div>
  );
};

SecondaryObjectiveScorer.propTypes = {
  updateTotal: PropTypes.func.isRequired
};

export default SecondaryObjectiveScorer;