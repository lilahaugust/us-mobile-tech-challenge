import { useSelector } from "react-redux";
import Game from "./Game";

const GamePage = () => {
  const playerName = useSelector((state) => state.player.playerName);

  return (
    <div className="game-page">
      <h1>{`${playerName}'s Game of Life`}</h1>
      <Game />
    </div>
  );
};

export default GamePage;
