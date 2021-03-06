/* eslint-disable indent */
import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { useHistory } from 'react-router-dom'
import axios from 'axios'
// import Form from 'react-bootstrap/Form'



const Register = () => {
  const history = useHistory()
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
    console.log('FUNCTION RUNNING')
  event.preventDefault()
    try {
      await axios.post('/api/auth/register/', formdata)
      history.push('/login')
    } catch (err) {
      console.log(err.response)
    }
    // console.log(formdata)
  }


  // console.log('formdata on state', formdata)
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form className="column is-half is-offset-one-quarter box" onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  placeholder="Username"
                  onChange={handleChange}
                  name="username"
                  value={formdata.username}
                />
              </div>
              
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  placeholder="Email"
                  onChange={handleChange}
                  name="email"
                  value={formdata.email}
                />
              </div>
              
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  name="password"
                  value={formdata.password}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Password Confirmation</label>
              <div className="control">
                <input
                  type="password"
                  
                  placeholder="Password Confirmation"
                  onChange={handleChange}
                  name="password_confirmation"
                  value={formdata.password_confirmation}
                />
              </div>
              
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
  
  )
}

export default Register