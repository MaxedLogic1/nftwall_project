import React from 'react'
import Header from './components/header/Header'

import Footer from './components/footer/Footer'
import { Routes, Route } from 'react-router-dom';
import Profile from './components/pages/profile/Profile'
import Main from './components/pages/landing/Main';
function App() {

  return (
    <> 

      <Header/>
      <main>
       
       <Routes>
         <Route path="/" element={<Main />} />
         <Route path="/profile" element={<Profile />} />
       </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
