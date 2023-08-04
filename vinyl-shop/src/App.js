import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import CustomNavbar from './components/Navbar';
import ItemsListContainer from './components/ItemsListContainer';


// App component, eventually will be use to update cart
function App() {
  const [cartCount, setCartCount] = useState(0);

// Function to update cart count it will be utilize moving forward
  const updateCartCount = (count) => {
    setCartCount(count);
  };
// This is what is needed for preentrega1
  return (
    <div className="App">
      <CustomNavbar cartCount={cartCount} />
      <Container>
        <ItemsListContainer greeting="Browse our catalog and inmerse in the world of good music!" />
      </Container>
    </div>
  );
}

export default App;
