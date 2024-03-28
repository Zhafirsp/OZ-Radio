import React, { Component, useEffect, useState, useMemo } from "react";
import Container from "react-bootstrap/Container";
import { useParams, useNavigate } from "react-router-dom";
// import {
//   getPengumumanByIdApi,
//   putPengumumanApi,
// } from "../../../api/pengumuman/pengumumanApi";

const EditNews = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({});

  const [loading, setLoading] = useState(false);
  const [judul, setJudul] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [img_url, setImg_url] = useState("");
  const [file, setFile] = useState();
  const [status, setStatus] = useState(false);

  const getPengumumanById = async () => {
    // try {
    //   const result = await getPengumumanByIdApi(id);
    //   if (result?.status === 200) {
    //     setData(result?.data?.data);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    if (data?.judul !== judul) formData.append("judul", judul);
    if (file) formData.append("dokumen", file);
    formData.append("is_publish", status);

    setLoading(true);

    // try {
    //   const result = await putPengumumanApi(id, formData);
    //   if (result?.status === 200) {
    //     setLoading(false);
    //     navigate("/pengumuman");
    //   }
    // } catch (error) {
    //   setLoading(false);
    //   console.log(error);
    // }
  };

  useEffect(() => {
    getPengumumanById();
  }, []);

  useEffect(() => {
    if (id) {
      setJudul(data?.judul);
      setStatus(data?.is_publish);
    }
  }, [id, data]);

  return (
    <>
      <section id="editNews" className="editNews my-5 py-5">
        <Container fluid>
          <div className="title-holder">
            <h4 className="fw-bold text-center">Edit News</h4>
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
              <div className="mb-3">
                <label className="form-label input" htmlFor="status">
                  Status
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value={true}>Active</option>
                  <option value={false}>Not Active</option>
                </select>
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

export default EditNews;