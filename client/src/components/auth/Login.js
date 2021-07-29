/* eslint-disable indent */
import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


const Login = () => {
  const history = useHistory()
  const [error, setError] = useState(false)
  const [formdata, setFormdata] = useState({
    email: '',
    password: '',
  })

  // console.log(formdata)
  const handleChange = (event) => {
    const newFormdata = { ...formdata, [event.target.name]: event.target.value }
    setFormdata(newFormdata)
  }
  // console.log(formdata)

  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem('token', token)
  }

  const handleSubmit = async (event) => {
    console.log('FUNCTION RUNNING')
    event.preventDefault()
    try {
      const { data } = await axios.post('/api/auth/login/', formdata)
      // console.log('token', data.token)
      setTokenToLocalStorage(data.token)
      history.push('/movies')
    } catch (err) {
      setError(true)
    }
    // console.log(formdata)
  }

  const handleFocus = () => {
    setError(false)
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form className="column is-half is-offset-one-quarter box" onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className={`input ${error ? 'is-danger' : ''}`}
                  placeholder="Email"
                  onChange={handleChange}
                  name="email"
                  value={formdata.email}
                  onFocus={handleFocus}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className={`input ${error.email ? 'is-danger' : ''}`}
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  name="password"
                  value={formdata.password}
                  onFocus={handleFocus}
                />
              </div>
              {error && <p className="help is-danger">Sorry, username or password are incorrect</p>}
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