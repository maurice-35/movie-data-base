import React, { useEffect } from 'react'


const Home = () => {
  useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/movies') // * <-- replace with your endpoint
      const data = await res.json()
      console.log(data)
    }
    getData()
  })

  return <h1>Home page lives here!</h1>
}


export default Home