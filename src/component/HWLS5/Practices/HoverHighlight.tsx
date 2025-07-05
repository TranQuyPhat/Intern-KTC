import React from 'react'
import style from './css/style.module.css'
type Props = {}

export default function HoverHighlight({}: Props) {
    const [bgColor, setBgColor] = React.useState("red");
    const HoverMouseEnter = () => {
        setBgColor("yellow");
    }
    const HoverMouseLeave = () => {
        setBgColor("red");
    }
  return (
    <div className={style.maindiv}>
 <div style={{backgroundColor:bgColor, padding:"10px",border: "1px solid black", borderRadius:"5px"}} onMouseEnter={HoverMouseEnter} onMouseLeave={HoverMouseLeave}>Hover Me</div>
    </div>
   
  )
}