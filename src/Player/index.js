import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlayerDetails from '../PlayerDetails';

import './style.css';

const Player = ({id}) => {

    return (
        <div className="Player">
            <PlayerDetails id={id} />
        </div>
    );
}
Player.propTypes = {
    id: PropTypes.number.isRequired
}

export default Player;