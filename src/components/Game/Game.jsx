import React, {useState} from 'react';
import GameLayout from './GameLayout';

const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // горизонтальные
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // вертикальные
    [0, 4, 8], [2, 4, 6]             // диагональные
];

const Game = () => {
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [isGameEnded, setIsGameEnded] = useState(false);
    const [isDraw, setIsDraw] = useState(false);
    const [field, setField] = useState(Array(9).fill(''));

    const checkWinner = (field) => {
        return WIN_PATTERNS.some(([a, b, c]) => {
            return field[a] && field[a] === field[b] && field[a] === field[c];
        });
    };

    const handleCellClick = (index) => {
        if (field[index] || isGameEnded) return;

        const newField = [...field];
        newField[index] = currentPlayer;
        setField(newField);

        if (checkWinner(newField)) {
            setIsGameEnded(true);
            return;
        }

        if (!newField.includes('')) {
            setIsDraw(true);
            return;
        }

        setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
    };

    const resetGame = () => {
        setCurrentPlayer('X');
        setIsGameEnded(false);
        setIsDraw(false);
        setField(Array(9).fill(''));
    };

    return (
        <GameLayout
            field={field}
            onCellClick={handleCellClick}
            currentPlayer={currentPlayer}
            isGameEnded={isGameEnded}
            isDraw={isDraw}
            onReset={resetGame}
        />
    );
};

export default Game;