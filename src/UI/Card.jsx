import React from 'react'

export default function Card({className ,children}) {
  return (
    <article  className={`card ${className}`}>
        {children}
    </article>
  )
}
