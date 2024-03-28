import React, { Component, useEffect, useState, useMemo } from "react";
import Container from "react-bootstrap/Container";
import { useParams, useNavigate } from "react-router-dom";
// import { postPengumumanApi } from "../../../api/pengumuman/pengumumanApi";

const AddNews = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [img_url, setImg_url] = useState("");
  const [file, setFile] = useState();

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("content", content);
    formData.append("author", author);
    formData.append("img_url", img_url);

    setLoading(true);

    // try {
    //   const result = await postPengumumanApi(formData);
    //   if (result?.status === 201) {
    //     setLoading(false);
    //     navigate("/pengumuman");
    //   }
    // } catch (error) {
    //   setLoading(false);
    //   console.log(error);
    // }
  };

  return (
    <>
      <section id="addNews" className="addNews my-5 py-5">
        <Container fluid>
          <div className="title-holder">
            <h4 className="fw-bold text-center">Add News</h4>
          </div>

          <div className="d-flex align-items-center flex-column">
            <div className="card p-4 mb-4" style={{ width: "50%" }}>
              <div className="mb-3">
                <label className="form-label input" htmlFor="name">
                  Title
                </label>
                <input
                  onChange={(e) => setTitle(e?.target.value)}
                  value={title}
                  type="text"
                  placeholder="Title"
                  className="form-control"
                  id="name"
                  name="name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label input" htmlFor="name">
                  Category
                </label>
                <input
                  onChange={(e) => setCategory(e?.target.value)}
                  value={category}
                  type="text"
                  placeholder="Category"
                  className="form-control"
                  id="name"
                  name="name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label input" htmlFor="name">
                  Content
                </label>
                <textarea 
                  onChange={(e) => setContent(e?.target.value)}
                  value={content}
                  type="text"
                  placeholder="Content"
                  className="form-control"
                  id="name"
                  name="name"
                  rows={5}
                />
              </div>
              <div className="mb-3">
                <label className="form-label input" htmlFor="name">
                  Author
                </label>
                <input
                  onChange={(e) => setAuthor(e?.target.value)}
                  value={author}
                  type="text"
                  placeholder="Author"
                  className="form-control"
                  id="name"
                  name="name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label input" htmlFor="dokumen">
                  File
                </label>
                <input
                  onChange={(e) => setFile(e.target.files[0])}
                  //   value={file}
                  type="file"
                  //   placeholder="Judul"
                  className="form-control"
                  id="dokumen"
                  name="dokumen"
                />
              </div>
            </div>
            <button onClick={handleSubmit} className="btn btn-success">
              {loading ? "Loading..." : "Save"}
            </button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AddNews;