import { useState } from 'react'
import UserContextProvider from './context/usercontextprovider'
import Login from './component/login'
import Profile from './component/profile'

function App() {

  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
