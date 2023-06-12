
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [name,setName]=useState("");
function newval(event){
  setName(event.target.value);
}
  return (
    <div>
  <input type="text" onChange={newval} />
       <p>Hello {name}!</p>
    </div>
  )
}

export default App
