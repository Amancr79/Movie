import React,{useEffect, useState} from 'react';
import './App.css';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Nav,Form,FormControl,Button} from 'react-bootstrap';
const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=3065a689c3ea693126230f91ce9d4383";

const API_SEARCH="https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=3065a689c3ea693126230f91ce9d4383";

function App() {
  const [movies, setMovies]=useState([]);
  const [query,setQuery]=useState('');
  useEffect(()=>{
  fetch(API_URL)
  .then((res)=>res.json())
  .then(data=>{
    console.log(data);
    setMovies(data.results);
  })
  },[])

  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log('Search');
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=3065a689c3ea693126230f91ce9d4383&query=${query}`;

      const res=await fetch(url);
      const data=await res.json();
      setMovies(data.results);
    }
    catch(e){
        console.log(e);
    }
  }

  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }
  return (
    <>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/home">Cinema App</Navbar.Brand>
        <Navbar.Brand href="/home">Trending</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll">
        </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-3" style={{maxHeight:'100px'}} navbarScroll>

            </Nav>
            <Form className="d-flex" onSubmit={searchMovie}>
                <FormControl type="search"
                placeholder="Movie Search"
                className="me-2"
                arial-label="search"
                name=""
                value={query} onChange={changeHandler}></FormControl>
                <Button variant="secondary" type="submit">Search</Button>
            </Form>
          </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
    {movies.length>0?(
      <div className="container">
      <div className="grid">
      {movies.map((moviesReq)=><MovieBox key={moviesReq.id}{...moviesReq}/>)}
      </div>
    </div>
    ):(
        <h2>Sorry !! No Movie Found </h2>
    )
    }
    </div>
    </>
  );
}
export default App;
