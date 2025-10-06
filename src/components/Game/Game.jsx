import store from "../../store/store";
import GameLayout from "./GameLayout";

const getStateFromStore = () => {
  const state = store.getState();
  return {
    field: state.field,
    currentPlayer: state.currentPlayer,
    isGameEnded: state.isGameEnded,
    isDraw: state.isDraw,
  };
};

const Game = () => {
  const handleCellClick = (index) => {
    store.dispatch({ type: "MOVE", payload: { index } });
  };

  const handleReset = () => {
    store.dispatch({ type: "RESET" });
  };

  const { field, currentPlayer, isGameEnded, isDraw } = getStateFromStore();

  return (
    <GameLayout
      field={field}
      onCellClick={handleCellClick}
      currentPlayer={currentPlayer}
      isGameEnded={isGameEnded}
      isDraw={isDraw}
      onReset={handleReset}
    />
  );
};

export default Game;
