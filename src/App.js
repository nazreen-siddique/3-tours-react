import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading,setLoading]=useState(true)
  const [tour,setTour]=useState([])
const removeTour = (id) => {
  const newTours = tour.filter((tour) => tour.id !== id);
  setTour(newTours);
};

  const fetchTours = async()=>{
    try {
      const response  = await fetch(url);
      const tours = await response.json();
      // console.log(tours);
      setLoading(false)
      setTour(tours);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  

  useEffect(()=>{
fetchTours()
  },[])
  if(loading){
    return(<>
    <main><Loading></Loading></main>
    </>)
  }
  if(tour.length ===0){
    return(
    <main>
      <div className="title">
        <h2>no tours left</h2>
        <button className="btn" onClick={fetchTours}>
          refresh
        </button>
      </div>
      </main>)
  }
  return (<>
 <Tours tours={tour} removeTour = {removeTour}/>
  </>)
}

export default App
