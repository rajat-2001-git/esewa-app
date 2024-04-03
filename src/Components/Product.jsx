import React from 'react'

const Product = ({ name, imageUrl, price, handleBuy}) => {
  return (
    <div className="flex flex-col justify-center items-center">
        <img src={imageUrl} alt="product" width={200} height={200}/>
        <h4>{name}</h4>
        <p className="font-bold font-mono">Rs.{price}</p>
        <button className="bg-green-400 p-2 rounded-lg text-white font-bold" onClick={handleBuy}>BUY NOW</button>
      </div>
  )
}

export default Product