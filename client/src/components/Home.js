import React from 'react'
import Carousel from 'react-bootstrap/Carousel'


const Home = () => {

  return (
    <section className="hero is-fullheight-with-navbar is-info">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1 has-text-centered">
            <span className="logo-emoji" role="img" aria-label="logo">📀</span>
            <div id="header-wrapper" className="clearfix">
              <div id="search-container" className="clearfix">

              </div>
            </div>
            <Carousel>
              <Carousel.Item>
                <div className="d-flex carousel justify-content-md-between align-items-md-center">
                  <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627080103/Project%204/f1_zb0c0k.jpg"
                    alt="First slide"
                  />
                  <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627127892/Project%204/f2_ziewzk.jpg"
                    alt="Second slide"
                  />
                  <p className="text-monospace"><q>New Generation Entertainment!</q> The Beatles and Us</p>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="d-flex carousel justify-content-md-between align-items-md-center">
                  <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627080103/Project%204/f1_zb0c0k.jpg"
                    alt="Second slide"
                  />
                  <p></p>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="d-flex carousel justify-content-md-between align-items-md-center">
                  <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627129121/Project%204/f3_usbz2o.jpg"
                    alt="Third slide"
                  />
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="d-flex carousel justify-content-md-between align-items-md-center">
                  <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627129136/Project%204/f4_lux3nr.jpg"
                    alt="Fourth slide"
                  />
                  <h3>Fourth slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </div>
              </Carousel.Item>
            </Carousel>
            <span className="logo-emoji" role="img" aria-label="logo">📀</span>
          </h1>
        </div>
      </div>
    </section>
  )
}
export default Home




