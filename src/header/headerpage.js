import React, { useState } from "react";
import "./headerpage.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import LoginPage from "../loginform/loginpage";
import { Accordion, AccordionTab } from "primereact/accordion";
import img from "../images/netflixbg.jpg";
import netflixlogo from "../images/netflixlogo.png";
import FooterPage from "../footer/footerpage";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";

function HeaderPage() {
  //  const {pathname} = useLocation();
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const onGetStarted = () => {
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regEmail.test(email)) {
      setError("Please enter valid email");
    } else {
      navigate("/registration");
    }
  };
  return (
    <>
      <div
      className="responsive_small"
        // className="imageBackground"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "80vh",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
        }}
      >
        <div className="header">
          <div className="nav">
            <a href="">
              <img src={netflixlogo} />
            </a>
          </div>
          <div className="navright">
            <Button
              label="Login"
              icon="pi pi-external-link"
              onClick={() => navigate("/login")}
            />
            {/* <Dialog  visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                <LoginPage setVisible = {setVisible}/>
            </Dialog> */}
          </div>
        </div>
        <div className="details">
          <h1>Unlimited movies, TV shows and more</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <input
                type="name"
                name="firstname"
                placeholder="Email Address"
                value={email}
                className={`email ${error ? "error" : "border"}`}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
              />
              <span style={{ textAlign: "left", color: "red" }}>{error}</span>
            </div>
            <button className="getStartBtn" onClick={onGetStarted}>
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="contain">
        <ScrollAnimation animateIn="animate__slideInLeft">
          <div className="leftbr">
            <img src={image1} />
          </div>
          </ScrollAnimation>

          
          <ScrollAnimation animateIn="animate__slideInRight">
          <div className="rightbr">
            <h2>Enjoy on your TV</h2>
            <p>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray
              <br /> players and more.
            </p>
          </div>
          </ScrollAnimation>
        </div>

        <div className="contain">
        <ScrollAnimation animateIn="animate__slideInLeft">
          <div className="rightbr">
            <h2>Watch everywhere</h2>
            <p>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop,
              <br /> and TV.
            </p>
          </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="animate__slideInRight">
          <div className="leftbr">
            <img src={image2} />
          </div>
          </ScrollAnimation>
        </div>

        <div className="contain">
        <ScrollAnimation animateIn="animate__slideInLeft">
          <div className="leftbr">
            <img src={image3} />
          </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="animate__slideInRight">
          <div className="rightbr">
            <h2>Create profiles for kids</h2>
            <p>
              Send children on adventures with their favourite characters in a
              space
              <br /> made just for them—free with your membership.
            </p>
          </div>
          </ScrollAnimation>
        </div>

        <div className="contain">
        <ScrollAnimation animateIn="animate__slideInLeft">
          <div className="rightbr">
            <h2>
              Download your shows to
              <br /> watch offline
            </h2>
            <p>
              Save your favourites easily and always have something to watch.
            </p>
          </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="animate__slideInRight">
          <div className="leftbr">
            <img src={image4} />
          </div>
          </ScrollAnimation>
        </div>

        <div className="Questions">
          <h2>Frequently Asked Questions</h2>
          <Accordion>
            <AccordionTab header="What is Netflix?">
              <p className="m-0">
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime,
                <br /> documentaries and more – on thousands of
                internet-connected devices.
                <br />
                <br />
                You can watch as much as you want, whenever you want, without a
                single ad – all for one low monthly price.
                <br />
                There's always something new to discover, and new TV shows and
                movies are added every week!
              </p>
            </AccordionTab>
            <AccordionTab header="How much does Netflix cost?">
              <p className="m-0">
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee.
                <br />
                Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no
                contracts.
              </p>
            </AccordionTab>
            <AccordionTab header="Where can I watch?">
              <p className="m-0">
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your
                <br />
                personal computer or on any internet-connected device that
                offers the Netflix app, including smart TVs, <br />
                smartphones, tablets, streaming media players and game consoles.
                <br />
                <br />
                You can also download your favourite shows with the iOS,
                Android, or Windows 10 app. Use downloads to watch <br />
                while you're on the go and without an internet connection. Take
                Netflix with you anywhere.
              </p>
            </AccordionTab>
            <AccordionTab header="How do I cancel?">
              <p className="m-0">
                Netflix is flexible. There are no annoying contracts and no
                commitments. You can easily cancel your account
                <br />
                online in two clicks. There are no cancellation fees – start or
                stop your account anytime.
              </p>
            </AccordionTab>

            <AccordionTab header="What can I watch on Netflix?">
              <p className="m-0">
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                <br />
                and more. Watch as much as you want, anytime you want.
              </p>
            </AccordionTab>
            <AccordionTab header="Is Netflix good for kids?">
              <p className="m-0">
                The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly <br />
                TV shows and films in their own space.
                <br />
                <br />
                Kids profiles come with PIN-protected parental controls that let
                you restrict the maturity rating of content kids can <br />
                watch and block specific titles you don’t want kids to see.
              </p>
            </AccordionTab>
          </Accordion>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div style={{ display: "flex", justifyContent: "left" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <input
                type="name"
                name="firstname"
                placeholder="Email Address"
                value={email}
                className={`email ${error ? "error" : "border"}`}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
              />
              <span style={{ textAlign: "left", color: "red" }}>{error}</span>
            </div>
            <button className="getStartBtn" onClick={onGetStarted}>
              Get Started
            </button>
          </div>
        </div>
        <FooterPage />
      </div>

      {/* <div className="header"  >
           <div className="nav"> */}
      {/* <a href="/home" className={pathname === "/home" ?  "active" :""}>Home</a>
                <a href="/about" className={pathname === "/about" ?  "active" :""}>About</a>
                <a href="/services" className={pathname === "/services" ?  "active" :""}>Services</a>
                <a href="/gallery" className={pathname === "/gallery" ?  "active" :""}>Gallery</a>
                <a href="/contact" className={pathname === "/contact" ?  "active" :""}>Contact</a> */}

      {/* </div>
        </div>  */}
    </>
  );
}

export default HeaderPage;
