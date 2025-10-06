import React from 'react';
import PropTypes from 'prop-types';
import Information from '../Information/Information';
import Field from '../Field/Field';
import styles from '../../styles/game.module.css';

const GameLayout = ({
                        field,
                        onCellClick,
                        currentPlayer,
                        isGameEnded,
                        isDraw,
                        onReset
                    }) => {
    return (
        <div className={styles.game}>
            <h1>Крестики-Нолики</h1>
            <Information
                currentPlayer={currentPlayer}
                isGameEnded={isGameEnded}
                isDraw={isDraw}
            />
            <Field field={field} onCellClick={onCellClick}/>
            <button className={styles.resetButton} onClick={onReset}>
                Начать заново
            </button>
        </div>
    );
};

GameLayout.propTypes = {
    field: PropTypes.arrayOf(PropTypes.string).isRequired,
    onCellClick: PropTypes.func.isRequired,
    currentPlayer: PropTypes.string.isRequired,
    isGameEnded: PropTypes.bool.isRequired,
    isDraw: PropTypes.bool.isRequired,
    onReset: PropTypes.func.isRequired,
};

export default GameLayout;