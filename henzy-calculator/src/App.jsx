import { useState } from 'react'
import './App.css'

function App() {
  const [num, setNum] = useState(0);

  function inputNum(e){
    setNum(e.target.value)
  };


  return (
    <div className="App">
      <p>Henzy calculator</p>
      <div>
        <div class="first-row">
          <input type="text" name="result" id="result" placeholder="Result" value={num}/>
          <input type="button" value="C" onclick="result.value=''" id="clear-button" />
        </div>
        <div class="second-row">
          <input type="button" value={1} onClick={inputNum} />
          <input type="button" value={2} onClick={inputNum} />
          <input type="button" value={3} onClick={inputNum} />
          <input type="button" value={'+'} onClick={inputNum} />
        </div>
        <div class="third-row">
          <input type="button" value={4} onClick={inputNum} />
          <input type="button" value={5} onClick={inputNum} />
          <input type="button" value={6} onClick={inputNum} />
          <input type="button" value={"-"} onClick={inputNum} />
        </div>
        <div class="fourth-row">
          <input type="button" value={7} onClick={inputNum} />
          <input type="button" value={8} onClick={inputNum} />
          <input type="button" value={9} onClick={inputNum} />
          <input type="button" value={"*"} onClick={inputNum} />
        </div>
        <div class="fifth-row">
          <input type="button" value={"/"} onClick={inputNum} />
          <input type="button" value={0} onClick={inputNum} />
          <input type="button" value={"."} onClick={inputNum} />
          <input type="button" value={"="} onClick={inputNum} />
        </div>
      </div>
  </div>
  )
}

export default App
