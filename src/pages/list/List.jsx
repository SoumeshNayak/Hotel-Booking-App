import React, { useState } from 'react'
import Navbar from '../../components/nevbar/Navbar'
import Hearder from '../../components/header/Hearder'
import './list.css'
import { useLocation } from 'react-router-dom'
import SearchItem from '../../components/searchItem/SearchItem'
const List = () => {
  const location =useLocation()
  const [destination,setDestination]=useState(location.state.destination)
  const [options,setOptions]=useState(location.state.options)
  
  return (
    <div>
      <Navbar/>
      <Hearder type="list"/>
      <div className='listContainer'>
        <div className="listWrapper">
          <div className="listSearch">
          <h1 className="lsTitle">Search</h1>
          <div className="lsItem">
            <label>Destination</label>
            <input placeholder={destination} type="text" />
          </div>
          <div className="lsItem">
            <label>Check-in Date</label>
            <span>10/22/2024 to 10/31/2024</span>
          </div>
          <div className="lsItem">
            <label>Options</label>
            <div className="lsOptions">
            <div className="lsOptionItem">
                <span className="lsOptionText">
                    Min price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
            </div>
            <div className="lsOptionItem">
                <span className="lsOptionText">
                    Max price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
            </div>
            <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
            </div>
          </div>
          <button>Search</button>
          </div>
          <div className="listResult"> 
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
