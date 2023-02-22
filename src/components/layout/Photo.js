import React, { useState, useEffect } from 'react'

const Photo = () => {

    const [photos, setPhotos] = useState([])
    const [photo, setPhoto] = useState([])
    const [loading, setLoading] = useState(true)
    const [effects, setEffects] = useState('none')
  
    useEffect(() => {
      fetch('https://enthusiastic-crab-windbreaker.cyclic.app/api/')
      .then(res => res.json())
      .then(data => {
        setPhotos(data)
        const num = (Math.floor(Math.random()*data.length))
        setPhoto(data[num])
        setLoading(false)
      })
    }, [])
  
    function refreshPage() {
        setLoading(true)
        window.location.reload(false);
    }

  return (
    <section className="py-5 flex flex-wrap items-center">
        {loading === true ? <p className="w-full text-4xl text-center">Loading..</p> : <img src={photo.image} alt = {photo.caption} className="rounded-lg shadow-lg w-full" style = {{ width: '100%', height: '50vh', objectFit: 'cover', filter: effects}}></img>}
        <div className="btn btn-rounded bg-info border-transparent text-neutral my-5 w-fill m-auto" onClick={refreshPage}>Generate!</div>
        <section className="py-10 my-5 bg-neutral rounded-lg shadow-lg w-full">
        <ul className="flex justify-around flex-wrap sm:gap-2">
            <li className="btn bg-info text-neutral border-transparent btn-rounded" onClick={() => setEffects('saturate(150%)')}>Saturate</li>
            <li className="btn bg-info text-neutral border-transparent btn-rounded" onClick={() => setEffects('saturate(50%)')}>Desaturate</li>
            <li className="btn bg-info text-neutral border-transparent btn-rounded" onClick={() => setEffects('saturate(0%)')}>Monochrome</li>
            <li className="btn bg-info text-neutral border-transparent btn-rounded" onClick={() => setEffects('saturate(100%)')}>Revert</li>
            <li className="btn bg-info text-neutral border-transparent btn-rounded">{photo.number}</li>
        </ul>
    </section>
    </section>
  )
}

export default Photo