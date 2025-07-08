import React from 'react'
import { NavLink } from 'react-router'

type Props = {to:string, label:string}

export default function NavItem({to, label}: Props) {
  return (
    <NavLink to={to} className={({isActive})=>
    `px-4 py-2 text-2xl font-medium ${isActive ?"text-orange-500 bg-amber-50":"text-white"}`} >{label}</NavLink>
  )
}