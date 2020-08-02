import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const RoundScorerPointSelector = ({handlePointSelection, points, selected}) => {
    const classes = classNames('RoundScorer__element', 'RoundScorer__points', {
        [`RoundScorer__points--active`]: selected
    });

    return (
        <div
            className={ classes }
            onClick={() => handlePointSelection(points)}
        >
            { points }
        </div>
    );
};

RoundScorerPointSelector.propTypes = {
    handlePointSelection: PropTypes.func.isRequired,
    points: PropTypes.oneOf([5, 10, 15]).isRequired,
    selected: PropTypes.bool.isRequired
}

export default RoundScorerPointSelector;