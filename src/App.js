import React from 'react';
import './App.css';
import {useSelector,useDispatch} from "react-redux"
import {incNumber,decNumber} from './actions/index'

function App() {
  const myState= useSelector((state)=>state.changeTheNumber)
  const dispatch=useDispatch()
  return (
    <>
<div className="container">
  <h1>Increment /Decrement counter</h1>
  <h4>Using React and Redux</h4>
  <div className="quantity">
    <a  onClick={()=>dispatch(decNumber())}><span>-</span></a>
    <input type="text" className="quantity_input" value={myState} />
    <a  onClick={()=>dispatch(incNumber())}><span>+</span></a>
  </div>
</div>
    </>
  );
}

export default App;
