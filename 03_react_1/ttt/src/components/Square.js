import React from 'react'; //react라는 모듈에 있는 default가 React라는 이름으로 들어오는 것

function Square({value, onClick}) {
  return(
    <button 
      className='square' 
      onClick={onClick}
    >{value}</button>
  );
}

export default Square;
