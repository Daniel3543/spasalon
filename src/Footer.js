import React from 'react';
import { FaInstagram, FaFacebookF, FaTelegramPlane, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className='Footer'>

      <div className="box">

        <div className="left">

          <h2>Logo</h2>

          <div className="icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTelegramPlane /></a>
          </div>

          <p>All right resived</p>

        </div>



        <ul>

          <li>Home</li>
          <li>About us</li>
          <li>Products</li>
          <li>Reviews</li>
          <li>Blog</li>
          <li>Contact us</li>

        </ul>


        <div className="right">

          <div className="phone">
            <FaPhoneAlt />
            <div>
              <p>+37477407174</p>
              <p>+3749986890</p>
            </div>
          </div>

          <span>Design by Meline</span>

        </div>

      </div>

    </footer>
  )
}