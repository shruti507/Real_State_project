import React from 'react';
import './Style.css'; // Assuming you have a CSS file for custom styles
import Header from "./Header.js";

const AboutUs = () => {
  return (
    <>
    <Header />
    <div id="services" className="our-services section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.2s">
            <div className="left-image">
              <img src="as.png" alt="Services" />
            </div>
          </div>
          <div className="col-lg-6 wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.2s">
            <div className="section-heading">
              <h2><em>About Us</em></h2>
              <p>
                At RealEstate, we believe that finding your dream home or the perfect investment property should be an exciting and seamless journey.  Founded in [Year], we have grown from a small local agency into a leading real estate platform with a mission to simplify the property search and buying process for our clients.              </p>
            </div>
           <h3>Our Mission</h3>
           <p>
           Our mission is to provide exceptional real estate services through innovation, integrity, and a deep understanding of the property market. We are dedicated to helping individuals, families, and investors find the right property that fits their needs and lifestyle.</p>
          <h3>Who We Are</h3>
          <p>We are a team of passionate real estate professionals with years of experience in the industry. Our team is composed of knowledgeable agents, market analysts, and customer service experts who are committed to delivering personalized and attentive service.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
