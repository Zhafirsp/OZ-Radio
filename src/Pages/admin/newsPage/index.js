import Container from "react-bootstrap/Container";
import NavLink from "react-bootstrap/esm/NavLink";
import { PiPencilSimpleBold } from "react-icons/pi";
import { BiTrashAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { hero } from "../../../Data/dummyData";

// import {
//   getPengumumanApi,
//   getActivePengumumanApi,
//   deletePengumumanApi,
// } from "../../../api/pengumuman/pengumumanApi";
import { useAuth } from "../../../context/AuthContext";
import ModalConfirm from "../../../Components/ModalConfirm";
import { Button } from "react-bootstrap";

export default function ListNews() {
  // const { userData } = useAuth();
  const [listPengumuman, setListPengumuman] = useState(hero);

  const [selectedData, setSelectedData] = useState(null);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [openModalConfirm, setOpenModalConfirm] = useState(false);

  const getPengumuman = async () => {
    // try {
    //   let result;

    //   if (userData?.role === "Laboran") {
    //     result = await getPengumumanApi();
    //   } else {
    //     result = await getActivePengumumanApi();
    //   }

    //   if (result?.status === 200) {
    //     setListPengumuman(result?.data?.data);
    //   }
    // } catch (error) {
    //   console.log(error);
    //   setListPengumuman([]);
    // }
  };

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank");
    newWindow.opener = null;
  };

  const handleDelete = async () => {
    setLoadingDelete(true);
    // try {
    //   const result = await deletePengumumanApi(selectedData?.info_id);
    //   if (result?.status === 200) {
    //     setOpenModalConfirm(false);
    //     setLoadingDelete(false);
    //     getPengumuman();
    //   }
    // } catch (error) {
    //   console.log(error);
    //   setLoadingDelete(false);
    // }
  };

  useEffect(() => {
    getPengumuman();
  }, []);

  return (
    <>
      <ModalConfirm
        show={openModalConfirm}
        handleClose={() => setOpenModalConfirm(false)}
        title="Delete News"
        message="Are you sure want to delete this news?"
        loading={loadingDelete}
        handleSubmit={handleDelete}
      />
      <section id="teams" className="block teams-block">
        <Container fluid>
          <div className="title-holder text-center">
            <h3
              className="fs-3 fw-normal mt-5"
              style={{ letterSpacing: "7px" }}
            >
              News
            </h3>
            <h1 className="fs-1 fw-bold mt-3"><span style={{ color:"#F49C27" }}>OZ Media</span></h1>
            <hr />
          </div>
          <Link to={"/data-news/add-news"}>
              <Button
                variant="outline-success"
                // onClick={() => onLogin()}
                className="float-end mb-3"
                id="submit"
              >
                Add News
              </Button>
            </Link>
          <table
            className="table table-bordered text-center"
            style={{
              borderRadius: "10px",
            }}
          >
            <thead>
              <tr
                className="fs-5"
                style={{
                  backgroundColor: "#063554",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                <th scope="col">No</th>
                <th scope="col">Title</th>
                <th scope="col">Category</th>
                <th scope="col">Content</th>
                <th scope="col">Author</th>
                <th scope="col">Img_url</th>
                <th scope="col">Date</th>
                {/* <th scope="col">Link</th> */}
                {/* {userData?.role === "Laboran" ? ( */}
                  <>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </>
                {/* ) : null} */}
              </tr>
            </thead>
            <tbody>
              {listPengumuman.map((data, index) => {
                return (
                  <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data.title}</td>
                      <td>{data.category}</td>
                      <td>{data.desc.para1}</td>
                      <td>{data.authorName}</td>
                      <td>{data.cover}</td>
                      <td>{data.time}</td>
                      <td>{data.time}</td>
                      <td>
                              <Link
                                to={`/edit-news/${data?.info_id}`}
                                className="mx-2"
                                >
                                <Button className="btn-warning">
                                  <PiPencilSimpleBold />
                              </Button>
                              </Link>
                              <Button
                                onClick={() => {
                                  setOpenModalConfirm(true);
                                  setSelectedData(data);
                                }}
                                className="btn-danger text-dark"
                              >
                                <BiTrashAlt />
                              </Button>
                            </td>
                  </tr>
                )
              })} 
              {/* {listNews && listNews?.length > 0 ? (
                <>
                  {listNews?.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{data?.title || "-"}</td>
                        <td>{data?.category || "-"}</td>
                        <td>{data?.content || "-"}</td>
                        <td>{data?.author || "-"}</td>
                        <td>{data?.img_url || "-"}</td>
                        <td>
                          {data?.link ? ( 
                          <button
                            type="button"
                            className="btn btn-primary my-1"
                            onClick={() => openInNewTab(data?.img_url)}
                          >
                            Download Image
                          </button>) : ("-")}
                          </td>
                        <td>{data?.publish_date || "-"}</td>
                        {userData?.role === "Laboran" ? (
                          <>
                            <td>
                              {data?.is_publish ? "Active" : "Not Active"}
                            </td>
                            <td>
                              <Link
                                to={`/edit-news/${data?.info_id}`}
                                className="btn btn-warning mx-2 text-white"
                              >
                                <PiPencilSimpleBold />
                              </Link>
                              <button
                                onClick={() => {
                                  setOpenModalConfirm(true);
                                  setSelectedData(data);
                                }}
                                className="btn btn-danger"
                              >
                                <BiTrashAlt />
                              </button>
                            </td>
                          </>
                        ) : null}
                      </tr>
                    );
                  })}
                </>
              ) : (
                <>
                  <tr>
                    <td colSpan={userData?.role === "Laboran" ? 6 : 5}>
                      There's no data
                    </td>
                  </tr>
                </>
              )} */}
            </tbody>
          </table>

          {/* {userData?.role === "Laboran" && (
            <NavLink
              href="/add-news"
              className="btn btn-primary col-md-4 offset-md-8 mt-4"
              id="btn-user"
            >
              Add News
            </NavLink>
          )} */}
        </Container>
      </section>
    </>
  );
}