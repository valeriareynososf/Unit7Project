import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Gallery from './components/Gallery';
import SearchForm from "./components/SearchForm"
import Nav from './components/Nav';
import './index.css'


function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // first

    // return () => {
    //   second
    // }
  }, [])


  return (
    <div className="container">
      <SearchForm />
      <Nav />

      <Routes>
        <Route path="/" element={null} />
        <Route path="search">
          <Route index element={null} />
          <Route path=":search" element={null} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
