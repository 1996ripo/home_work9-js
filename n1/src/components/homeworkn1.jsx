import { useState, useEffect } from 'react';

function HomeworkN1 (){
    const [showResponsiveView, setShowResponsiveView] = useState(true);
    const [films, setFilms] = useState([]);
    let key = 0;
    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films").then(res => res.json())
            .then(films => setFilms(films));
    }, []);
    return (
    
        <ul className='d-flex'>
            {films.map(item => {
                return <li key={key++}><h3>{item.title}</h3> Release Date - <b>{item.release_date}</b>
                    <div>Director - <b>{item.director}</b></div>
                    <div><h4>Description</h4> <p>{item.description}</p></div>
                </li>
            })}
        </ul>
    
    );
}

export default HomeworkN1;
