import React, { useState, useEffect } from 'react'
//https://nature-photo-api.onrender.com/

const Photo = () => {

    const [photos, setPhotos] = useState([])
    const [photo, setPhoto] = useState([])
  
    useEffect(() => {
      fetch('https://enthusiastic-crab-windbreaker.cyclic.app/api/')
      .then(res => res.json())
      .then(data => {
        setPhotos(data)
        const num = (Math.floor(Math.random()*data.length))
        setPhoto(data[num])
      })
    }, [])
  

  return (
    <section className="">
        <img src={photo.image} alt = {photo.caption} style = {{ width: '100%', height: '50vh', objectFit: 'cover' }}></img>
    </section>
  )
}

export default Photo