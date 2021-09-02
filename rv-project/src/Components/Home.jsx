import React, { useState } from 'react'


export const Home = () => {
  return (
    <>
      <nav className="rv-nav">
        <div className="rv-title">Rv inspector</div>
        <img
          className="logo"
          src="Free-Free-Download-PNG.png"
          alt="logo-placeholder"
          width="100"
          height="100"
        ></img>
        <div className="rv-links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="img-container1">
        <img src="" className="first-image" alt="Placeholder-1"></img>
        <h2 className="first-image-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum
          ultrices posuere. Nullam scelerisque at magna ut sagittis. Nulla vel
          dolor sodales, sollicitudin urna vel, viverra elit. Sed nec luctus
          justo. In tempor aliquam metus, sed molestie velit lacinia ut. Integer
          sagittis vel mi non porttitor. Suspendisse mattis in ex vel mattis.
          Aliquam finibus, metus vel pulvinar pharetra, nunc magna faucibus
          orci, vel
        </h2>
      </div>
    </>
  );
};
