import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import RegisterPage from './RegisterPage'
import LoginPage from '../BT3/LoginPage'

type Props = {}

export default function BT2({}: Props) {
  return (

<Routes>
  <Route path="/register" element={<RegisterPage />} />
  <Route path="/login" element={<LoginPage />} />
</Routes>

  )
}