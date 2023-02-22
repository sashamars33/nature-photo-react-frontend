import React from 'react'
import Photo from '../components/layout/Photo'

const Home = () => {
  return (
    <div className='h-screen lg:mx-40 xl:mx-80'>
        <h1 className='text-5xl font-bold'>Welcome, click below to generate a random photo.</h1>
        <Photo/>
    </div>
  )
}

export default Home