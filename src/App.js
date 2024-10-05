import './App.css';

function App() {
  return (
    <div>
      <input className='input-col'/>
      <div className='cal-div'>

        <div className='col-1'>
          <button className='but-num'>1</button>
          <button className='but-num'>2</button>
          <button className='but-num'>3</button>
          <button className='but-num'>4</button>
          <button className='but-num1'>CE</button>
        </div>

        <div className='col-2'>
          <button className='but-num'>5</button>
          <button className='but-num'>6</button>
          <button className='but-num'>7</button>
          <button className='but-num'>8</button>
          <button className='but-num'>+</button>
        </div>

        <div className='col-3'>
          <button className='but-num'>9</button>
          <button className='but-num'>0</button>
          <button className='but-num'>-</button>
          <button className='but-num'>*</button>
          <button className='but-num'>/</button>
        </div>

        <div className='col-4'>
          <button className='but-num'>%</button>
          <button className='but-num'>.</button>
          <button className='but-num'>=</button>
          <button className='but-num2'>Delete</button>
        </div>

      </div>

    </div>
  );
}

export default App;
