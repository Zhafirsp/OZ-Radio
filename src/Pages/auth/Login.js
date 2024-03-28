import { useRef, useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { ToastContainer, toast } from "react-toastify";
// import useAuth from '../../hooks/useAuth';
// import {API} from '../../api/axios';
import { Link, useNavigate, useLocation } from "react-router-dom";
import Image from "react-bootstrap/Image";
import img1 from "../../Assets/Img/Logo2.png";

import { useAuth } from "../../context/AuthContext";
import { Button } from "react-bootstrap";
// import { postLoginApi } from "../../api/auth/authApi";

export default function Login() {
  // const { setAuthTokens } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const userRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // const onLogin = async () => {
  //   setLoading(true);
  //   try {
  //     const result = await postLoginApi({ username, password });
  //     setAuthTokens(result.data.access_token);
  //     setLoading(false);
  //     navigate("/adminPage");
  //     console.log(result);
  //   } catch (err) {
  //     if (!err?.response) {
  //       toast("No Server Response", {
  //         type: "error",
  //       });
  //     } else if (err.response?.status === 400) {
  //       toast("Missing Username or Password", {
  //         type: "error",
  //       });
  //     } else if (err.response?.status === 401) {
  //       toast("Unauthorized", {
  //         type: "error",
  //       });
  //     } else {
  //       toast("Login Failed", {
  //         type: "error",
  //       });
  //     }
  //   }
  // };

  return (
    <>
      <ToastContainer />
      <div
        className="form-floating"
        style={{ marginTop: "200px", marginBottom: "100px" }}
      >
        <Container fluid>
          <Row
            className="rounded"
            style={{ padding: "50px", boxShadow: "3px 3px 3px 3px #EBEBEB" }}
          >
            <Col sm={6}>
              <h2 className="text-center fs-1 fw-semibold">LOGIN</h2>
              <form className="login-form">
                <div className="mb-3">
                  <label className="form-label input" htmlFor="username">
                    Username
                  </label>

                  <input
                    ref={userRef}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="username"
                    placeholder="username/email"
                    className="form-control"
                    id="username"
                    name="username"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label input" htmlFor="password">
                    Password
                  </label>

                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="********"
                    className="form-control"
                    id="password"
                    name="password"
                  />
                </div>

                <Button
                  variant="outline-dark"
                  // onClick={() => onLogin()}
                  className="col-12 mx-auto mt-4"
                  id="submit"
                >
                  {loading ? "Loading..." : "Login"}
                </Button>
                <p className="mt-4 text-center">
                Don't have an account?{" "}
                  <Link to="/register" className="fw-bold">Register Here!</Link>
                </p>
              </form>
            </Col>
            <Col sm={6}>
              <Image src={img1} width={400} className="rounded img-fluid mx-auto d-block" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}