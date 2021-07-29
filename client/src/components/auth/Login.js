/* eslint-disable indent */
import React, { useState } from 'react'
import axios from 'axios'
// import Form from 'react-bootstrap/Form'


const Login = () => {
  const [formdata, setFormdata] = useState({

    email: '',
    password: '',
  })

  // console.log(formdata)
  const handleChange = (event) => {
    const newFormdata = { ...formdata, [event.target.name]: event.target.value }
    setFormdata(newFormdata)
  }
  console.log(formdata)



  const handleSubmit = async (event) => {
    console.log('FUNCTION RUNNING')
    event.preventDefault()
    try {
      const { data } = await axios.post('/api/auth/login/', formdata)
      console.log('token', data.token)
    } catch (err) {
      console.log(err.response)
    }
    console.log(formdata)
  }


  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form onSubmit={ handleSubmit }className="column is-half is-offset-one-quarter box">
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  // className={`input ${errors.username ? 'is-danger' : ''}`}
                  placeholder="Email"
                  onChange={handleChange}
                  name="email"
                  value={formdata.email}
                />
              </div>
              {/* {errors.username && <p className="help is-danger">{errors.username}</p>} */}
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  // className={`input ${errors.email ? 'is-danger' : ''}`}
                  placeholder="Password"
                  onChange={handleChange}
                  name="password"
                  value={formdata.password}
                />
              </div>
              <div className="field">
                <button type="submit" className="button is-fullwidth is-warning">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>


    // <Form>
    /* <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>User name</Form.Label>
      <Form.Control type="username" placeholder="Enter username" />
    </Form.Group> */

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
    //   <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //     <Form.Check type="checkbox" label="Check me out" />
    //   </Form.Group>
    //   <button variant="primary" type="submit">
    //     Submit
    //   </button>
    // </Form>
  )
}

export default Login