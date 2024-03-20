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
     <section className="head">
        <div className="container flexSB paddingTB my-5 d-flex justify-content-between">
          <div className="logo">
            <img src="../images/headerb.png" alt="" />
          </div>
          <div className="ad">
            <img src="../images/headerb.png" alt="" />
          </div>
        </div>
      </section>

      <section className="single-page-news">
        <div className="container-fluid">
          <div className="row row-pages">
            <h1>Catch Up On The News</h1>
            <div className="col-sm-10 d-flex">
              <div className="col-sm-3">
                <img
                  className="SquareImage"
                  src="../images/popular/pop1.jpg"
                  alt=""
                />
                <img
                  className="SquareImage"
                  src="../images/popular/pop2.jpg"
                  alt=""
                />
                <img
                  className="SquareImage"
                  src="../images/popular/pop4.jpg"
                  alt=""
                />
              </div>
              <div className="col-sm-7">
                <button type="Roundedbutton" className="btn btn-danger">
                  Lorem ipsum dolor sit.
                </button>
                <div className="text-news">
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Autem praesentium cumque tempore necessitatibus corrupti
                    ipsam doloremque temporibus dicta pariatur fugit!
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    nulla, veritatis, necessitatibus odio nesciunt quidem
                    doloribus laudantium repudiandae magnam, dolorem
                    reprehenderit fuga voluptates repellendus beatae magni
                    fugiat culpa suscipit eveniet sunt corrupti similique
                    deleniti molestiae voluptas. Officia itaque dolorum
                    dignissimos? Quisquam voluptatibus hic totam consectetur
                    minus provident, neque enim molestias.
                  </p>
                  <hr />
                  <a href="/">READ MORE</a>
                </div>
                <button type="Roundedbutton" className="btn btn-warning">
                  Lorem ipsum dolor sit.
                </button>
                <div className="text-news">
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Autem praesentium cumque tempore necessitatibus corrupti
                    ipsam doloremque temporibus dicta pariatur fugit!
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    nulla, veritatis, necessitatibus odio nesciunt quidem
                    doloribus laudantium repudiandae magnam, dolorem
                    reprehenderit fuga voluptates repellendus beatae magni
                    fugiat culpa suscipit eveniet sunt corrupti similique
                    deleniti molestiae voluptas. Officia itaque dolorum
                    dignissimos? Quisquam voluptatibus hic totam consectetur
                    minus provident, neque enim molestias.
                  </p>
                  <hr />
                  <a href="/">READ MORE</a>
                </div>
                <button type="Roundedbutton" className="btn btn-info">
                  Lorem ipsum dolor sit.
                </button>
                <div className="text-news">
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Autem praesentium cumque tempore necessitatibus corrupti
                    ipsam doloremque temporibus dicta pariatur fugit!
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    nulla, veritatis, necessitatibus odio nesciunt quidem
                    doloribus laudantium repudiandae magnam, dolorem
                    reprehenderit fuga voluptates repellendus beatae magni
                    fugiat culpa suscipit eveniet sunt corrupti similique
                    deleniti molestiae voluptas. Officia itaque dolorum
                    dignissimos? Quisquam voluptatibus hic totam consectetur
                    minus provident, neque enim molestias.
                  </p>
                  <hr />
                  <a href="/">READ MORE</a>
                </div>
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
            </div>

            <div className="col-sm-2">
              <h2>List Category</h2>
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
          </div>
        </div>
      </section>
    </>

    

  );
};

export default News;
