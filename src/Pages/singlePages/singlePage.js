import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./singlePage.css"
import SinglePageSlider from "./slider/singlePageSlider"
import { Container } from "react-bootstrap"
import { FaEnvelope, FaFacebook, FaPinterest, FaQuoteLeft, FaTwitter } from "react-icons/fa"
import NotFoundPage from "../NotFoundPage"
import axios from "axios"

const SinglePage = () => {
  const { newsId } = useParams(); // Ambil ID post dari URL
  const [post, setPost] = useState(null); // State untuk menyimpan data post

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
          <div className='container'>
            <section className='mainContent details'>
              <h1 className='title'>{post.title}</h1>

              <div className='author'>
                <span></span>
                {/* <img src={author.authorImg} alt='' /> */}
                <p>author: {post.author.name} on</p>
                <label>{formattedUpdatedAt}</label>
              </div>

              <div className='social'>
                <div className='socBox'>
                  <FaFacebook className="fab fa-facebook-f" />
                  <span>SHARE</span>
                </div>
                <div className='socBox'>
                  <FaTwitter className="fab fa-twitter" />
                  <span>TWITTER</span>
                </div>
                <div className='socBox'>
                  <FaPinterest className="fab fa-pinterest" />
                  <span>PINTEREST</span>
                </div>
                <div className='socBox'>
                  <FaEnvelope className="fab fa-envelope" />
                  <span>EMAIL</span>
                </div>
              </div>

              {post.image ? (
                  // Jika post.image tersedia, tampilkan gambar dari getImageUrl
                  <img src={getImageUrl(post.image)} className="d-block mx-lg-auto img-fluid ms-4" alt="" width="fit-content" height="auto" loading="lazy" />
                ) : (
                  // Jika post.image tidak tersedia, tampilkan gambar default
                  <img src={`https://source.unsplash.com/featured/?${post.category.name}`} className="d-block mx-lg-auto img-fluid ms-4" alt="" width="fit-content" height="auto" loading="lazy"/>
                )}

              <div className='desctop'  dangerouslySetInnerHTML={{ __html: post.body }}/>
              {/* <p>{post.body}</p>
              </div> */}
              
              {/* {post.desc.map((val, index) => (
                <p key={index}>{val.para3}</p>
              ))} */}

              {/* <div className='descbot'>
                {post.details.map((data, index) => {
                  return (
                    <div key={index}>
                      <h1>{data.title}</h1>
                      <p>{data.para1}</p>
                    </div>
                  )
                })}
              </div> */}

              {/* <div className='quote'>
                <FaQuoteLeft className="fa fa-quote-left"/>
                {post.details.map((data, index) => (
                  <p key={index}>{data.quote}</p>
                ))}
              </div> */}

              {/* <div className='desctop'>
                {post.details.map((data, index) => {
                  return (
                    <div key={index}>
                      <p>{data.para2}</p>
                      <p>{data.para3}</p>
                    </div>
                  )
                })}
              </div> */}
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
