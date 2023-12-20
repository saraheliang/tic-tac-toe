// React has a special function called useState that can be used to remember information
import React, { useState } from 'react';

// curly brackets are an object in JS and allow for stuff to be read in JS and not JSX
function Square({value, onSquareClick}) {
  return (
    <button 
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  // const winner = calculateWinner(squares);
  // let status;
  // if (winner) {
  //   status = "Winner: " + winner;
  // } else {
  //   status = "Next player: " + (xIsNext ? "X" : "O");
  // }
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  // function handleFirstClick() {
  //   handleClick(0)
  // }
  // function handleSecondClick() {
  //   handleClick(1)
  // }
  function handleClick(i) {
    // best way is just to return out the function and wait for user to click again.
    // will move on if user clicks something that is currently null
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = [...squares];
    if (xIsNext) {
      nextSquares[i] = "X";
    }
    else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  
  return (
    <>
      <div className="container">
        <div className="board">
          <h1>{status}</h1>
          <div className="row">
            {/* square has a prop called value where you can pass in a set value */}
              {/* an arrow function, which is a shorter way to define functions */}
              {/* When the square is clicked, the code after the => “arrow” will run, calling handleClick(0). this is rather than immediately calling the function handleClick(0) */}
                  {/* The handleClick(0) call will be a part of rendering the board component. Because handleClick(0) alters the state of the board component by calling setSquares, your entire board component will be re-rendered again. But this runs handleClick(0) again, leading to an infinite loop */}
            <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
            <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
            <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
          </div>
          <div className="row">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
            <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
            <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
          </div>
          <div className="row">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
            <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
            <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
          </div>
        </div>
      </div>
    </>
  );
}


function calculateWinner(squares) {
  // possible indices where there can be wins
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  // go through all possible combos of indices for a win and look for a win within them
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // know that if there is a win, first index must be filled for sure and then everything else should be equal to that first index
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
