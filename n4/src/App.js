import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [showResponsiveView, setShowResponsiveView] = useState(true);
  const [film, setFilm] = useState([]);
  let key = 0;
  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe").then(res => res.json())
      .then(film => setFilm(film));
  }, []);
  return (

    <div>
      <p> <span>Title: </span> {film.title}</p>
      <p> <span>Description: </span> {film.description}</p>
      <p> <span>Director: </span>{film.director}</p>
      <p> <span>Producer: </span> {film.producer}</p>
      <p> <span>Release Date: </span> {film.release_date}</p>

    </div>
    

  );
}

export default App;
