import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Nav from './components/layout/Nav'
import Footer from'./components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import { useState, useEffect } from 'react'

function App() {



  // useEffect(() => {
  //   const getPhotos = async () => {
  //     const photos = fetchPhotos()
  //     setPhotos(photos)
  //   }

  //   getPhotos()
  // }, [])

  
  // const fetchPhotos = async () => {
  //     const res = await fetch('https://enthusiastic-crab-windbreaker.cyclic.app/api/')
  //     const data = await res.json()
  //     console.log(data)
  //     return data
  // }


  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Nav></Nav>
        <main className ='container mx-auto px-3 pb-12'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/notfound' element={<NotFound/>}/>
            <Route path='/*' element={<NotFound/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
