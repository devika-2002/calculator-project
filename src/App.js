import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('')
  const handleClick=(value)=>{
    if (value=='CE'){
      setInputValue('');
    }else if (value==='Delete'){
      setInputValue(inputValue.slice(0, -1));
    }else if (value==='='){
      try{
        setInputValue(eval(inputValue.toString()));
      } catch (error) {
        setInputValue('0');
      }
    }else{
      setInputValue(inputValue+value);
    }
  };
  return (
    <div>
      <input className='input-col' value={inputValue || 0} />
      <div className='cal-div'>

        <div className='col-1'>
          <button className='but-num' onClick={()=>handleClick('1')}>1</button>
          <button className='but-num' onClick={()=>handleClick('2')}>2</button>
          <button className='but-num' onClick={()=>handleClick('3')}>3</button>
          <button className='but-num' onClick={()=>handleClick('4')}>4</button>
          <button className='but-num1' onClick={()=>handleClick('CE')}>CE</button>
        </div>

        <div className='col-2'>
          <button className='but-num' onClick={()=>handleClick('5')}>5</button>
          <button className='but-num' onClick={()=>handleClick('6')}>6</button>
          <button className='but-num' onClick={()=>handleClick('7')}>7</button>
          <button className='but-num' onClick={()=>handleClick('8')}>8</button>
          <button className='but-num' onClick={()=>handleClick('+')}>+</button>
        </div>

        <div className='col-3'>
          <button className='but-num' onClick={()=>handleClick('9')}>9</button>
          <button className='but-num' onClick={()=>handleClick('0')}>0</button>
          <button className='but-num' onClick={()=>handleClick('-')}>-</button>
          <button className='but-num' onClick={()=>handleClick('*')}>*</button>
          <button className='but-num' onClick={()=>handleClick('/')}>/</button>
        </div>

        <div className='col-4'>
          <button className='but-num' onClick={()=>handleClick('%')}>%</button>
          <button className='but-num' onClick={()=>handleClick('.')}>.</button>
          <button className='but-num' onClick={()=>handleClick('=')}>=</button>
          <button className='but-num2' onClick={()=>handleClick('Delete')}>Delete</button>
        </div>

      </div>

    </div>
  );
}

export default App;
