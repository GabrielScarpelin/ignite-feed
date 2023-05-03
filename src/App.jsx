import { useState } from 'react'
import backgroundUser from './assets/background-user.png'
import userPhoto from './assets/user-foto.png'
import './App.css'
import Header from './Components/Header/Header'
import SideBar from './Components/ProfileCard/ProfileCard'
import Post from './Components/Post/Post'
function App() {

  return (
    <>
      <Header />
      <div className="application">
        <SideBar />
        <div className="posts">
          <Post />
          <Post />
        </div>
      </div>
    </>
  )
}

export default App
