import React from 'react'

export default function Section_head({icon,tittle,className}) {
  return (
    <div className={`section_head ${className}`}>
        <span>{icon}</span>
    <h2>{tittle}</h2>
 </div>
  )
}
