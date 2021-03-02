import React, {Component} from 'react';
import Board from './Board';

class Game extends Component{
  constructor(props){
    super(props);
    this.state = {
      history: [
        {squares: Array(9).fill(null)}
      ],
      step: 0,
      start: false
    }
  }
  
  calculateWinner(squares) {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for(const [a,b,c] of lines){
      if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
        return squares[a];
      }
    }
    /*for(let i=0; i <lines.length; i++) {
      const [a,b,c] = lines[i];
      if(squares[a] && squares[a] == squares[b] && squares[b] == squares[c]){
        return squares[a];
      }
    }*/
    return null;
  }

  nextPlayer(idx){
    return (idx % 2 === 0)? 'X':'O';
  }

  handleClick(i){
    const {step} = this.state;
    const history = this.state.history.slice(0, this.state.step + 1);//end 바로 앞에까지 복사
    const current = history[step];
    const squares = current.squares.slice();
    if(squares[i] || this.calculateWinner(squares) || this.state.start === false){
      return;
    }//같은 자리를 선택 못하도록, winner가 나오면
    squares[i] = this.nextPlayer(step);
    this.setState({
      history: history.concat([{squares: squares}]),
      step: step + 1
    })
  }

  goto(idx){
    this.setState({
      step: idx
    });
  }

  getMoves(){
    return this.state.history.map((step, idx) => {
      const desc = idx ? `Go go move #${idx}` : `Go to game start`;
      return(
        <li key={idx}>
          <button onClick={
            ()=> {this.goto(idx)}
          }>{desc}</button>
        </li>
      );
    });//history 한줄 한줄을 가지고 출력 map으로 한줄씩 돌자
  }

  render(){
    const history = this.state.history;
    const squares = history[this.state.step].squares;
    const winner = this.calculateWinner(squares);
    let status;
    if(winner) {
      status = `Winner: ${winner}`;
    }else if(this.state.step < 9){
      status = `Next player: ${this.nextPlayer(this.state.step)}`;
    }else{
      status = `No Winner. Try Again!`
    }
    return(
      <div className='game'>
        <div className='game-board'>
          <Board 
            squares={squares} 
            onClick={(i) => this.handleClick(i)}/>
        </div>
        <div className='game-info'>
          {
            (this.state.start === false) && (<button className='startbtn' onClick={()=>{
              this.setState({
                start: true
              });
            }}>Start!</button>)
          }
          {(this.state.start === true) &&
              <div>{status}</div>
          }
          {(this.state.start === true) &&
              <ol>
                {this.getMoves()}
              </ol> 
          }
          {
            (this.state.step >= 1) && (<button onClick={() => {
              this.setState({
                step: this.state.step - 1,
                history: this.state.history.slice(0, this.state.step)});
            }}>Undo</button>) 
          }
          {
            (this.state.step === 9) && (!winner) && (<button className='newgame' onClick={()=> {
              this.setState({
                step: this.state.step - 9,
                history: this.state.history.slice(0,1)});
            }}>New Game</button>) 
          }
        </div>
      </div>
    );
  }
}

export default Game;