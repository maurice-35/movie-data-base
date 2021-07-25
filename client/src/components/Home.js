import React from 'react'

const Home = () => {

  return (
    <section className="hero is-fullheight-with-navbar is-info">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1 has-text-centered">
            <span className="logo-emoji" role="img" aria-label="logo">📀</span>
            Movies
            <span className="logo-emoji" role="img" aria-label="logo">📀</span>
          </h1>
        </div>
      </div>
    </section>
  )
}
export default Home




/* eslint-disable react/jsx-no-duplicate-props */
// import React, { useEffect } from 'react'
// import axios from 'axios'
// import { Carousel } from 'react-bootstrap'




// const Home = () => {

//   useEffect(() => {
//     const getData = async () => {
//       const { data } = await axios.get('/api/movies')
//       console.log(data)
//       // setMovies(data)
//     }
//     getData()
//   })

//   return (
//     <>
//       <div id="header-wrapper" className="clearfix">
//         <div id="search-container" className="clearfix">
//           <select id="search movies" onChange="location =this.options[this.selectedIndex.value;">
//             <option>Browse My Movies</option>
//             <option value="https://www.youtube.com/watch?v=loPCgi1S3ac"></option>
//             <option value="https://youtu.be/aK-X2d0lJ_s"></option>
//           </select>

//           <div>
//             <header>
//               <span id="main-body-button">Movies</span>
//               <a href="#">
//                 <img src="logo" alt="My logo" id="logo"></img>
//               </a>
//               <nav id="main-nav">
//                 <ul>
//                   <li>
//                     <a href="#" title="Click Here for New Generation Entertainment"></a>
//                   </li>
//                 </ul>
//               </nav>
//             </header>
//           </div>
//         </div>
//         <div className="p-2 w-100 center">
//           <span className="text-monospace text-center fs-1">Text <i className="fas fa-heart">Text</i></span>
//           <p className="text-monospace text-center">
//             TEXT
//           </p>
//         </div>
//       </div>

//       <Carousel>
//         <Carousel.Item>
//           <div className="d-flex carousel justify-content-md-between align-items-md-center">
//             <img
//               className="d-block w-100"
//               src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627080103/Project%204/f1_zb0c0k.jpg"
//               src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627127892/Project%204/f2_ziewzk.jpg"
//               alt="First slide"
//             />
//             <p className="text-monospace"><q>New Generation Entertainment!</q> The Beatles and Us</p>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </div>
//         </Carousel.Item>
//         <Carousel.Item>
//           <div className="d-flex carousel justify-content-md-between align-items-md-center">
//             <img
//               className="d-block w-100"
//               src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627080103/Project%204/f1_zb0c0k.jpg"
//               alt="Second slide"
//             />
//             <p></p>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </div>
//         </Carousel.Item>
//         <Carousel.Item>
//           <div className="d-flex carousel justify-content-md-between align-items-md-center">
//             <img
//               className="d-block w-100"
//               src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627129121/Project%204/f3_usbz2o.jpg"
//               alt="Third slide"
//             />
//             <h3>Third slide label</h3>
//             <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//           </div>
//         </Carousel.Item>
//         <Carousel.Item>
//           <div className="d-flex carousel justify-content-md-between align-items-md-center">
//             <img
//               className="d-block w-100"
//               src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627129136/Project%204/f4_lux3nr.jpg"
//               alt="Fourth slide"
//             />
//             <h3>Fourth slide label</h3>
//             <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//           </div>
//         </Carousel.Item>
//       </Carousel>
//     </>
//   )
// }



// export default Home