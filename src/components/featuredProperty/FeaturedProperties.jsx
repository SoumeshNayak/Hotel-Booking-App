import React from 'react'
import './featuredProperty.css'
import UseFet from '../../hooks/UseFet'
const FeaturedProperties = () => {
  const {data,loading,error} = UseFet("http://localhost:8800/hotels?featured=true&mini=10&maxi=500")
  return (
    <div>
    <div className='fp'>
      {loading ? "loading...":<>
        {data.map(item=>(
          <div className="fpItem" key={item._id}>
          <img
            src={item.photoes[0]}
            alt=""
            className="fpImg"
          />
          <span className="fpName">{item.name}</span>
          <span className="fpCity">{item.city}</span>
          <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
          {item.rating && <div className="fpRating">
            <button>{item.rating}</button>
            <span>Excellent</span>
          </div>}
        </div>
        ))}
      </>}
    </div>
    </div>
  )
}

export default FeaturedProperties
