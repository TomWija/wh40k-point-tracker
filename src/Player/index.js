import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlayerDetails from '../PlayerDetails';

import './style.css';

const Player = ({id}) => {
    const [primaryPoints, setPrimaryPoints] = useState(0);

    return (
        <div className="Player">
            <PlayerDetails id={id} />
            <PrimaryObjectiveScorer updateTotal={setPrimaryPoints} />
        </div>
    );
}
Player.propTypes = {
    id: PropTypes.number.isRequired
}

export default Player;