import "./loginpage.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";
import img from "../images/netflixbg.jpg";
import {DBURL_USERS} from '../constants';
function LoginPage({ setVisible }) {
    const Navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        let IsValid = true;
        let _errors = { ...errors };
        if (!loginDetails.email) {
            _errors.email = "please enter valid email address";
            IsValid = false;
        }
        if (!loginDetails.password) {
            _errors.password = "plese enter your password";
            IsValid = false;
        }
        let index = users.findIndex((user) => user.email === loginDetails.email && user.password === loginDetails.password);

        if (loginDetails.password && index === -1) {
            _errors.password = "user not found";
            IsValid = false;
        }

        if (IsValid) {
            localStorage.setItem("isLoggedIn", true);
            Navigate("/home");
        }
        setErrors(_errors);
    };

    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: "",
    });

    const [hidepassword, setHidePassword] = useState(false);
    const [users, setUsers] = useState([]);
    const onhandleChange = (e) => {
        setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const onHidePassword = () => {
        setHidePassword((pre) => !pre);
    };

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {
        axios
            .get(DBURL_USERS)
            .then((res) => {
                console.log(res.data);
                setUsers(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            className="bg"
            style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "100vh",
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
            }}
        >
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="login">
                    <label>Email</label>
                    <br />
                    <input type="email" name="email" placeholder="enter your email" value={loginDetails.email} onChange={onhandleChange}></input>
                    <span style={{ color: "red" }}>{errors.email}</span>
                </div>
                <div className="login">
                    <label>password</label>
                    <br />
                    <div className="set_icon">
                    <input type={hidepassword ? "text" : "password"} style={{ position: "relative" }} name="password" placeholder="enter your password" value={loginDetails.password} onChange={onhandleChange}></input>
                    <span style={{ color: "red" }}>{errors.password}</span>
                    {!hidepassword ? (
                        <AiFillEye
                            className="eye_icon"
                            style={{
                                position: "",
                                top: "39%",
                                right: "43%",
                                fontSize: "20px",
                                cursor: "pointer",
                                color: "white",
                            }}
                            onClick={onHidePassword}
                        />
                    ) : (
                        <AiFillEyeInvisible
                            className="eye_icon"
                            style={{
                                position: "absolute",
                                top: "39%",
                                right: "43%",
                                fontSize: "20px",
                                cursor: "pointer",
                                color: "white",
                            }}
                            onClick={onHidePassword}
                        />
                    )}
                    </div>
                </div>
                <button type="submit">Login</button>

                <h6>
                    New to Netflix? <a href="/">Sign up now.</a>
                </h6>
                <p>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot.
                    <a href="#" onClick={() => setIsOpen(true)}>
                        Learn more
                    </a>{" "}
                </p>
                {isOpen && (
                    <p>
                        The information collected by Google reCAPTCHA is subject to the Google{" "}
                        <a href="https://policies.google.com/privacy" target="blank">
                            Privacy Policy
                        </a>
                        and{" "}
                        <a href="https://policies.google.com/terms" target="blank">
                            Terms of Service
                        </a>
                        , and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).
                    </p>
                )}
            </form>
        </div>
    );
}
export default LoginPage;
