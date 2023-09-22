import './App.css'
import './Responsive.css'

function App() {
  let red = ()=>{
    document.body.style.backgroundColor="red";
  }   
  let green = ()=>{
    document.body.style.backgroundColor="green";
  }   
  let blue = ()=>{
    document.body.style.backgroundColor="blue";
  }   
  let olive = ()=>{
    document.body.style.backgroundColor="olive";
  }   
  let grey = ()=>{
    document.body.style.backgroundColor="grey";
  }   
  let yellow = ()=>{
    document.body.style.backgroundColor="yellow";
  }   
  let pink = ()=>{
    document.body.style.backgroundColor="pink";
  }   
  let purple = ()=>{
    document.body.style.backgroundColor="purple";
  }   
  let white = ()=>{
    document.body.style.backgroundColor="white";
  }
  let black = ()=>{
    document.body.style.backgroundColor="black";
  } 
  return (
    <>
    <div className="container">
      <button className="btn" id='red' onClick={red}>Red</button>
      <button className="btn" id='green' onClick={green}>Green</button>
      <button className="btn" id='blue' onClick={blue}>Blue</button>
      <button className="btn" id='olive' onClick={olive}>Olive</button>
      <button className="btn" id='grey' onClick={grey}>Grey</button>
      <button className="btn" id='yellow' onClick={yellow}>Yellow</button>
      <button className="btn" id='pink' onClick={pink}>Pink</button>
      <button className="btn" id='purple' onClick={purple}>Purple</button>
      <button className="btn" id='white' onClick={white}>White</button>
      <button className="btn" id='black' onClick={black}>Black</button>
    </div>
    </>
  )
}

export default App
