import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
     
    <Mobile></Mobile>

    </div>
  );
}


function Mobile(){
  const [charge, setCharge]=useState(100);
const MobileBattery= ()=> {

  const newCharge = charge-10;
  if(newCharge===-10){
    return;
  }
  setCharge(newCharge);
  
}



  return (
    <div>
      <h1>Mobile Name: Apple</h1>
      <h3>Charge: {charge}</h3>
      <button onClick={MobileBattery}>Change Battery Status</button>
    </div>
  )
}

export default App;
