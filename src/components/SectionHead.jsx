import React from 'react'

export default function Section_head({icon,title,className}) {
  return (
    <div className={`section_head ${className}`}>
        <span>{icon}</span>
    <h1>{title}</h1>
 </div>
  )
}
