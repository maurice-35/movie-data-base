/* eslint-disable indent */
import React, { useState } from 'react'
import axios from 'axios'
// import Form from 'react-bootstrap/Form'


const Register = () => {
  const [formdata, setFormdata] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    first_name: '',
    last_name: '',
    profile_image: '',
  })
  // console.log(formdata)
  const handleChange = (event) => {
    const newFormdata = { ...formdata, [event.target.name]: event.target.value }
    setFormdata(newFormdata)
  }

  const handleSubmit = async (event) => {
  event.preventDefault()
    try {
      await axios.post('/api/register', formdata)
    } catch (err) {
      console.log(err.response)
    }
    // setFormdata()
  }


  // console.log('formdata on state', formdata)
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form onSubmit={handleSubmit} className="column is-half is-offset-one-quarter box">
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  // className={`input ${errors.username ? 'is-danger' : ''}`}
                  placeholder="Username"
                  onChange={handleChange}
                  name="username"
                  value={formdata.username}
                />
              </div>
              {/* {errors.username && <p className="help is-danger">{errors.username}</p>} */}
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input

                  // className={`input ${errors.email ? 'is-danger' : ''}`}
                  placeholder="Email"
                  onChange={handleChange}
                  name="email"
                  value={formdata.email}
                />
              </div>
              {/* {errors.email && <p className="help is-danger">{errors.email}</p>} */}
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  type="password"
                  // className={`input ${errors.password ? 'is-danger' : ''}`}
                  placeholder="Password"
                  onChange={handleChange}
                  name="password"
                  value={formdata.password}
                />
              </div>
              {/* {errors.password && <p className="help is-danger">{errors.password}</p>} */}
            </div>
            <div className="field">
              <label className="label">Password Confirmation</label>
              <div className="control">
                <input
                  type="password"
                  // className={`input ${errors.passwordConfirmation ? 'is-danger' : ''}`}
                  placeholder="Password Confirmation"
                  onChange={handleChange}
                  name="passwordConfirmation"
                  value={formdata.passwordConfirmation}
                />
              </div>
              {/* {errors.passwordConfirmation && <p className="help is-danger">{errors.passwordConfirmation}</p>} */}
            </div>
            <div className="field">
              <label className="label">First Name</label>
              <div className="control">
                <input
                  placeholder="First name"
                  onChange={handleChange}
                  name="first_name"
                  value={formdata.first_name}
                />
              </div>
              <div className="field">
                <label className="label">Last Name</label>
                <div className="control">
                  <input
                    placeholder="Last name"
                    onChange={handleChange}
                    name="last_name"
                    value={formdata.last_name}
                  />
                </div>
                <div className="field">
                  <label className="label">Profile image</label>
                  <div className="control">
                    <input
                      placeholder="Upload profile image"
                      onChange={handleChange}
                      name="profile_image"
                      value={formdata.profile_image}
                    />
                  </div>
                  <div className="field">
                    <button type="submit" className="button is-fullwidth is-warning">Register Me!</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    // <Form>
    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>User name</Form.Label>
    //     <Form.Control type="username" placeholder="Enter username" />
    //     <Form.Text className="text-muted">
    //       Email remains confidential.
    //     </Form.Text>
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Email</Form.Label>
    //     <Form.Control type="email" placeholder="Email" />
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control type="password" placeholder="Password" />
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Password confirmation</Form.Label>
    //     <Form.Control type="passwordConfirmation" placeholder="Password confirmation" />
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>First name</Form.Label>
    //     <Form.Control type="firstName" placeholder="First name" />
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Last name</Form.Label>
    //     <Form.Control type="lastName" placeholder="Last name" />
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //     <Form.Check type="checkbox" label="Check me out" />
    //   </Form.Group>
    //   <button variant="primary" type="submit">
    //     Submit
    //   </button>
    // </Form>
  )
}

export default Register