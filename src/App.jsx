import { useState } from 'react'
import backgroundUser from './assets/background-user.png'
import userPhoto from './assets/user-foto.png'
import './App.css'
import Header from './Components/Header/Header'
import SideBar from './Components/ProfileCard/ProfileCard'
function App() {

  return (
    <>
      <Header />
      <div className="application">
        <SideBar />
        <div className="posts">
        
        </div>
      </div>
    </>
  )
}

export default App
