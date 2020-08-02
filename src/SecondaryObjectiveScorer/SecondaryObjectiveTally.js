import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import PlayerInput from '../PlayerInput';
import classNames from 'classnames';
import './style.css';

const SecondaryObjectiveTally = ({ number, handlePointUpdate }) => {
    const [objectiveName, setObjectiveName] = useState('');
    const [selectedPoint, setSelectedPoint] = useState(false);

    const handlePointTally = useCallback((newPoints) => {
        if(selectedPoint === newPoints) {
            setSelectedPoint(false);
            handlePointUpdate(0);
        } else {
            setSelectedPoint(newPoints);
            handlePointUpdate(newPoints);
        }
    }, [handlePointUpdate, selectedPoint]);

    const points = [];
    for (let i=1; i <= 15; i++) {
        const classes = classNames("SecondaryObjectiveTally__point", {
            "SecondaryObjectiveTally__point--selected": selectedPoint === i,
            "SecondaryObjectiveTally__point--tallied": i < selectedPoint
        });

        points.push(
            <div
                onClick={() => handlePointTally(i)}
                className={ classes }
                key={i}
            >
                { i }
            </div>
        );
    };

    return(
        <div className="SecondaryObjectiveTally">
            <PlayerInput
                id={`secondary-objective-${number}`}
                label={`Secondary ${number}`}
                onChange={setObjectiveName}
                value={objectiveName}
                className="PlayerInput__secondary"
            />
            <div className="SecondaryObjectiveTally__point-wrapper">
                { points }
            </div>
        </div>
    );
}

SecondaryObjectiveTally.propTypes = {
    number: PropTypes.string.isRequired,
    handlePointUpdate: PropTypes.func.isRequired
}

export default SecondaryObjectiveTally;