import React from "react";

const Footer = () => {
  return (
    <div className="inset-x-0 bottom-0">
      <div className="flex justify-center">
        <a className="btn-ig mb-2" href="https://instagram.com/agusnarestha">
          <i className="fab fa-instagram"></i>
        </a>
        <a className="btn-fb mb-2" href="https://facebook.com/agus.narestha">
          <i className="fab fa-facebook"></i>
        </a>
        <a className="btn-github mb-2" href="https://github.com/agusnarestha">
          <i className="fab fa-github"></i>
        </a>
        <p className="mt-4">© 2024 Agus Narestha | Made With ❤️</p>
      </div>
    </div>
  );
};

export default Footer;
