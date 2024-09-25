import React,{useState} from "react";
import Square from "./Square"
import './Board.css';
function Board(){
    const [squares , setSquares] = useState(Array(9).fill(null));
    const [countArray , setCountArray] = useState(Array(9).fill(true));
        
    const [isX, setIsX] =useState(true);
  const [count , setCount] = useState(0);

    const handleClick = (i) => {

        if (calculateWinner(squares) || squares[i] ) { // if once we write X/O we cant change it letter for that square[i]
            return    //if winner in fist 4 to 5 click it will return and stop further
          }

        
        squares[i] = isX ? 'X' : 'O'
        setSquares(squares)
        setIsX(!isX)
      }

      const handleCount = (i)=>{
        
        if(countArray[i] === true){
        setCount(count + 1);
        countArray[i]= false
        setCountArray(countArray)
        }
        else{
          return ;
        }
      }


      const winner = calculateWinner(squares)
    let status
  
    
    if (winner) {
      status = `Winner: ${winner}`;
    }
    else if(count >= 9){
      status = "Draw Game";
      // handleRestart();
    }
     else  {
      status = 'Next player: ' + (isX ? 'X' : 'O');
    }

   


    const handleRestart = () => {
        setIsX(true)
        setSquares(Array(9).fill(null))
      setCount(0);
      setCountArray(Array(9).fill(true))
      }

  

    return(
        <div className="board">     
      <Square value={squares[0]} onClick={()=> {
        handleClick(0);
        handleCount(0); 
        }}/>
      <Square value={squares[1]} onClick={()=> {
        handleClick(1);
        handleCount(1) }}
        />
      <Square value={squares[2]} onClick={()=> {
        handleClick(2);
        handleCount(2) ;
      }
    }/>
      <Square value={squares[3]} onClick={()=> {
        handleClick(3);
        handleCount(3) ;
      }
    }/>
      <Square value={squares[4]} onClick={()=> {
        handleClick(4);
        handleCount(4) ;
      }
    }/>
      <Square value={squares[5]} onClick={()=> {
        handleClick(5);
        handleCount(5) ;
      }
    }/>
      <Square value={squares[6]} onClick={()=> {
        handleClick(6);
        handleCount(6) ;
      }
    }/>
      <Square value={squares[7]} onClick={()=> {
        handleClick(7);
        handleCount(7) ;
      }
    }/>
      <Square value={squares[8]} onClick={()=> {
        handleClick(8);
        handleCount(8) ;
      }
    }/>
      <div className="status">{status}</div>
      
      <button className="restart" onClick={handleRestart}>Restart Game!</button>
     </div>
     
    )
}

function calculateWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    
    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      } 
      
      
    }
    return null;
  }

export default Board;