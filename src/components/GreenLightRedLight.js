import React from 'react';
import { useState } from 'react';

export const GreenLightRedLight = ({difficulty}) => {
    const [gameStarted, setGameStarted] = useState(false);
    const [boxColor, setBoxColor] = useState("red");
    const [score, setScore] = useState(0)
    const [timeLeft, setTimeLeft] = useState(40);   // default Time - 40 secs

     
    const handleGreenRedLight = () => {
        setGameStarted(true);

        const interval = setInterval(() => {
            setBoxColor((prev) => (prev === 'red' ? 'green' : 'red'))
        }, Math.random() * 1000 + 1000);   // random time between 1secs and 2secs

        setTimeout(() => {
            clearInterval(interval);
            setGameStarted(false);

            if(score >= 10){
                alert('You win!');
            }else{
              alert('Game Over!');
            }
            setBoxColor('red');
            setScore(0)
        }, 40000); // 1000 = 1sec so 40000 = 40sec
    }

    const handleBoxClick = () => {
        if(boxColor === 'green'){
            setScore((prevScore) => prevScore + 1);
        }else{
           setGameStarted(false);
           alert('Game Over!');
           setBoxColor("red");
           setScore(0)
        }
    }

  return (
    <div>
       <button onClick={handleGreenRedLight} disabled={gameStarted}>Start Game</button>

       <div
          className={`box ${boxColor}`}
          onClick={handleBoxClick}
          style={{cursor: gameStarted ? 'pointer' : 'not-allowed'}}
       ></div>
       <p>Score: {score}</p>
       <p>Time Left: {timeLeft} seconds</p>
    </div>
  )
}
