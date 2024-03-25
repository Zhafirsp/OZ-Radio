import React, { useState, useRef, useEffect } from "react";
import "./news.css";
// import "../mainContent/Ppost/ppost.css"
import Card from "./Card";
import { hero, popular } from "../../Data/dummyData";
import { Button, Row, Col } from "react-bootstrap";
import ads_img from '../../Assets/Img/headerb.png'
import ads_img2 from '../../Assets/Img/headera.png'
import { Link } from "react-router-dom";

const News = ({}) => {
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
     <section className="head-news">
        <div className="container my-5 d-flex justify-content-between">
          <div className="ads-topnews mx-auto">
            <img src={ads_img} width={1000} alt="" />
          </div>
        </div>
      </section>

      <section className="single-page-news">
        <div className="container-fluid">
          <Row className="row-news">
            <h1 className="display-4 fw-bolder">Catch Up On The News</h1>
            <Col sm={10} className="mt-5">
             {items2.slice(0, visibleItems).map((items2) => {
              return (
                <>
                  <Card key={items2.id} item={items2}/>
                  <br />
                </>
              )
             })}
              </Col>
              <Col> 
                <h2 className="display-6 fw-normal">List Category</h2>
                {Array.from(new Set(items2.map(items2 => items2.category))).map(category => (
                 <Link><h4 className="ms-1" key={category}>{category}</h4></Link>
                ))}
                <img src={ads_img2} alt="" className="mt-3"/>
              </Col>
          </Row>
          <div className="load-more text-center">
                  <Button
                    variant="outline-dark"
                    className=""
                    onClick={loadMore}
                  >
                    Load More
                  </Button>
                </div>
        </div>
      </section>
    </>

    

  );
};

export default News;
