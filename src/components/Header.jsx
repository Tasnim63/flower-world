import React from 'react'

export default function Header({title,image,children}) {
  return (
   <header className='header'>
<div className="header_container">
    <div className="header-container_bg">
        <img src="http://zwin.io/html/gazania/assets/img/others/1.jpg" alt="Header Banground Image" />
    </div>
    <div className="header_content">
        <h2>{title}</h2>
        <p>{children}</p>
    </div>
</div>
   </header>
  )
}
