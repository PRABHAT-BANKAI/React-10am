import React from 'react'

const ProductCard = ({data}) => {
  return (
    <div>
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      <img src={data.image} alt={data.name} />
      <p>${data.price}</p>
      <button>Add to Cart</button>
    </div>
  )
}

export default ProductCard