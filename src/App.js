import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import MoviesList from './components/MoviesList';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import axios from 'axios';

import MovieDetails from './components/MovieDetails';


function App() {
  // to save movies details
  const [movies, setMovies] = useState([])

  // to solve pages number
  const [pageCount, setPageCount] = useState(0)
  
  // get All Movies by axios
  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=389e393ab519dd49fdb3e2f9e77541db&language=ar"
    )
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)
  }


  // get current page
  const getPage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=389e393ab519dd49fdb3e2f9e77541db&language=ar&page=${page}`
    )
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)

  }

  useEffect(() => {
    getAllMovies()
  }, [])

  // to search in api
  // https://api.themoviedb.org/3/search/movie?api_key=389e393ab519dd49fdb3e2f9e77541db&query=%D8%A7%D8%AD%D9%85%D8%AF&language=ar
  const search =  async(word)=>{
    if(word === ""){
      getAllMovies()
    }else{
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=389e393ab519dd49fdb3e2f9e77541db&query=${word}&language=ar`)
    
      setMovies(res.data.results)
      setPageCount(res.data.total_pages)

    }
  }


  return (
    <div className='font color-body'>
      
      <NavBar search={search}/>

      <Container>

        <BrowserRouter>
          <Routes>
          
            <Route path="/" element={<MoviesList movies={movies} getPage={getPage} pageCount={pageCount} />}/>
            <Route path="/movie/:id" element={<MovieDetails />} />
            
          </Routes>
        </BrowserRouter>
      
      </Container>
    </div>
  );
}

export default App;


// 13:22 / 20:23