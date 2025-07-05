import React, { useState } from 'react'

type Props = {}

export default function ButtonClickCounter({}: Props) {
     const [count, setCount] = useState(0);
     const handleClick = () => {
        setCount(count + 1);}
  return (
    <div>
        <button onClick={handleClick}>Click me!</button>

        <p >You clicked {count} times</p>
    </div>
  )
}