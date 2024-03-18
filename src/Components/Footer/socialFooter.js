import React, { useState } from "react"
import { BsYoutube, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaSpotify, FaTiktok, FaRegCopyright } from "react-icons/fa";

const SocialFooter = () => {

  return (
    <>
     {/* <h2>Follow Us</h2> */}
        <ul className="col-md-3 d-flex align-items-center list-unstyled icons-footer">
            <li><a href="https://www.instagram.com/ozradiobandung/" target="_blank" className="text-white"><BsInstagram /></a></li>
            <li><a href="https://twitter.com/ozradiobandung?s=20" target="_blank" className="text-white"><BsTwitter /></a></li>
            <li><a href="https://www.youtube.com/@OZRADIO" target="_blank" className="text-white"><BsYoutube /></a></li>
            <li><a href="https://open.spotify.com/show/24P703f8q8xHnqOn6MCrPO?si=7861e36e3c264fe3&nd=1&dlsi=20c956f09a774cff" target="_blank" className="text-white"><FaSpotify /></a></li>
            <li><a href="https://www.facebook.com/ozradiobandung" target="_blank" className="text-white"><FaFacebookF /></a></li>
            <li><a href="https://www.tiktok.com/@ozradio?lang=en" target="_blank" className="text-white"><FaTiktok  /></a></li>
          </ul>
    </>
  )
}

export default SocialFooter