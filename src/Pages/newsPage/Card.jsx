import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Row, Col,  } from "react-bootstrap"
import axios from "axios";

// Objek untuk menyimpan warna yang dihasilkan untuk setiap kategori
const categoryColors = {};


const Card = ({ post }) => {
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [created_at, setCreatedAt] = useState("");
  const [updated_at, setUpdated_at] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    // Panggil API untuk mendapatkan data penulis dan waktu
    const fetchData = async () => {
      try {
        // const response = await axios.get(`${process.env.NEWS_API_HOST}${id}`);
        const response = await axios.get(`https://adminoz.santuy.info/api/posts/${post.id}`);
        const postData = response.data; // Data post dari response
        setAuthor(postData.author);
        setCategory(postData.category);
        setTitle(postData.title);
        setExcerpt(postData.excerpt);
        setUpdated_at(postData.updated_at);
        setImage(postData.image);
      } catch (error) {
        console.error("Error fetching author, category and time data:", error);
      }
    };

    fetchData();
  }, [post.id]);

  // const partialDesc = desc.substring(0,100)  // Mengambil 100 karakter pertama dari deskripsi
  // const partialDesc = desc.split('.').slice(0, 5).join('.') + '.';

  // Fungsi untuk menghasilkan warna secara acak
  const getRandomColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }

   // Fungsi untuk mendapatkan warna kategori
   const getCategoryColor = (category) => {
    // Jika warna untuk kategori sudah ada, kembalikan warna yang sudah ada
    if (categoryColors[post.category.id]) {
      return categoryColors[post.category.id];
    }
    // Jika warna untuk kategori belum ada, hasilkan warna baru, simpan, dan kembalikan
    const newColor = getRandomColor();
    categoryColors[post.category.id] = newColor;
    return newColor;
  }

  // Mendapatkan warna untuk kategori
  const categoryColor = getCategoryColor(category);

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
            <Row className="g-5 my-1">
              <Col lg={4} sm={12} className="col-10">
              {post.image ? (
                  // Jika post.image tersedia, tampilkan gambar dari getImageUrl
                  <img src={getImageUrl(post.image)} className="d-block mx-lg-auto img-fluid ms-4" alt="" loading="lazy" style={{ width:"500px", height:"400px" }} />
                ) : (
                  // Jika post.image tidak tersedia, tampilkan gambar default
                  <img src={`https://source.unsplash.com/featured/?${post.category.name}`} className="d-block mx-lg-auto img-fluid ms-4" alt="" loading="lazy" style={{ width:"500px", height:"400px" }} />
                )}
              </Col>
            <Col lg={6} md={12} sm={12}>
            <div className="text-news">
                    <Link className="category rounded-5 text-white py-1 px-4" style={{ backgroundColor: categoryColor }}>{post.category.name}</Link>
                    <Link to={`/news/${post.id}`}>
                        <h3 className="mt-3">{post.title}</h3>
                    </Link>
                    <Link to={`/news/${post.author.id}`}>
                        <h6>by {post.author.name}</h6>
                    </Link>
                        <lab>{formattedUpdatedAt}</lab>
                    <p>{post.excerpt}</p>
                    <Link to={`/news/${post.id}`}>
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
