import { Navigate, useNavigate } from "react-router-dom";
import "./registrationpage.css"
import axios from "axios";
import { useState } from "react";
import {AiFillEye} from "react-icons/ai"
import {AiFillEyeInvisible} from "react-icons/ai"
import img from "../images/netflixbg.jpg";
import { DBURL_USERS } from "../constants";

function RegistrationPage () {

    const Navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        let IsValid = true;
        let _errors = { ...errors};
        if (!registrationDetails.firstname) {
            _errors.firstname = "Enter Your First Name"
            IsValid = false;
        }
        if (!registrationDetails.lastname) {
            _errors.lastname = "Enter Your last Name"
            IsValid = false;
        }
        if (!registrationDetails.email) {
            _errors.email = "Enter Your Email"
            IsValid = false;
        }
        if (!registrationDetails.password) {
            _errors.password = "Enter Your Password"
            IsValid = false;
        }
        if (!registrationDetails.confirmpassword) {
            _errors.confirmpassword = "Enter Your Confirm Password"
            IsValid = false;
        }
        if (
            registrationDetails.confirmpassword &&
            registrationDetails.password !== registrationDetails.confirmpassword
        ) {
            _errors.confirmpassword = "Confirm Password Is Not Match";
            IsValid = false;
        }
        if (!registrationDetails.gender) {
            _errors.gender = "Enter Your Gender"
            IsValid = false;
        }
        if (IsValid) {
            axios
            .post(DBURL_USERS, registrationDetails)
            .then((res) => {
                console.log(res.data);
            })
    
            .catch((err)=>{
                console.log(err)
            })
            Navigate("/");
            }
            setErrors(_errors);
    };

       
        const [registrationDetails, setRegistrationDatils]=useState({
            firstname:"",
            lastname:"",
            email:"",
            password:"",
            confirmpassword:"",
            gender:"",
        });

        const [hidepassword, setHidePassword] = useState(false);
        const [hiddenConfirmPassword, setHiddenConfirmPassword] = useState(false);

        const onhandleChange = (e) => {
            setRegistrationDatils({
                ...registrationDetails, [e.target.name]: e.target.value,
            });
            setErrors({...errors, [e.target.name]: ""});
        };
        const onHideConfirmPassword = () => {
            setHiddenConfirmPassword((prev) => !prev);
        };

        const onHidePassword = () => {
            setHidePassword((pre) => !pre)
        }

        const [errors, setErrors] = useState({
            firstname: "",
            lastname:"",
            email:"",
            password:"",
            confirmpassword:"",
            gender:"",
        });
        return(
            <div className="bg1" style={{
                backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"100vh",
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
            }}>
            <form onSubmit={handleSubmit}>
             <h1>SignUp</h1>
                 <div className="login">
                     <label>First Name</label><br/>
                     <input type="name" name="firstname" placeholder="enter your first name" value={registrationDetails.firstname} onChange={onhandleChange}></input>
                     <span style={{color: "red"}}>{errors.firstname}</span>
                 </div>
                 <div className="login">
                     <label>Last Name</label><br/>
                     <input type="name" name="lastname" placeholder="enter your last name" value={registrationDetails.lastname} onChange={onhandleChange}></input>
                     <span style={{color: "red"}}>{errors.lastname}</span>
                 </div>
                 <div className="login">
                     <label>Email</label><br/>
                     <input type="name" name="email" placeholder="enter your Email" value={registrationDetails.email} onChange={onhandleChange}></input>
                     <span style={{color:"red"}}>{errors.email}</span>
                 </div>
                 <div className="login">
                     <label>Password</label><br/>
                     <div className="set_icon">
                        <input  type={hidepassword ? "text" : "password"} name="password" placeholder="enter your password" value={registrationDetails.password} onChange={onhandleChange}></input>
                        <span style={{color:"red"}}>{errors.password}</span>
                        {!hidepassword ? (
                                <AiFillEye 
                                className="eye_icon"
                                style={{
                                    position:"absolute",
                                    top:"55.5%",
                                    right:"37.5%",
                                    fontSize:"20px",
                                    cursor:"pointer",
                                }}
                                onClick={onHidePassword}
                                />
                            ) : (
                                <AiFillEyeInvisible className="eye_icon"
                                style={{
                                    position:"absolute",
                                    top:"55.5%",
                                    right:"37.5%",
                                    fontSize:"20px",
                                    cursor:"pointer",
                                }}
                                onClick={onHidePassword}
                                />
                            )}
                        </div>
                 </div>
                 <div className="login">
                     <label>Confirm Password</label><br/>
                     <div className="set_icon">
                        <input type={hiddenConfirmPassword ? "text": "password"} name="confirmpassword" placeholder="enter your confirm password"
                        value={registrationDetails.confirmpassword} onChange={onhandleChange}></input>
                        <span style={{color:"red"}}>{errors.confirmpassword}</span>
                        {!hiddenConfirmPassword ? (
                                <AiFillEye className="eye_icon"
                                style={{
                                    position:"absolute",
                                    top:"65.5%", 
                                    right:"37.5%",
                                    fontSize:"20px",
                                    cursor:"pointer",
                                }}
                                onClick={onHideConfirmPassword}
                                />
                            ) : (
                                <AiFillEyeInvisible className="eye_icon" 
                                style={{
                                    position:"absolute",
                                    top:"65.5%",
                                    right:"37.5%",
                                    fontSize:"20px",
                                    cursor:"pointer",
                                }}
                                onClick={onHideConfirmPassword}
                                />
                            )}
                        </div>
                 </div>
                 <div className="login">
                    <label>Gender</label>
                   <div className="lgn1">
                   <label><input type="radio" name="gender" value="male" onChange={onhandleChange}/>Male</label>
                    <label><input type="radio" name="gender" value="female" onChange={onhandleChange}/>Female</label>
                    <label><input type="radio" name="gender" value="other" onChange={onhandleChange}/>Other</label>
                    <span style={{color: "red"}}>{errors.gender}</span>
                   </div>
                 </div>
                 <button type="submit">SignUp</button>
                <p>Already Have An Account?<a href="/">login</a></p> 
                
            </form>
     </div>
        )
}

export default RegistrationPage;