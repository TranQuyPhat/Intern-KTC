import React, { useEffect, useState } from 'react'
import UseEffectHookExample from './UseEffectHookExample';

type Props = {}

export default function Lession6({}: Props) {
    useEffect(()=>{
        console.log("hahahha");
        
    })
  
  return (
    <div>
       <UseEffectHookExample/>
    </div>
  )
}