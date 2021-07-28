import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
// import Collapse from 'react-bootstrap/Collapse'


const About = () => {

  // return (
  //   function Example() {
  //     const [open, setOpen] = useState(false);

  return (
    <>
      <section id="body-content" className="clearfix">
        <div className="container">
          <h1>My Hobbies</h1>
          <p>I will enjoy cycling, exercising and walking in nature.</p>
          {/* <article id="article-01">
            <p>I enjoy cycling</p>
            <img
              className="d-block w-50" 
              src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627456360/Project%204/cycle1_clsr8b.jpg"
              alt="Second slide"
            /> */}
          
          {/* <img
              className="d-block w-50" 
              src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627456970/Project%204/walk_e1u8s5.jpg"
              alt="Second slide"
            /> */}
          {/* </article> */}
          <div className="github">
            <p className="font-monospace">Maurice <i className="fas fa-hand-point-right"></i><Card.Link className="font-monospace" href="https://github.com/arjunDoel96"><i className="fab fa-github-square icon"></i></Card.Link></p>
          </div>
        </div>
      </section>

      <CardGroup>

        <Card className="walk">
          <img className="image-border animate__animated animate__zoomIn" variant="top" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627456360/Project%204/cycle1_clsr8b.jpg" />
        </Card>

        <Card className="walk">
          <img className="image-border animate__animated animate__zoomIn" variant="top" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627457771/Project%204/nature_emfd4k.jpg" />
        </Card>

        <Card className="Others">
          <img className="image-border animate__animated animate__zoomIn others-img" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627456970/Project%204/walk_e1u8s5.jpg" />
          <h3>Others</h3>
          <p>
            Good... <span id="other-name">others</span> <br />
            Bad   <br />
            <br />
            
          </p>
        </Card>
      </CardGroup >
    </>

  )
}

export default About
