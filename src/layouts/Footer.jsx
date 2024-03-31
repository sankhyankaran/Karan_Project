import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import "../assets/css/Footer.css";

function Footer() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-evenly">
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold">Industries</h5>
            <ul className="contact_us">
              <li>
                <Link to="#">Food Delivery</Link>
              </li>
              <li>
                <Link to="#">Healthcare</Link>
              </li>
              <li>
                <Link to="#">Pickup & Delivery</Link>
              </li>
              <li>
                <Link to="#">Taxi and Transportation</Link>
              </li>
              <li>
                <Link to="#">Home Services</Link>
              </li>
              <li>
                <Link to="#">Fitness</Link>
              </li>
              <li>
                <Link to="#">Education</Link>
              </li>
              <li>
                <Link to="#">Real Estate</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold">Services</h5>
            <ul className="contact_us">
              <li>
                <Link to="#">Premium App Development Studio</Link>
              </li>
              <li>
                <Link to="#">Mobile App Development Dubai</Link>
              </li>
              <li>
                <Link to="#">Mobile App Development New York</Link>
              </li>
              <li>
                <Link to="#">Enterprise Software Development</Link>
              </li>
              <li>
                <Link to="#">Blockchain Development</Link>
              </li>
              <li>
                <Link to="#">Fintech Development</Link>
              </li>
              <li>
                <Link to="#">On Demand Development</Link>
              </li>
              <li>
                <Link to="#">UI/UX Design - Allurive</Link>
              </li>
              <li>
                <Link to="#">Web Development</Link>
              </li>
              <li>
                <Link to="#">Growth & Marketing</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold">Marketplace</h5>
            <ul className="contact_us">
              <li>
                <Link to="#">Service</Link>
              </li>
              <li>
                <Link to="#">Freelancer</Link>
              </li>
              <li>
                <Link to="#">E-Commerce</Link>
              </li>
              <li>
                <Link to="#">Peer-to-Peer</Link>
              </li>
              <li>
                <Link to="#">Rental</Link>
              </li>
            </ul>
            <div>
              <h5 className="pt-4 fw-bold">Quick Links</h5>
              <ul className="contact_us">
                <li>
                  <Link to="#">Portfolio</Link>
                </li>
                <li>
                  <Link to="#">Why Choose us</Link>
                </li>
                <li>
                  <Link to="#">How we work</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card shadow p-2">
              <h4 className="text-center fw-bold">Whatsapp Updates</h4>
              <input
                type="number"
                placeholder="Enter Number"
                className="pr-1 py-2"
              />
              <button className="btn btn-success mx-5 my-2">Submit</button>
              <span className="">Whatsapp Updates</span>
            </div>
            <div className="card my-4">
              <h5 className="p-2 fw-bold">Follow us on</h5>
              <div className="d-flex justify-content-evenly my-2">
                <FaInstagram className="icon" />
                <FaFacebook className="icon" />
                <FaLinkedin className="icon" />
                <IoLogoYoutube className="icon" />
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-12 text-center py-3 px-5 shadow-xl d-flex justify-content-between font-small ">
            <div>
              <p>© 2024 Karan Sankhyan | All Rights Reserved |up</p>
            </div>
            <div>
              <p>
                Privacy Policy | Return Policy | Terms & conditions
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
