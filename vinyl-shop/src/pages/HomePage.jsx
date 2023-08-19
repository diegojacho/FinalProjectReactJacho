import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../style/HomePage.css'; 


const HomePage = () => {
  const heroImage = require('../images/heroimage.png'); 

  return (
    <>
    <div className="home-page">
      <div className="hero">
        <img src={heroImage} alt="Hero" className="hero-image" />
        <div className="hero-content">
          <h1>Discover New Vinyl Records</h1>
          <p>Explore our curated collection of vintage and modern vinyl records.</p>
          <Button variant="primary"><Link to='./Catalog' style={{ color: 'inherit', textDecoration: 'inherit'}}>View Catalog</Link></Button>
          <Button variant="primary"><Link to='./Picks' style={{ color: 'inherit', textDecoration: 'inherit'}}>Today's Pick</Link></Button>
        </div>
      </div>
    </div>
    </>
  );
};

export default HomePage;

