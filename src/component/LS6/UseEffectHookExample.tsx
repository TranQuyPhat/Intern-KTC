import React, { useEffect, useState } from 'react'

type Props = {}

export default function UseEffectHookExample({}: Props) {
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setUser(data)
        })
    })
      const [users,setUser]= useState([])
  return (
    <div>
        <ul>{users.map((user)=>(
            <li><p>{user.title}</p></li>
        ))}</ul>
        
    </div>
  )
}
// function UserDetail({userId}:{userID:number}){
//     const 
//     useEffect(()=>{
//         fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
//     },[])
// }