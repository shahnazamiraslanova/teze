import React from 'react'
import './Header.css'
function Header( {changeMood,mood}) {
  return (
    <div className={mood? "headerLight":"headerDark"}>
     <h1><a href="">Where in the world?</a></h1>
     <button onClick={changeMood}>☾ Change Mood</button>
    </div>
  )
}

export default Header