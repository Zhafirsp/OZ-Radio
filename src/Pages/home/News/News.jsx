import React, { useState, useRef, useEffect } from "react";
import "./news.css";
import "../mainContent/Ppost/ppost.css"
import Card from "./Card";
import { hero, popular } from "../../../Data/dummyData";
import { Button, Row, Col } from "react-bootstrap";

const News = () => {
  const [items, setItems] = useState(hero);
  const [items2, setItems2] = useState(popular);
  const [visibleItems, setVisibleItems] = useState(4); // Jumlah item yang akan ditampilkan secara awal
  const newsRef = useRef(null); // Ref untuk elemen news

  const loadMore = () => {
    setVisibleItems((prevValue) => prevValue + 4); // Menambah 4 item setiap kali tombol "Load More" diklik
    if (newsRef.current) {
      newsRef.current.classList.add("newly-added");
    }
  };


  return (
    <>
      <section className="news">
        <div className="container my-5">
          {items.slice(0, visibleItems).map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </section>
        <div className="container my-5 loaded-item">
          <Row>
          <h1 className="display-5 fw-bold text-center">
              Popular News from <span style={{ color:"#F49C27" }} className="home-oz">OZ Radio </span>
            </h1>
            {/* {items2.slice(0, visibleItems).map((items2) => (
              <Col lg={6} className="news-load">
                <Card key={items2.id} item={items2} />
              </Col>
            ))} */}
          </Row>
        </div>
          {/* <div className="load-more text-center">
            <Button variant="outline-dark" className="" onClick={loadMore}>Load More</Button>
          </div> */}

<section className="news-new">
        <div className="row row-news">
          <div className="col-sm-10">
            <div className="row-text">
              <h2>Catch Up On The News</h2>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="row-text">
              <h2>FILTER BY CATEGORY</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="news-page">
        <div className="row row-news">
          <div className="col-sm-10">
            {items2.slice(0, visibleItems).map((items2) => (
              <Col lg={6} className="news-load">
                <Card key={items2.id} item={items2} />
              </Col>
            ))}
          </div>
          <div className="col-sm-2">
            <a href="/">
              <h4>Music</h4>
            </a>
            <a href="/">
              <h4>Film</h4>
            </a>
            <a href="/">
              <h4>Entertainment</h4>
            </a>
            <a href="/">
              <h4>Game</h4>
            </a>
            <a href="/">
              <h4>Cultural</h4>
            </a>
            <a href="/">
              <h4>Local Values</h4>
            </a>
            <a href="/">
              <h4>Sustainability</h4>
            </a>
            <a href="/">
              <h4>Environtment</h4>
            </a>
            <a href="/">
              <h4>News</h4>
            </a>
            <a href="/">
              <h4>Journalism</h4>
            </a>
            <a href="/">
              <h4>Fashion</h4>
            </a>
            <a href="/">
              <h4>Lifestyle</h4>
            </a>
            <a href="/">
              <h4>Educational</h4>
            </a>
            <a href="/">
              <h4>Travelling</h4>
            </a>
            <a href="/">
              <h4>Exploration</h4>
            </a>
            <a href="/">
              <h4>Technology</h4>
            </a>
            <a href="/">
              <h4>Food</h4>
            </a>
            <a href="/">
              <h4>Cooking</h4>
            </a>
            <a href="/">
              <h4>Advertising</h4>
            </a>
            <a href="/">
              <h4>Marketing</h4>
            </a>
            <a href="/">
              <h4>Sports</h4>
            </a>
            <a href="/">
              <h4>Health</h4>
            </a>
            <a href="/">
              <h4>Wellness</h4>
            </a>
          </div>
          <div className="load-more text-center">
            <Button variant="outline-dark" className="" onClick={loadMore}>
              Load More
            </Button>
          </div>
        </div>
      </section>
    </>

    

  );
};

export default News;
