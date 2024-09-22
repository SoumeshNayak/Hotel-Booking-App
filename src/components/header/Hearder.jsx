import React, { useState } from 'react'
import './header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' 
import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
  } from "@fortawesome/free-solid-svg-icons";
  import {useNavigate} from 'react-router-dom'
const Hearder = ({type}) => {
    const [destination,setDestination]=useState("")
    const [openOptions,setOpenOptions]=useState(false)
    const [options,setOptions]=useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const handleOption=(name,operation)=>{
        setOptions(prev=>{return{
            ...prev,
            [name]: operation=='i'?options[name]+1:options[name]-1
        }})
    }
    const navigate=useNavigate()
    const handleSearch=()=>{
        navigate('/hotels',{state:{destination,options}})
    }
  return (
    <div className='header'>
      <div className={ type === 'list' ?'headercontainer listMode':'headercontainer'}>
        <div className="headerList">
            <div className="headerListItem active">
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane} />
                <span>Flights</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />
                <span>Car rentals</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faBed} />
                <span>Attractions</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Airport taxis</span>
            </div>
        </div>
        {type !=="list" && <> <h1 className='headerTitle'> A lifetime of discounts? It's Genius.</h1>
        <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
        <button className="headerBtn">Sign in / Register</button>

        <div className="headerSearch">
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input type="text" placeholder='where are you going' className='headerSearchInput'
                onChange={e=>setDestination(e.target.value)} 
                />
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span className='headerSearchText'>date to date</span>
                
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span className='headerSearchText' onClick={()=>setOpenOptions(!openOptions)}>{`${options.adult} adults ${options.children} children ${options.room} room`}</span>

                {openOptions &&
                    <div className="options">
                    <div className="optionItem">
                        <span className='optionText'>Adult</span>
                        <div className="items">
                        <button disabled={options.adult<=1} className="optionCounterButton" onClick={()=>handleOption("adult","d")}>-</button>
                        <span className='optionCounterNumber'>{options.adult}</span>
                        <button className="optionCounterButton" onClick={()=>handleOption("adult","i")}>+</button>
                        </div>
                    </div>

                    <div className="optionItem">
                        <span className='optionText'>children</span>
                        <div className="items">
                        <button className="optionCounterButton"
                        onClick={()=>handleOption("children","d")} disabled={options.children<=0}>-</button>
                        <span className='optionCounterNumber'>{options.children}</span>
                        <button className="optionCounterButton"
                        onClick={()=>handleOption("children","i")}>+</button>
                        </div>
                    </div>

                    <div className="optionItem">
                        <span className='optionText'>Room</span>
                        <div className="items">
                        <button className="optionCounterButton"
                        onClick={()=>handleOption("room","d")} disabled={options.room<=1}>-</button>
                        <span className='optionCounterNumber'>{options.room}</span>
                        <button className="optionCounterButton"
                        onClick={()=>handleOption("room","i")}>+</button>
                        </div>
                    </div>
                </div>
                }
            </div>
            <div className="headerSearchItem">
                <button className='headerBtn' onClick={handleSearch}>Search</button>
            </div>
        </div></>}
      </div>
    </div>
  )
}

export default Hearder
