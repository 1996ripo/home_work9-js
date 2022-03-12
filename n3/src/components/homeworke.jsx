import { useState, useEffect } from 'react';

function Homeworken3() {
    const [selectedValue, setSelectedValue] = useState('');
    const [result, setResult] = useState([]);
    const [numFound, setNumFound] = useState('1');
    const [list, setList] = useState(``);
    let [pages, setPages] = useState(0);
    const [onpage, setOnpage] = useState(1);
    let key = 0;

    useEffect(() => {
        const url = `http://openlibrary.org/search.json?q=${selectedValue}`;
        fetch(url).then(res => res.json())
            .then(res => {
                setResult(res.docs);
                setNumFound(res.numFound);
                setPages(Math.ceil(res.numFound / 100));
            });
    }, [selectedValue]);

    useEffect(() => {
        const url = `http://openlibrary.org/search.json?q=${selectedValue}&page=${onpage}`;
        fetch(url).then(res => res.json())
            .then(res => {
                setResult(res.docs);
            });
    }, [onpage]);

    const listItems = (result) => {
        setList(result.map((elem) => {
            return <li key={key++}>
                <p> Title - {elem.title} <br /> First Publish Year - {elem.first_publish_year}</p>
                <p>Author Name - {elem.author_name}</p>
                <p>Subject - {elem.subject}</p>
            </li>
        }))
    };


    return (
        <div>
            
            <form onClick={(e) => e.preventDefault()}>
                <input type="search" id="book-search" name="s" placeholder="The book name"
                    onChange={(e) => {
                        let selection = e.target.value.split(' ').join('+');
                        setSelectedValue(selection);

                    }} />
                <input type="submit" id="submit" name="submit" value="Search"
                    onClick={(e) => {
                        listItems(result);
                    }}
                />
            </form>
            <div className='p-links' >{new Array(pages).fill('').map((e, i) => <a href='#' id={i + 1} onClick={(e) => { setOnpage(e.target.id) }} key={i + 1}>{i + 1}</a>)}</div>

            <ul>
                {list}
            </ul>
            <div className='p-links' >{new Array(pages).fill('').map((e, i) => <a href='#' id={i + 1} onClick={(e) => { setOnpage(e.target.id) }} key={i + 1}>{i + 1}</a>)}</div>
        </div >


    )
}

export default Homeworken3;

