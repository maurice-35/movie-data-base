// import React, { useState } from 'react'
// import { Form, Col, Button } from 'react-bootstrap'
// import axios from 'axios'
// import { getTokenFromLocalStorage } from '../auth/helpers/auth'
// import { useHistory } from 'react-router'


// const Profile = () => {
//   // eslint-disable-next-line no-unused-vars
//   const history = useHistory()
//   const [userData, setUserData] = useState({
//     email: '',
//     first_name: '',
//     last_name: '',
//     profile_image: '',
//   })
  
  
//   const handleSubmit = async (event) => {
//     event.preventDefault()
//     history.push('/user')
//     try {
//       await axios.post('/api/profile', userData, {
//         headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
//       })
    
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   const handleChange = (event) => {
//     const newUser = { ...userData, [event.target.name]: event.target.value }
//     UserData(newUser)
//     console.log(newUser)
//   }
//   const handleUpload = async () => {
//     try {
//       await axios.post('https://api.cloudinary.com/v1_1/inetab/image/upload', userData.image, {
//         headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
//       })
//     } catch (err) {
//       console.log(err)
//     }
//   }
  
//   return (
//     <div className="background-color">
//       <div className="form-container text-monospace">
//         <Form  className="animate__animated animate__zoomIn"onSubmit={handleSubmit}>
//           <h3 className="pet-form">Create your Movie Profile</h3>
//           <Form.Group className="form-row">
//             <Col xs={7}>
//               <Form.Label>User Name</Form.Label>
//               <Form.Control onChange={handleChange} name="name" value={userData.title} placeholder="Your dog or cats name" required/>
//             </Col>
//             <Col xs={7}>
//               <Form.Label>Breed</Form.Label>
//               <Form.Control onChange={handleChange} name="breed" value={userData.}placeholder="Your dog or cat breed"  required/>
//             </Col>
//           </Form.Group>
//           <Form.Group className="form-row" controlId="formGridGender">
//             <Col xs={2}>
//               <Form.Label>Gender</Form.Label>
//               <Form.Control  onChange={handleChange} name="gender" value={petData.name} as="select" defaultValue="Gender" required>
//                 <option>Either</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//               </Form.Control>
//             </Col>
//             <Form.Group controlId="formGridAge">
//               <Col xs={5}>
//                 <Form.Label>Age</Form.Label>
//                 <Form.Control onChange={handleUpload} name="age" value={petData.year}/>
//               </Col>
//             </Form.Group>
//             {/* <Form.File onChange={handleChange} name="image" value={petData.image} id="pet-form" label="Pet photo upload" />
//             <Button onClick={handleUpload}>Upload Image</Button> */}
          
//             <Form.Group controlId="formGridAbout">
            
//             </Form.Group>
//           </Form.Group>
//           <Button className="submit-button"type="submit">Submit</Button>

//         </Form>
//       </div>
//     </div>
   
//   )
// }

// export default Profile
