import React, {useState} from 'react'
import BoxComponent from './BoxComponent';




function GameBoard() {
    
    
    const possibilities = [
        [12, 9, 10, 1, 15, 2, 7, 11, 3, 5, 14, 4, 13, 6, 8, null],
        [8, 6, 10, 1, 3, 2, 7, 11, 15, 9, 4, 5, 13, 14, 12, null],
        [1, 9, 13, 12, 15, 2, 7, 8, 3, 5, 14, 4, 10, 6, 11, null],
        [12, 9, 10, 1, 15, 2, 8, 11, 3, 5, 14, 4, 13, 6, 7, null],
        [11, 6, 9, 8, 15, 2, 7, 12, 3, 5, 14, 4, 13, 10, 1, null],
        
    ]
    const initial = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null];
    const [values, setValues] = useState([...initial]);
    const [gamewon, setGamewon] = useState([false, false]);
    const [steps, setSteps] = useState(0);


    const valuesHandler = (vals) => {
        if(gamewon)
        return 
        setSteps(steps+1)
        setValues([...vals]);
        checkForWinner();
    }
    
    const positions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

    const checkForWinner = () =>{
        for (let i=0; i<(positions.length-1); i++)
        {
            if(positions[i] !== values[i])
            return 

        }
        setGamewon([true, false]);
    }
    const startHandler = () => {
        setGamewon(false);
        setSteps(0)
        const rand = Math.floor(Math.random() * 4) + 1;
        setValues([...possibilities[rand]]);
    }
    const solveHandler = () =>{
        setValues([...initial])
        setSteps(0);
        setGamewon([false, true]);
        return 
    }

    return (
        <div className="game">
            
      <h1>Buzzel Game  <i className="fas fa-grin-beam"></i></h1>
            <div className="grid">

            {positions.map((position, index) => 
                    <BoxComponent 
                        setValues={valuesHandler} 
                        position={position} 
                        values={values} 
                        value={values[position-1]} 
                        key={index}
                    />
                )}
            </div>
            <p>You Made {steps} Steps</p>
            {
                gamewon[0]? <p>Congratulations!! you took {steps} step to solve the game</p> :''
            }
            {
                gamewon[1]? <p>Game Solved</p> :''
            }
            <button onClick={startHandler}>Start</button>
            <button onClick={solveHandler}>Solve</button>
            
        </div>
    )
}

export default GameBoard
