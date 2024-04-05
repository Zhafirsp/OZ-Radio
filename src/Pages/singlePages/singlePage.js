import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import "./singlePage.css"
import SinglePageSlider from "./slider/singlePageSlider"
import { Col, Container, Row } from "react-bootstrap"
import { FaEnvelope, FaFacebook, FaPinterest, FaQuoteLeft, FaTwitter } from "react-icons/fa"
import NotFoundPage from "../NotFoundPage"
import axios from "axios"
import ads_img2 from '../../Assets/Img/headera.png'

const SinglePage = () => {
  const { newsId } = useParams(); // Ambil ID post dari URL
  const [post, setPost] = useState(null); // State untuk menyimpan data post
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Panggil API untuk mendapatkan data penulis dan waktu
    const fetchData = async () => {
      try {
        // const response = await axios.get(`${process.env.NEWS_API_HOST}`);
        const response = await axios.get(`https://adminoz.santuy.info/api/posts/`);
        setPosts(response.data.posts.data );
      } catch (error) {
        console.error("Error fetching news data:", error);
        console.log("Response data:", error.response);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Panggil API untuk mendapatkan data penulis dan waktu
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://adminoz.santuy.info/api/posts/${newsId}`);
        // const postData = response.data; // Data post dari response
        setPost(response.data.post); // Simpan data post ke dalam state
      } catch (error) {
        console.error("Error fetching author, category and time data:", error);
      }
    };

    fetchData();
  }, [newsId]);

  if (!post) {
    return <div>Loading...</div>; // Tampilkan pesan loading jika data post belum dimuat
  }

      // Fungsi untuk mengubah format tanggal
      const formatDate = (dateString) => {
        const options = { year: "numeric", month: "short", day: "numeric" };
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", options);
      }
    
      // Mengubah format tanggal updated_at
      const formattedUpdatedAt = formatDate(post.updated_at);

      
      const getImageUrl = (imageUrl) => {
        if (!imageUrl) return ""; // Tambahkan pengecekan kondisi agar tidak memanggil replace pada nilai null
        
        const baseUrl = 'https://adminoz.santuy.info/';
        // Cek apakah URL mengandung 'public', jika iya, ganti dengan 'storage', jika tidak, tambahkan base URL
        if (imageUrl.includes('public')) {
          return baseUrl + imageUrl.replace('public', 'storage');
        } else {
          return baseUrl + imageUrl;
        }
      };

  return (
    <>
      {post ? (
        
        <Container fluid>
          <SinglePageSlider />
          <div className='my-2'>
            <section className='mainContent details'>
              <h1 className='title'>{post.title}</h1>
              <div className='author'>
                <span></span>
                {/* <img src={author.authorImg} alt='' /> */}
                <p>author: {post.author.name} on</p>
                <label>{formattedUpdatedAt}</label>
              </div>
            <Row className="">
              <Col sm={10}>
              {post.image ? (
                  // Jika post.image tersedia, tampilkan gambar dari getImageUrl
                  <img src={getImageUrl(post.image)} className="img-fluid" alt="" width="1200" height="auto" loading="lazy" />
                ) : (
                  // Jika post.image tidak tersedia, tampilkan gambar default
                  <img src={`https://source.unsplash.com/featured/?${post.category.name}`} className="img-fluid" alt="" width="fit-content" height="auto" loading="lazy"/>
                )}

              <div className='desctop mb-5'  dangerouslySetInnerHTML={{ __html: post.body }}/>
              </Col>
              <Col> 
                  <h2 className="display-6 fw-bolder">List Category</h2>
                  {/* Mapping categories from posts */}
                  {posts.length > 0 && Array.from(new Set(posts.map((post) => post.category.name))).map((categoryName, index) => (
                    <Link key={index} to={`/category/${categoryName}`}>
                      <h4 className="">{categoryName}</h4>
                    </Link>
                  ))}
                  <img src={ads_img2} alt="" className="mt-3"/>
              </Col>
            </Row>
            </section>
          </div>
        </Container>
      ) : (
        <Container fluid className="my-5 py-5">
          <NotFoundPage/>
       </Container>
      )}
    </>
  )
}

export default SinglePage;
