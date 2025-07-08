import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'

type Props = {}

export default function DefaultLayout({}: Props) {
  return (
    <div>
      <Header/>
      <Outlet /> 
      <Footer/>
    </div>
  )
}