import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import Gallery from './components/Gallery';
import SearchForm from "./components/SearchForm"
import Nav from './components/Nav';
import NotFound from './components/NotFound';
import './index.css'
import apiKey from './config';

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('cats');
  const [loading, setLoading] = useState(false);
   

    const handleChangeQuery = (search) => {
      setQuery(search)
    }

 useEffect(() => {
  let activeFetch = true;

  setLoading(true)
  fetch (`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
  .then(res => {
    if (res.ok) {
       return res.json() 
    } else {
        console.log(res)
        console.log("Not successful!")
    }
   
})
  .then(res => {
    if (activeFetch) {
          setImages(res.photos.photo);
          setLoading(false);
        }
  })
  .catch(error => console.log("Error fetching data", error))
  return () => {
    activeFetch = false;
  };

  }, [query])

  return (
    <div className="container">
      <SearchForm changeQuery={handleChangeQuery}/>
      <Nav changeQuery={handleChangeQuery}/>

      <Routes>
        <Route path="/" element={< Navigate replace to="search/cats" />} />
        <Route path="search">
          <Route index element={null} />
          <Route path=":search" element={< Gallery loading={loading} images={images} changeQuery={handleChangeQuery} query={query}/>} />
        </Route>

        <Route path="/404" element={< NotFound title="404 Error" info="Page Not Found." />} />
        <Route path="*" element={< Navigate replace to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
