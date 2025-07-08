import React, { useState } from 'react'
import { NavLink } from 'react-router'
import Header from '../components/Header'
import Container from '../components/Container'
import SideBar from '../components/SideBar'

type Props = {}

export default function HomePage({}: Props) {
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  return (
   <div className=' flex '>
    <SideBar onCategoryChange={setSelectedCategory} />
    <Container categoryId={selectedCategory}/>
   </div>
    
  )
}