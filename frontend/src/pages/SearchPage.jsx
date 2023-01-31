import React, { useEffect, useState } from 'react'
import Footer from '../layout/footer/Footer'
import Header from '../layout/header/Header'
import Filters from '../components/filters/index.jsx'
import axios from 'axios'

const SearchPage = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get(
              `http://localhost:8000/api/home`
            );
            setData(response.data.data.hot_story);
            setError(null);
          } catch (err) {
            setError(err.message);
            setData(null);
          } finally {
            setLoading(false);
          }
        };
        getData();
      }, []);
      
    return (
        <>
            <Header />
            <Filters dataStory={data} />
            <Footer />
        </>
    )
}

export default SearchPage