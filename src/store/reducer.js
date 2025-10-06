const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

const checkWinner = (field) => {
    return WIN_PATTERNS.some(([a, b, c]) => {
        return field[a] && field[a] === field[b] && field[a] === field[c];
    });
};

const initialState = {
    field: Array(9).fill(''),
    currentPlayer: 'X',
    isGameEnded: false,
    isDraw: false
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MOVE': {
            const { index } = action.payload;

            if (state.isGameEnded || state.field[index] !== '') {
                return state;
            }

            const newField = [...state.field];
            newField[index] = state.currentPlayer;

            const hasWinner = checkWinner(newField);
            const isFull = !newField.includes('');

            if (hasWinner) {
                return {
                    ...state,
                    field: newField,
                    isGameEnded: true
                };
            }

            if (isFull) {
                return {
                    ...state,
                    field: newField,
                    isDraw: true
                };
            }

            return {
                ...state,
                field: newField,
                currentPlayer: state.currentPlayer === 'X' ? '0' : 'X'
            };
        }

        case 'RESET':
            return initialState;

        default:
            return state;
    }
};

export default gameReducer;