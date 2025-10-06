import React from 'react';
import InformationLayout from './InformationLayout';

const Information = ({currentPlayer, isGameEnded, isDraw}) => {
    return (
        <InformationLayout
            currentPlayer={currentPlayer}
            isGameEnded={isGameEnded}
            isDraw={isDraw}
        />
    );
};

export default Information;