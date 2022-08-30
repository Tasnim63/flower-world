import React from 'react'
import Card from '../UI/Card'

export default function Flower({id,name,image,price}) {
  return (
   <Card className="flower">
     <div className="flower_img">
        <img src={image} alt={name} />
     </div>
     <h3>{name}</h3>
     <p>{price}</p>
      <button className='btn lg'>Add To Cart</button>
   </Card>
  )
}
