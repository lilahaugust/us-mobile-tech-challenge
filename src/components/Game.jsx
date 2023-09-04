import { useState, useCallback, useRef } from "react";
import { produce } from "immer";
import { countNeighbors } from "../utils/gameUtils";

const Game = () => {
  const [isRunning, setIsRunning] = useState(false);

  const isRunningRef = useRef();
  isRunningRef.current = isRunning;
  // Since the simulateGeneration function does not change, but isRunning does,
  // the useRef hook solves the dependency issue in the useCallback hook.

  const numRows = 50;
  const numCols = 50;

  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }
    return rows;
  });

  const simulateGeneration = useCallback(() => {
    // Here, I use the useCallback hook because I don't want the function to
    // change or be re-created at every render.
    if (!isRunningRef.current) {
      return;
    }

    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < numRows; i++) {
          for (let k = 0; k < numCols; k++) {
            let neighbors = countNeighbors(g, numRows, numCols, [i, k]);

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }
        }
      });
    });
    // setTimeout recursively calls the simulateGeneration function at the specified interval.
    setTimeout(simulateGeneration, 500);
  }, []);

  const resetGrid = () => {
    const newGrid = Array.from(Array(numRows), () => Array(numCols).fill(0));
    setGrid(newGrid);
  };

  return (
    <div>
      <div className="buttons-area">
        <div>
          <button
            onClick={() => {
              setIsRunning(!isRunning);
              if (!isRunning) {
                isRunningRef.current = true;
                simulateGeneration();
              }
            }}
          >
            {isRunning ? "Stop" : "Start"}
          </button>
        </div>
        <div>
          <button onClick={resetGrid}>Reset</button>
        </div>
      </div>
      <div
        className="game-board"
        style={{ gridTemplateColumns: `repeat(${numCols}, 20px)` }}
      >
        {grid.map((rows, i) =>
          rows.map((col, k) => (
            <div
              key={`${i}-${k}`}
              className="cell"
              onClick={() => {
                const newGrid = produce(grid, (gridCopy) => {
                  gridCopy[i][k] = grid[i][k] ? 0 : 1;
                });
                setGrid(newGrid);
              }}
              style={{ backgroundColor: grid[i][k] ? "#446C41" : "#816B68" }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Game;
