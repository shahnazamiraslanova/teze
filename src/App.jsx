import React, { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import './App.css'
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((countries) => setData(countries));
    console.log(data);
  }, []);
  const [mood,setMood]=useState(true)
  const changeMood=()=>{
  setMood(!mood)
  }
  
  return (
    <div className={mood? "bodyLight" :"bodyDark"}>
      <Header changeMood={changeMood} mood={mood}  />
      <Main mood={mood} data={data}/>
    </div>
  );
}

export default App;
