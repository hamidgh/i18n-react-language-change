import React, {useEffect, useState} from 'react';
import restClient from "../util/restClient";

const HomePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    restClient('https://www.anapioficeandfire.com/api/books',
      {headers: {'Content-Type': 'application/json'}, method: 'GET'})
      .then((result: any) => setBooks(result));
  }, []);

  return (
    <div>
      <ul>
        {books.map((book: any) => <li>{book.name}</li>)}
      </ul>
    </div>
  );
}

export default HomePage;

