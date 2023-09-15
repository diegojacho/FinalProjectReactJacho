import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HeroCarousel } from '../components/HeroCarousel';
import { useGetDocId } from '../hooks/useGetDocId';



export function HomePage () {
  const idHomePage = "BaPPBCz58ByKNZ6OLHR6"
  const { shopItem } = useGetDocId(idHomePage)

  const heroImage = require('../assets/heroimage.png'); 

  return (
    <>
    <div className="home-page">
      <div className="hero">
        <img src={heroImage} alt="Hero" className="hero-image" />
        <div className="hero-content">
          <h1>Discover New Vinyl Records</h1>
          <p>Explore our curated collection of vintage and modern vinyl records.</p>
          <Button variant="primary"><Link to='./catalog' style={{ color: 'inherit', textDecoration: 'inherit'}} item={shopItem}>View Catalog</Link></Button>
          <Button variant="primary"><Link to='./picks' style={{ color: 'inherit', textDecoration: 'inherit'}}>Today's Pick</Link></Button>
        </div>
      </div>
    </div>
    <HeroCarousel />
    </>
    
  );
};


