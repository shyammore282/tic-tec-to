import React, { useEffect, useState } from "react";
import "./ticStyle.css";

const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      <h3>{value}</h3>
    </button>
  );
};
// 0 1 2
// 3 4 5
// 6 7 8

const TictacTo = () => {
  const [square, setSquare] = useState(Array(9).fill(""));
  const [isXturn, setIsXturn] = useState(true);
  const [status, setStatus] = useState("");

  const getWinner = (square) => {
    let winnerPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winnerPattern.length; i++) {
      const [x, y, z] = winnerPattern[i];

      if (square[x] && square[x] === square[y] && square[x] === square[z]) {
        return square[x];
      }
    }

    return 0;
  };

  const handleRestartGame = () => {
    setIsXturn(true);
    setSquare(Array(9).fill(""));
  };

  const handleOnClick = (getIndex) => {
    let copySquare = [...square];
    if (copySquare[getIndex] || getWinner(copySquare)) return;
    copySquare[getIndex] = isXturn ? "X" : "O";
    setIsXturn(!isXturn);
    setSquare(copySquare);
  };

  useEffect(() => {
    if (!getWinner(square) && square.every((items) => items !== "")) {
      setStatus("This Is Draw ! Please Restart The Game");
    } else if (getWinner(square)) {
      setStatus(`Winner Is ${getWinner(square)}.  Please Restart The Game`);
    } else {
      setStatus(`Next Player Is ${isXturn ? "X" : "O"}`);
    }
  }, [square, isXturn]);
  return (
    <div className="tic-tac-container">
      <div className="row">
        <div>
          <Square value={square[0]} onClick={() => handleOnClick(0)} />
          <Square value={square[1]} onClick={() => handleOnClick(1)} />
          <Square value={square[2]} onClick={() => handleOnClick(2)} />
        </div>
      </div>
      <div className="row">
        <div>
          <Square value={square[3]} onClick={() => handleOnClick(3)} />
          <Square value={square[4]} onClick={() => handleOnClick(4)} />
          <Square value={square[5]} onClick={() => handleOnClick(5)} />
        </div>
      </div>
      <div className="row">
        <div>
          <Square value={square[6]} onClick={() => handleOnClick(6)} />
          <Square value={square[7]} onClick={() => handleOnClick(7)} />
          <Square value={square[8]} onClick={() => handleOnClick(8)} />
        </div>
      </div>
      <div className="status">{status}</div>
      <button className="re-game" onClick={handleRestartGame}>
        Restart The Game
      </button>
    </div>
  );
};

export default TictacTo;
