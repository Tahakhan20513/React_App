import React from 'react';
import '../componentsCss/mainfile.css';
import ProductTabs from './ProductTabs';

function Home() {
  return (
    <div className="container my-4">
      {/* Banner Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Mobile Accessories Hub <span style={{ color: "#ff6600" }}> About</span></h1>
        <p className="lead">Best quality handfree, covers, chargers & more at unbeatable prices!</p>
      </div>

      {/* Categories Section */}
      <h3 className="mb-4 text-secondary">Shop by Category</h3>
      <div className="row g-4">
        <div className="col-md-3 col-6">
          <div className="card shadow-sm text-center p-3">
            <img src="/images/handfree01.jpeg" className="card-img-top" alt="Handfree" />
            <h5 className="mt-3">Handfree</h5>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="card shadow-sm text-center p-3">
            <img src="/images/mobilecover02.jpeg" className="card-img-top" alt="Mobile Cover" />
            <h5 className="mt-3">Mobile Covers</h5>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="card shadow-sm text-center p-3">
            <img src="/images/Charger03.jpg" className="card-img-top" alt="Charger" />
            <h5 className="mt-3">Chargers</h5>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="card shadow-sm text-center p-3">
            <img src="/images/powerbank04.jpeg" className="card-img-top" alt="Powerbank" />
            <h5 className="mt-3">Powerbank</h5>
          </div>
        </div>
      </div>

        {/* Featured Products - Tabs */}
      <ProductTabs />

      
    </div>
  );
}

export default Home;
