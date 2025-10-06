import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/information.module.css';

const InformationLayout = ({currentPlayer, isGameEnded, isDraw}) => {
    let status = '';

    if (isDraw) {
        status = 'Ничья';
    } else if (isGameEnded) {
        status = `Победа: ${currentPlayer}`;
    } else {
        status = `Ходит: ${currentPlayer}`;
    }

    return <div className={styles.information}>{status}</div>;
};

InformationLayout.propTypes = {
    currentPlayer: PropTypes.string.isRequired,
    isGameEnded: PropTypes.bool.isRequired,
    isDraw: PropTypes.bool.isRequired,
};

export default InformationLayout;