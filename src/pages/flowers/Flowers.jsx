import React from 'react'
import Header from '../../components/Header'
import './flowers.css';
import flowersbanner from '../../assets/images/flowersbanner.jpg'
import { flowers } from '../../data';
import Flower from '../../components/Flower';

export default function Flowers() {
  return (
   <>
   <Header title="Our Flowers" image={flowersbanner}>A flower is a stem of a plant that has one or more flowers on it and has been picked, usually with others, for example to give as a present or to put in a.the characteristic reproductive structure of angiosperms. As popularly used, the term “flower” especially applies when part or all of th</Header>
   <section className='flowers'>
<div className="container flowers_container">
{
  flowers.map(({id,name,image,price})=>{
 return <Flower key={id} name={name} image={image} price={price}/>
  })
}
</div>
   </section>
   </>
  )
}
