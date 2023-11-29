import React from 'react'
import { useState } from 'react'
import Cards from './Cards'
import { Mainn,MainTop,Search,Select} from './styleMain'

function Main({mood,data} ) {
  const [searchVal,setSearchVal]=useState("");
  const [filteredArr,setFilteredArr]=useState([])
  const handleChange=(e)=>{
    setSearchVal(e.target.value)
    console.log(data.filter((item)=>console.log(item.name.common)));
  }
  return (
    <Mainn>
        <MainTop>
            <Search>
            <button>🔍</button><input onChange={handleChange} type="text" placeholder='Search for a country...'  />
            </Search>

            <Select name="" id="">
                <option value="">Filter by Region</option>
                <option value="">Africa</option>
                <option value="">America</option>
                <option value="">Asia</option>
                <option value="">Europa</option>
                <option value="">Oceiana</option>
            </Select>
        </MainTop>

        <Cards mood={mood} data={data}/>
    </Mainn>
  )
}

export default Main