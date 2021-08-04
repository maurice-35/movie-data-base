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
          <p>I enjoy cycling, exercising and walking in nature.</p>
        </div>
        <div className="github">
          <p className="font-monospace">Maurice <i className="fas fa-hand-point-right"></i><Card.Link className="font-monospace" href="https://github.com/arjunDoel96"><i className="fab fa-github-square icon"></i></Card.Link></p>
        </div>
      </section>

      <CardGroup>

        <Card className="walk">
          <img className="image-border animate__animated animate__zoomIn" variant="top" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627456360/Project%204/cycle1_clsr8b.jpg" />
          <h3>Cycling</h3>
          <p>
            Cycling is one of my favourite hobbies. Not only does it help my body to be more flexible, but also helps me to understand my neighbourhood and local traffic signs.<br />
            🚦  <br />
            <br />
          </p>
        </Card>

        <Card className="walk">
          <img className="image-border animate__animated animate__zoomIn" variant="top" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627457771/Project%204/nature_emfd4k.jpg" />
          <h3>Nature</h3>
          <p>
            Site seeing is something I cherish during my spare time.<br />
            👀  <br />
            <br />
          </p>
        </Card>

        <Card className="Others">
          <img className="image-border animate__animated animate__zoomIn others-img" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627456970/Project%204/walk_e1u8s5.jpg" />
          <h3>Walking</h3>
          <p>
            Walking has been my daily routine since the start of the pandemic. This helps to improve my joint movements and increases blood flow throughout my body. <br />
            🫁  <br />
            <br />
          </p>
        </Card>
      </CardGroup >
    </>

  )
}

export default About
