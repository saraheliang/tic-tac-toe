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
  const [squares, setSquares] = useState(Array(9).fill(null));

  // function handleFirstClick() {
  //   handleClick(0)
  // }
  // function handleSecondClick() {
  //   handleClick(1)
  // }
  function handleClick(i) {
    const nextSquares = [...squares];
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
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
    </>
  );
}
