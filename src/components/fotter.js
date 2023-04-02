import React from 'react'
import { Link } from 'react-router-dom'

const Fotter = () => {
  return (
    <footer className="bg-light bg-dark">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <h5>About Us</h5>
          <p>We are a leading ecommerce site committed to providing our customers with the best shopping experience.</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <h5>Contact Us</h5>
          <ul className="list-unstyled">
            <li>123 Main St.</li>
            <li>Anytown, USA 12345</li>
            <li>contact@myecommercesite.com</li>
            <li>555-555-5555</li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <h5>Follow Us</h5>
          <ul className="list-unstyled">
            <li><Link to="#">Facebook</Link></li>
            <li><Link to="#">Twitter</Link></li>
            <li><Link to="#">Instagram</Link></li>
            <li><Link to="#">Pinterest</Link></li>
          </ul>
        </div>
      </div>
    </div>
    
  </footer>
  )
}

export default Fotter
