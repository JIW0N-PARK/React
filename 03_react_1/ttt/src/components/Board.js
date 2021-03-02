import React, {Component} from 'react';
import Square from './Square';

class Board extends Component{
  renderSquare(i){//closure, 내부 함수는 외부 함수가 가지고 있던 variable을 기억
    return(
      <Square 
        value={this.props.squares[i]}
        onClick={()=>{
          this.props.onClick(i);
        }}
      />
    );
  }
  
  renderRow(rowNum){
    return(
      <div className='row'>
        {this.renderSquare(rowNum*3 + 0)}
        {this.renderSquare(rowNum*3 + 1)}
        {this.renderSquare(rowNum*3 + 2)}
      </div>
    );
  }

  render(){
    return(
      <div>
        {this.renderRow(0)}
        {this.renderRow(1)}
        {this.renderRow(2)}
      </div>
    );
  }
}

//JSX == XML
// 1. Root가 항상 있어야 한다.
// 2. 열린 tag가 있으면 닫힌 tag가 있어야 한다. <br></br> or <br/>

export default Board;