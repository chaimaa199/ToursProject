import React from 'react'
import {useState,useEffect} from 'react'
import Tours from './component/Tours'
import Loading from './component/Loading'
import './index.css'
const url='https://course-api.com/react-tours-project'
const App = () => {
  const [tours,setTours]=useState([])
  const[loading,setLoading]=useState(true)
  const getTours=async()=>{
    setLoading(true)
    try {
      const res=await fetch(url)
      const tours=await res.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }
  const removeTour=(id)=>{
   const newTours=tours.filter((tour)=>tour.id!==id)
   setTours(newTours)
  }
  useEffect(()=>{
    getTours()

  },[])
  if (loading) {
    return <Loading></Loading>
  }
  if (tours.length===0) {
    return(
      <main>
      <div className='title'>
        <h2>no tours left</h2>
        <button className='btn-fetch' onClick={() => getTours()}>
          refresh
        </button>
      </div>
    </main>
    )
  }
  return (
    <main >
     <Tours tours={tours} removeTour={removeTour}></Tours>
     
    </main>
  )
}

export default App

