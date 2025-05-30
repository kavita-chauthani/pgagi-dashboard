import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import "../styles/NewsStyles.css";
import axios from "axios";

const News = () => {
  const [search, setSearch] = useState("India");
  const [news, setNews] = useState(null);

  const API_KEY = "a9e0d4785727455ea7d3cf151d849fed";
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
      );
      console.log(response.data.articles);
      setNews(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  const userInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  return (
    <Layout>
      <nav>
        <div>
          <h1>Trendy News</h1>
        </div>
        <ul>
          <a>All news</a>
          <a>Trending</a>
        </ul>
        <div className="search">
          <input
            type="text"
            placeholder="SearchNews"
            value={search}
            onChange={handleInput}
          />
          <button onClick={getData}>Search</button>
        </div>
      </nav>
      <div className="head">
        <p>Stay updated with Trendy news</p>
      </div>
      <div className="category">
        <button onClick={userInput} value="technology">
          Technology
        </button>
        <button onClick={userInput} value="sports">
          Sports
        </button>
        <button onClick={userInput} value="business">
          Business
        </button>
        <button onClick={userInput} value="health">
          Health
        </button>
        <button onClick={userInput} value="entertainment">
          Entertainment
        </button>
      </div>
      <div>{news ? <Card data={news} /> : null}</div>
    </Layout>
  );
};

export default News;
