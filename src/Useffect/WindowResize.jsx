import React, { useEffect, useState } from 'react'

const WindowResize = () => {
  
  const [width,SetWidth] = useState(window.innerWidth)
  const [height,SetHeight] = useState(window.innerHeight)
 useEffect(()=>{
        window.addEventListener("resize",function(){
        SetWidth(window.innerWidth)
        SetHeight(window.innerHeight)
      })
 },[])
  return (
    <div>
      <h3>Size : {width} {height}</h3>
    </div>
  )
}

export default WindowResize
