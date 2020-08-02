import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import RoundScorer from './RoundScorer';

import './style.css';

const calculateTotal = (points) => Object.values(points).reduce((total, round) => {
    total += round;
    return total >= 45 ? 45 : total;
}, 0);

const PrimaryObjectiveScorer = ({ updateTotal }) => {
    const [points, setPoints] = useState({
        round2: 0,
        round3: 0,
        round4: 0,
        round5: 0,
    });

    useEffect(() => {
        updateTotal(calculateTotal(points));
    }, [points, updateTotal]);

    const handlePointUpdate = useCallback((round, total) => {
        setPoints({
            ...points,
            ...{[`round${round}`]: total}
        });
    }, [setPoints, points]);

    return (
        <div className="PrimaryObjectiveScorer">
            <RoundScorer
                round={2}
                handlePointUpdate={(points) => handlePointUpdate(2, points)} />
            <RoundScorer
                round={3}
                handlePointUpdate={(points) => handlePointUpdate(3, points)} />
            <RoundScorer
                round={4}
                handlePointUpdate={(points) => handlePointUpdate(4, points)} />
            <RoundScorer
                round={5}
                handlePointUpdate={(points) => handlePointUpdate(5, points)} />

            <div className="total-points">
                <div className="total-points__label">
                    Primary Points Total
                </div>
                <div className="total-points__number">
                    { calculateTotal(points) } / 45
                </div>
            </div>
        </div>
    );
}

PrimaryObjectiveScorer.propTypes = {
    updateTotal: PropTypes.func.isRequired
}

export default PrimaryObjectiveScorer;