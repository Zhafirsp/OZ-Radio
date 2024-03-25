import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Row, Col,  } from "react-bootstrap"


// Objek untuk menyimpan warna yang dihasilkan untuk setiap kategori
const categoryColors = {};


const Card = ({ item: { id, cover, category, title, authorName, time, desc } }) => {

  // const partialDesc = desc.substring(0,100)  // Mengambil 100 karakter pertama dari deskripsi
  const partialDesc = desc.split('.').slice(0, 5).join('.') + '.';

  // Fungsi untuk menghasilkan warna secara acak
  const getRandomColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }

   // Fungsi untuk mendapatkan warna kategori
   const getCategoryColor = (category) => {
    // Jika warna untuk kategori sudah ada, kembalikan warna yang sudah ada
    if (categoryColors[category]) {
      return categoryColors[category];
    }
    // Jika warna untuk kategori belum ada, hasilkan warna baru, simpan, dan kembalikan
    const newColor = getRandomColor();
    categoryColors[category] = newColor;
    return newColor;
  }
  
  // Mendapatkan warna untuk kategori
  const categoryColor = getCategoryColor(category);

  return (
    <>
              {/* <Row className="g-5">
                <div className="card-news d-flex">
                  <Col lg={3} sm={12} className="SquareImage">
                    <img src={cover} alt="" height={"auto"} width={500}/>
                  </Col>
                  <Col lg={6} sm={12} className="news-desc">
                    <div className="text-news">
                    <Link className="category rounded-5 text-white py-1 px-4" style={{ backgroundColor: categoryColor }}>{category}</Link>
                    <Link to={`/SinglePage/${id}`}>
                        <h3 className="mt-3">{title}</h3>
                    </Link>
                    <p>{partialDesc}</p>
                    <Link to={`/SinglePage/${id}`}>
                      <p className="border-top border-3 border-black fw-normal">READ MORE</p>
                    </Link>
                    </div>
                  </Col>
                  </div>
              </Row> */}

          {/* <div className=""> */}
            <Row className="g-5 my-1">
              <Col lg={4} sm={12} className="col-10">
                <img src={cover} className="d-block mx-lg-auto img-fluid ms-4" alt="" width="500" height="auto" loading="lazy"/>
              </Col>
            <Col lg={6} md={12} sm={12}>
            <div className="text-news">
                    <Link className="category rounded-5 text-white py-1 px-4" style={{ backgroundColor: categoryColor }}>{category}</Link>
                    <Link to={`/SinglePage/${id}`}>
                        <h3 className="mt-3">{title}</h3>
                    </Link>
                    <p>{partialDesc}</p>
                    <Link to={`/SinglePage/${id}`}>
                      <p className="border-top border-3 border-black fw-normal">READ MORE</p>
                    </Link>
                    </div>
              </Col>
            </Row>
          {/* </div> */}
    </>
  )
}

export default Card
