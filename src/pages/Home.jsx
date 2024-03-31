import React from "react";
import "../assets/css/Home.css";
import home from "../assets/images/home/home.png";
import home1 from "../assets/images/home/home1.png";
import home2 from "../assets/images/home/home2.webp";
import home3 from "../assets/images/home/home3.png";
import home4 from "../assets/images/home/home4.webp";
import { Image } from "react-bootstrap";
import service from "../assets/images/services/logo.png";
import card1 from "../assets/images/services/card1.svg";
import service1 from "../assets/images/services/service1.svg";
import service2 from "../assets/images/services/servive2.svg";
import service3 from "../assets/images/services/service3.svg";
import service4 from "../assets/images/services/service4.svg";
import { Link } from "react-router-dom";
import explore from "../assets/images/services/explore.svg";
import digital from "../assets/images/solution/solutions.webp";
import portfolio from "../assets/images/portfolio/portfolio.webp";
import Slider from "react-slick";
import slider1 from "../assets/images/slider/slider1.webp";
import slider2 from "../assets/images/slider/Slider2.webp";
import slider3 from "../assets/images/slider/slider3.webp";
import slider4 from "../assets/images/slider/slider4.webp";
import slider5 from "../assets/images/slider/slider5.png";
import slider6 from "../assets/images/slider/slider6.png";
import logopartner from "../assets/images/partnership/logo.png";
import backimg from "../assets/images/partnership/backimage.png";
import queslogo from "../assets/images/question/ques.png";
import cardback from "../assets/images/question/card1img.png";
import cardques1 from "../assets/images/question/card1.png";
import card2 from "../assets/images/question/card2.png";
import card3 from "../assets/images/question/card3.png";
import card4 from "../assets/images/question/card4.png";
import card2back from "../assets/images/question/card2back.png";
import card3back from "../assets/images/question/card3back.png";
import card4back from "../assets/images/question/card4back.png";
import schedule from "../assets/images/schedule/schedule1.svg";
import clientlogo from "../assets/images/clients/Client.png";
import layer from "../assets/images/clients/layer-510@2x.webp";
import zipimg from "../assets/images/clients/zipeats.webp";
import bhart from "../assets/images/clients/bhartpay.webp";
import vodafone from "../assets/images/clients/Vodafone.webp";
import busaq from "../assets/images/clients/Buraq.webp";
import gettouch from "../assets/images/touchsection/image.png";
import contactback from "../assets/images/contact/image.png";
import contactlogo from "../assets/images/contact/image copy.png";
import country1 from "../assets/images/contact/country1.webp";
import country2 from "../assets/images/contact/count2.webp";
import country3 from "../assets/images/contact/count3.webp";
import country4 from "../assets/images/contact/coun4.webp";
import { MdForwardToInbox } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from "../layouts/Footer";
import item1 from "../assets/images/home/item1.webp";
import ModalButton from "../components/Modals";
import ModalButtonTouch from "../components/GetTouchModal";
import setting from "../assets/images/services/setting.svg";
import cardser2 from "../assets/images/services/cardser2.svg";
import cardser3 from "../assets/images/services/cardser3.svg";
import cardser4 from "../assets/images/services/cardser4.svg";
import cardser5 from "../assets/images/services/cardser5.svg";
import global from "../assets/images/schedule/global.svg";
import industries from "../assets/images/schedule/industries.svg";
import countries from "../assets/images/schedule/schedule1.svg";
import sliderh1 from "../assets/images/slider/paragraph/sliderh1.png";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import "../assets/css/Exploed.css";
import sliderh2 from "../assets/images/slider/paragraph/sliderh2.webp";
import sliderh3 from "../assets/images/slider/paragraph/sliderh3.png";
import sliderh4 from "../assets/images/slider/paragraph/sliderh4.webp";
import sliderh5 from "../assets/images/slider/paragraph/sliderh5.webp";
import sliderh6 from "../assets/images/slider/paragraph/sliderh6.png";
import homeback from "../assets/images/home/mobilehome.webp";
import homeslider1 from "../assets/images/home/homeslider1.jpg";
import homeslider2 from "../assets/images/home/homeslider2.jpg";
import homeslider3 from "../assets/images/home/sliderhome3.jpg";
import homeslider4 from "../assets/images/home/sliderhome4.jpg";
import ayiti from "../assets/images/clients/ayiti.webp";
import bhartpay from "../assets/images/clients/bhartpay.webp";
import bobble from "../assets/images/clients/bobble.webp";
import buraq from "../assets/images/clients/Buraq.webp";
import edyrav from "../assets/images/clients/edyrav.webp";
import epito from "../assets/images/clients/epito.webp";
import gtr from "../assets/images/clients/gtr@2x.webp";
import idea from "../assets/images/clients/idea.webp";
import sharjah from "../assets/images/clients/sharjah.webp";
import tawala from "../assets/images/clients/tawla@2x.webp";
import zipeasts from "../assets/images/clients/zipeats.webp";
import zajel from "../assets/images/clients/zajel.webp";
import Taste1 from "../assets/images/Taste/sliderdown1.svg";
import Taste2 from "../assets/images/Taste/taste2.webp";
import blogs from "../assets/images/Blogs/BLogs.png";
import blog1 from "../assets/images/Blogs/blog1.jpg";
import blog2 from "../assets/images/Blogs/blog2.webp";
import blogmeesho from "../assets/images/Blogs/Meeshoblog.webp";

function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [showModal, setShowModal] = React.useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <div
        className="container my-5"
        style={{
          backgroundImage: `url(${home})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "90vh",
        }}>
        <div className="row justify-content-between my-5 mx-5">
          <div className="col-lg-6 pt-5">
            <h1 className="mt-5 text-black">
              Transforming The Way You
              <br />
              <span style={{ color: "#70aa26", margin: "5px" }}>
                Launch. Run. Grow <span style={{ color: "black" }}>Your</span>
                <br />
              </span>
              Business Digitally
            </h1>
            <div className="text-1xl p-2 mt-5 ">
              <p className="text-black">
                Accelerating growth for brands like you with technology, <br />
                experience &
                <span
                  style={{
                    textDecoration: "underline",
                    margin: "10px",
                    textDecorationColor: "#79b52e", // Set the border bottom color here
                  }}>
                  innovation for a decade.
                </span>
              </p>
              <div className="btn-containers d-flex justify-content-start">
                <div className="button_news">
                  <button className="pulses" onClick={handleShow}>
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <ModalButton
              showModal={showModal}
              handleClose={() => setShowModal(false)}
            />
            <div className="d-flex justify-content-around  mt-5 imageshome">
              <div className="col ">
                <Image src={home1} alt="Image 1" className="mt-5  home1 " />
              </div>
              <div className="col">
                <Image src={home2} alt="Image 2" className="mt-5 home1" />
              </div>
              <div className="col">
                <Image src={home3} alt="Image 3" className="mt-5 home1" />
              </div>
              <div className="col">
                <Image src={home4} alt="Image 3" className="mt-5 home1" />
              </div>
            </div>
          </div>

          <div className="col-lg-4 home_back">
            <div className="mobile">
              <Image src={homeback} style={{ height: "270px" }} />
            </div>
            <div
              id="carouselExampleSlidesOnly"
              class="carousel slide"
              data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src={homeslider2}
                    style={{
                      height: "254px",
                      // width: "100%",
                      borderRadius: "14px",
                    }}
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={homeslider3}
                    style={{
                      height: "254px",
                      // width: "100%",
                      borderRadius: "13px",
                    }}
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={homeslider4}
                    style={{
                      height: "254px",
                      // width: "100%",
                      borderRadius: "13px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services Section */}
      <div className="container my-4">
        <div className="d-flex align-items-center">
          <Image
            src={service}
            style={{ height: "25px", width: "auto", marginRight: "10px" }}
            className="mr-3"
          />
          <h5 className="mb-0">SERVICES</h5>
        </div>
        <h4 className="mt-3 fw-bold"> What’s Brewing In The Code Brew Labs?</h4>
        <p>
          Discover the digital possibilities for your brand with our
          comprehensive suite of services.
        </p>
        <div className="row d-flex justify-content-around">
          <div className="col-lg-3 col-sm-6 my-5">
            <div className="">
              <div className="cards">
                <Image src={card1} />
                <h4 className="text-black">
                  Validate
                  <br />
                  Prototype
                </h4>
              </div>
            </div>
            <div className="mt-4">
              <div className="cards">
                <Image src={cardser2} />
                <h4 className="text-black">
                  Custom App
                  <br />
                  Development
                </h4>
              </div>
            </div>
            <div className=" mt-4">
              <div className="cards ">
                <Image src={cardser3} />
                <h4 className="text-black">
                  Enterprise
                  <br />
                  Software
                </h4>
              </div>
            </div>
            <div className="mt-4">
              <div className="cards ">
                <Image src={cardser4} />
                <h4 className="text-black">
                  Blockchain <br />
                  Solution
                </h4>
              </div>
            </div>
            <div className="mt-4">
              <div className="cards ">
                <Image src={setting} />
                <h4 className="text-black">
                  AI-Powered <br />
                  App Builder
                </h4>
              </div>
            </div>
            <div className=" mt-4">
              <div className="cards ">
                <Image src={cardser5} />
                <h4 className="text-black">
                  Growth &
                  <br />
                  Marketing
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-sm-6">
            <div
              className="px-5 py-2 card"
              style={{
                backgroundColor: "#000080",
                color: "#fff",
                position: "sticky",
                top: 0,
              }}>
              <div className="p-5">
                <h3 className="pt-2">Validate & Prototype</h3>
                <h5 className="pt-2 mt-2 fw-bold">
                  A Visual Model Of Your Idea Before You Launch It We help you
                  put
                </h5>

                <p className="my-4">
                  Get the first step right with our extensive experience & our
                  in-house design studio- Allurive. From conducting industry
                  research to laying your business roadmap and delivering a
                  fully-functional & interactive prototype- we’ve got you
                  covered.
                </p>
              </div>
              <div className="text-whitep px-5">
                <Link to=" " className="no-underline text-white d-flex">
                  Explore
                  <span>
                    <Image src={explore} className="explores pulseing" />
                  </span>
                </Link>
              </div>
              <div className="p-5">
                <div className="row d-flex justify-content-space-evenly ">
                  <div class="col-lg-6 col-sm-6  my-2 items-center">
                    <Image src={service1} alt="Image 1" />
                    <h5>Industry Research</h5>
                  </div>
                  <div class="col-lg-6 col-sm-6 my-2 items-center  ">
                    <Image src={service2} alt="Image 2" />
                    <h5>Business Plan</h5>
                  </div>
                </div>
                <div className="row d-flex justify-content-space-evenly py-2">
                  <div class="col-lg-6 col-sm-6 my-2 items-center ">
                    <Image src={service3} alt="Image 3" />
                    <h5>UI/UX Designing</h5>
                  </div>
                  <div class="col-lg-6 col-sm-6 my-2 items-center ">
                    <Image src={service4} alt="Image 4" />
                    <h5>Prototyping & Wireframing</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Digital solution  section*/}
      <div
        className="container my-4"
        style={{
          backgroundImage: `url(${digital})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "400px",
        }}>
        <div className="row justify-content-arounded">
          <div className="col-lg-4 my-5">
            <h4 className="text-white pt-5">
              We Empower Your Business With Out-Of-The-Box Digital Solutions
            </h4>
          </div>

          <div className="btn-containers d-flex justify-content-start">
            <div className="button_news">
              <button className="pulses" onClick={handleShow}>
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Porfolio Section */}

      <div className="container my-5">
        <div className="d-flex align-items-center">
          <Image
            src={portfolio}
            style={{ height: "25px", width: "auto", marginRight: "10px" }}
          />
          <h5 className="mb-0">PORTFOLIO</h5>
        </div>
        <div className="text-black  mt-4">
          <h4 className="fw-bold">The Successfully Brewed Businesses</h4>
          <p>
            We take pride in catering their growing business needs and making
            them stand apart on the App Store & Google Play.
          </p>
        </div>
      </div>

      {/* slider section */}

      <div className="container-fluid my-5">
        <div className="row px-3 mx-3">
          <Slider {...settings}>
            <div className="slide_design bg-dark">
              <div className="col-lg-4 col-sm-6 para_slider ">
                <div className="mb-5">
                  <Image src={sliderh1} />
                </div>
                <p className="">
                  Becoming the first & most
                  <span>
                    downloaded food delivery app
                    <span>
                      Venezuela turned possible with our AI-powered platform.
                      Now build your app 7X faster and pay 80% less.
                    </span>
                  </span>
                </p>
                <h3 className="text-bold py-5">
                  Available on <IoLogoGooglePlaystore />{" "}
                </h3>
                <div className="btn-containered justify-content-start ">
                  <div className="button_newed">
                    <button className="pulsed">Explore Case Study</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 p-5">
                <Image src={slider1} />
              </div>
            </div>

            <div className="slide_design bg-success">
              <div className="col-lg-6 col-sm-6  p-5 ">
                <Image src={slider2} />
              </div>
              <div className="col-lg-4 col-sm-6 para_slider">
                <div className="mb-5">
                  <Image src={sliderh2} />
                </div>
                <p>
                  “Online Selling Platform For Pre-Hospital Medical Supplies”
                  Leading medical equipment supplier within the UAE, GCC, Middle
                  East & Africa, selling over 5000+ products from leading
                  international brands with the highest quality of products.
                </p>
                <h3 className="text-bold py-5">
                  Available on <IoLogoGooglePlaystore />{" "}
                </h3>
                <div className="btn-containered justify-content-start ">
                  <div className="button_newed">
                    <button className="pulsed">Explore Case Study</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="slide_design bg-danger">
              <div className="col-lg-4 col-sm-6 para_slider ">
                <div className="mb-5">
                  <Image src={sliderh3} />
                </div>
                <p>
                  Delightful experience is the X-factor for this amazing
                  solution which is loved by people in Kuwait and the MENA area
                  to discover new places to visit or shop.
                </p>
                <h3 className="text-bold py-5">
                  Available on <IoLogoGooglePlaystore />{" "}
                </h3>
                <div className="btn-containered justify-content-start ">
                  <div className="button_newed">
                    <button className="pulsed">Explore Case Study</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 p-5">
                <Image src={slider3} />
              </div>
            </div>

            <div className="slide_design  bg-primary">
              <div className="col-lg-6 col-sm-6 p-5">
                <Image src={slider4} />
              </div>
              <div className="col-lg-4  para_slider ">
                <div className="mb-5">
                  <Image src={sliderh4} />
                </div>
                <p>
                  “App based on Hamilton Bay booking system in Dubai & Abu
                  Dhabi”. Home of a comprehensive aquatics programme in swimming
                  and water polo to book swimming lessons, view progress and do
                  more
                </p>
                <h3 className="text-bold py-5">
                  Available on <IoLogoGooglePlaystore />{" "}
                </h3>
                <div className="btn-containered justify-content-start ">
                  <div className="button_newed">
                    <button className="pulsed">Explore Case Study</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="slide_design  bg-info bg-gradient">
              <div className="col-lg-4 col-sm-6 para_slider ">
                <div className="mb-5">
                  <Image src={sliderh5} />
                </div>
                <p>
                  “Online platform for synchronized shopping experience”. A
                  bouquet of solutions by Al Khalili Group- A diversified &
                  dynamic business house in the OMAN, UAE, QATAR & other GCC
                  countries
                </p>
                <h3 className="text-bold py-5">
                  Available on <IoLogoGooglePlaystore />{" "}
                </h3>
                <div className="btn-containered justify-content-start ">
                  <div className="button_newed">
                    <button className="pulsed">Explore Case Study</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 p-5 ">
                <Image src={slider5} />
              </div>
            </div>

            <div className="slide_design  bg-secondary">
              <div className="col-lg-6 col-sm-6 p-5   ">
                <Image src={slider6} />
              </div>
              <div className="col-lg-4 col-sm-6 para_slider ">
                <div className="mb-5">
                  <Image src={sliderh6} />
                </div>
                <p>
                  Paragraphs are the building blocks of papers. Many students
                  define paragraphs in terms of length: a paragraph is a group
                  of at least five sentences, a paragraph is half a page long,
                  etc. In reality, though, the unity and coherence of ideas
                  among sentences is what constitutes a paragraph.
                </p>
                <h3 className="text-bold py-5">
                  Available on <IoLogoGooglePlaystore />{" "}
                </h3>
                <div className="btn-containered justify-content-start ">
                  <div className="button_newed">
                    <button className="pulsed">Explore Case Study</button>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      {/* Partnership section */}
      <div className="container my-5">
        <div className="d-flex justify-content-between">
          <div className="col-lg-4 mt-5">
            <div className="d-flex ">
              <img
                src={logopartner}
                style={{ height: "25px", width: "auto", marginRight: "10px" }}
                className="mr-3"
              />
              <h5>PARTNERSHIPS</h5>
            </div>
            <div className="py-4">
              <h4 className="fw-bold">
                Empower Your Clients With Industry-Leading Technology Solution
              </h4>
              <p className="py-2">
                Collaborate with us to earn more by selling, customizing or
                integrating our products
              </p>
            </div>
            <div className="btn-containers d-flex justify-content-start ">
              <div className="button_news">
                <button className="pulses ">Explore More</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <Image src={backimg} className="img-fluid" />
          </div>
        </div>
      </div>
      {/* Question Section */}
      <div className="container my-5">
        <div className="d-flex align-items-center">
          <Image
            src={queslogo}
            style={{ height: "25px", width: "auto", marginRight: "10px" }}
          />
          <h5 className="fw-bold">WHY CHOOSE US</h5>
        </div>
        <div>
          <h4 className="fw-bold py-2">
            Why Choose Our Digital Solution Brewery?
          </h4>
          <p className="text-black py-1">
            We have a suite of revolutionizing technologies to create
            unparalleled future mobile experiences for your business.
          </p>
        </div>

        <div className="row justify-content-around mt-5">
          <div className="col-lg-5 col-sm-6 card_image">
            <div
              className="card p-3"
              style={{
                backgroundImage: `url(${cardques1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "270px",
              }}>
              <div className="d-flex">
                <div className="image_card">
                  <Image
                    src={cardback}
                    className="p-2 rotate-on-hover"
                    style={{ height: "100px" }}
                  />
                </div>
                <div className="p-2">
                  <h5 className="fw-bold">Build Interactive Designs</h5>
                  <p className="p-1 ">
                    Our in-house designer suite, Allurive, follows a unique
                    approach to create outstanding customer experience for your
                    business
                  </p>
                  <div className="py-3 px-5">
                    <ModalButtonTouch />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-sm-6 card_image">
            <div
              className="card p-3"
              style={{
                backgroundImage: `url(${card2back})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "270px",
              }}>
              <div className="d-flex">
                <div className="image_card">
                  <Image
                    src={card2}
                    className="p-2 rotate-on-hover"
                    style={{ height: "100px" }}
                  />
                </div>
                <div className="p-2">
                  <h5 className="fw-bold">Take Better Business Decisions</h5>
                  <p className="p-1">
                    A secret tool, Retainlytics, to gather accurate data and
                    drive personalized, customer-focused marketing for your
                    brand
                  </p>
                  <div className="my-1 px-5">
                    <ModalButtonTouch />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-around mt-5">
          <div className="col-lg-5 col-sm-6 card_image">
            <div
              className="card p-3"
              style={{
                backgroundImage: `url(${card3back})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "270px",
              }}>
              <div className="d-flex">
                <div className="image_card">
                  <Image
                    src={card3}
                    className="p-2 rotate-on-hover"
                    style={{ height: "100px" }}
                  />
                </div>
                <div className="p-2">
                  <h5 className="fw-bold">Enjoy Flexibility To Customize</h5>
                  <p className="p-1">
                    Create extraordinary value for business with an app which is
                    tailored specifically for your business needs
                  </p>
                  <div className="py-2 px-5">
                    <ModalButtonTouch />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-sm-6 card_image">
            <div
              className="card p-3"
              style={{
                backgroundImage: `url(${card4back})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "270px",
              }}>
              <div className="d-flex">
                <div className="image_card">
                  <Image
                    src={card4}
                    className="p-2 rotate-on-hover"
                    style={{ height: "100px" }}
                  />
                </div>
                <div className="p-2">
                  <h5 className="fw-bold p-1">A Robust & Scalable App</h5>
                  <p className="p-1">
                    Greater scope of scalability help attract & manage new
                    opportunities arising for your business in the future
                  </p>
                  <div className="py-1 px-5">
                    <ModalButtonTouch />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* schedule section */}
      <div
        className="container-fluid my-5"
        style={{ backgroundColor: "#112A5A" }}>
        <div className="row d-flex justify-content-evenly my-5">
          <div className="card col-lg-2 mx-2 my-5 cardss">
            <div className="my-2 text-start">
              <h2 className=" d-flex justify-content-center">650+</h2>
            </div>
            <div className="d-flex my-4 border-top justify-between">
              <div>
                <img src={schedule} alt="schedule" />
              </div>
              <div className="align-items-center p-1">
                <p>Top Vetted Developers</p>
              </div>
            </div>
          </div>

          <div className="card col-lg-2 mx-2 my-5 cardss">
            <div className="my-2 text-start">
              <h2 className=" d-flex justify-content-center">650+</h2>
            </div>
            <div className="d-flex my-4 border-top justify-between">
              <div>
                <img src={global} alt="schedule" />
              </div>
              <div className="align-items-center p-1">
                <p>Global Businesses</p>
              </div>
            </div>
          </div>

          <div className="card col-lg-2 mx-2 my-5 cardss">
            <div className="my-2 text-start">
              <h2 className=" d-flex justify-content-center">650+</h2>
            </div>
            <div className="d-flex my-4 border-top justify-between">
              <div>
                <img src={industries} alt="schedule" />
              </div>
              <div className="align-items-center p-1">
                <p>Industries Covered</p>
              </div>
            </div>
          </div>

          <div className="card col-lg-2 mx-2 my-5 cardss">
            <div className="my-2 text-start">
              <h2 className=" d-flex justify-content-center">650+</h2>
            </div>
            <div className="d-flex my-4 border-top justify-between">
              <div>
                <img src={countries} alt="schedule" />
              </div>
              <div className="align-items-center p-1">
                <p>Countries Served</p>
              </div>
            </div>
          </div>
          <div>
            <div className="row d-flex justify-content-evenly">
              <div className="col-lg-6 mx-5 my-5">
                <h2 className="text-white">
                  Setup A Free Consultation To Know How To Take Your Ideas From
                  Concept To Reality
                </h2>
              </div>
              <div className="col-lg-3 my-5">
                <div className="btn-containers justify-end">
                  <div className="button_news">
                    <button className="pulses">Schedule a Call</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Client section */}
      <div className="container my-5">
        <div className="d-flex align-items-center">
          <img
            src={clientlogo}
            style={{ height: "28px", width: "auto", marginRight: "10px" }}
            alt="Client Logo"
          />
          <h5 className="mb-0">CLIENTS</h5>
        </div>
        <div className="my-3">
          <h4 className="font-bold">We Have Made Them Taste Success</h4>
        </div>
        <div className="row justify-center my-5">
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={bhart} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={tawala} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={layer} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={vodafone} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={zipimg} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={bhartpay} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={vodafone} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={ayiti} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={buraq} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={bobble} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={vodafone} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={zipeasts} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={edyrav} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={epito} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={zajel} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={buraq} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={zipimg} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={layer} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={gtr} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={busaq} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={sharjah} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={zajel} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={idea} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={bhartpay} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={sharjah} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={edyrav} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={zipeasts} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={zajel} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={zipimg} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={layer} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={sharjah} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={vodafone} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={epito} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={bhart} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={idea} className="clients" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-auto my-2">
            <img src={ayiti} className="clients" />
          </div>
        </div>
      </div>
      {/* touch section */}
      <div
        className="container my-5"
        style={{
          backgroundImage: `url(${gettouch})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}>
        <div class="d-flex justify-content-end">
          <div className="col-lg-4 mx-5 my-3">
            <div
              className="card"
              style={{
                backgroundColor: "#79b52e",
                color: "white",
                marginTop: "10%",
              }}>
              <h4 className="py-2 px-3 fs-1">
                Get An Exclusively Brewed Digital Solution For Your Business
              </h4>
              <div className="py-4 px-3">
                <ModalButtonTouch />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Taste-Statements */}
      <div className="container">
        <div className="mx-4 fw-bold text-center">
          <h4>Their Taste-Statements Make Us Proud</h4>
        </div>
        <div
          style={{
            Transition: "all 0.25s ease 0s",
            transform: "translate3d(-7982px, 0px, 0px)",
          }}></div>
      </div>

      {/* Latest blogs */}
      <div className="container my-5">
        <div className="d-flex align-items-center mt-5">
          <Image
            src={blogs}
            style={{ height: "25pX", width: "auto", marginRight: "10px" }}
          />
          <h5 className="mb-0"> Latest Blogs</h5>
        </div>
        <h3 className="fw-bold my-3">The Brewer’s Guide</h3>
        <p>
          A simple way to stay tuned with the latest digital solutions and
          updates.
        </p>
        <div className="row d-flex justify-content-between my-5">
          <div className="col-lg-6 col-sm-12 d-flex">
            <div
              className="col-lg-3"
              style={{
                backgroundImage: `url(${blog1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "220px",
                width: "66%",
                cursor: "pointer",
              }}></div>
            <div
              className="col-lg-6 col-sm-12 px-5 py-5"
              style={{
                backgroundColor: "rgb(255, 165, 0)",
                height: "220px",
                width: "66%",
              }}>
              <h5 className="fw-bold">How To Build An App Like Bolt?</h5>
              <div className="btn-containers my-3">
                <div className="button_news">
                  <button className="pulses">Read More</button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4"
            style={{
              backgroundImage: `url(${blogmeesho})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "220px",
              cursor: "pointer",
            }}></div>
        </div>

        <div className="row d-flex justify-content-between ">
          <div className="col-lg-6 col-sm-12 d-flex">
            <div
              className="col-lg-6 col-sm-12 px-5 py-5"
              style={{
                backgroundColor: "rgb(210, 210, 210)",
                height: "220px",
                width: "66%",
              }}>
              <h5 className="fw-bold">How To Build An App Like Bolt?</h5>
              <div className="btn-containers my-3">
                <div className="button_news">
                  <button className="pulses">Read More</button>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3"
              style={{
                backgroundImage: `url(${blog2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "220px",
                width: "66%",
                cursor: "pointer",
              }}></div>
          </div>
          <div
            className="col-lg-4 py-5 px-4 "
            style={{
              backgroundColor: "#5203fc",
              height: "220px",
              
            }}>
           <h5 className="fw-bold text-white">Meesho’s IPO Race 2024: What Entrepreneurs Need to Know!</h5>
            <div className="btn-containers my-3">
              <div className="button_news">
                <button className="pulses">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ContactUs Section */}
      <div
        className="container my-5"
        style={{
          backgroundImage: `url(${contactback})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}>
        <div className="row">
          <div className="col-lg-6">
            <div className="d-flex align-items-center mt-5">
              <Image
                src={contactlogo}
                style={{ height: "25pX", width: "auto", marginRight: "10px" }}
              />
              <h5 className="mb-0">CONTACT US</h5>
            </div>
            <div className="py-4">
              <h4 className="fw-bold">Let’s Fire Up Your Business!</h4>
              <p>
                Team Up With Us Today For An Unforgettable Service Experience{" "}
              </p>
            </div>
            <div className=" d-flex py-5">
              <Image src={country1} className="contact-image" roundedCircle />
              <Image src={country2} className="contact-image" roundedCircle />
              <Image src={country3} className="contact-image" roundedCircle />
              <Image src={country4} className="contact-image" roundedCircle />
            </div>
            <h4 className="fw-bold pt-5">Dubai</h4>
            <h5>
              Level- 26, Dubai World Trade Centre Tower, <br />
              Sheikh Rashid Tower, Sheikh Zayed Rd, Dubai, UAE
            </h5>
            <p className="contact-detail fw-bold pt-3">
              <MdForwardToInbox /> karansrma2003@gmail.com
            </p>
            <p className="contact-detail fw-bold">
              <FaPhoneAlt /> +91 9805497036
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
