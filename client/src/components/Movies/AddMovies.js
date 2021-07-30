import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../../helpers/auth'
import MovieForm from './MovieForm'





const AddMovies = () => {

  const history = useHistory()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    video: '',
    audio_language: '',
    run_time_mins: '',
    year: '',
    view_count: '',
    worth_a_watch: '',
    owner: '',

  })
  const [errors, setErrors] = useState({
    title: '',
    description: '',
    image: '',
    video: '',
    audio_language: '',
    run_time_mins: '',
    year: '',
    view_count: '',
    worth_a_watch: '',
    owner: '',
  })

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    const newErrors = { ...errors, [event.target.name]: '' }
    setFormData(newFormData)
    setErrors(newErrors)
  }
  console.log('changing')

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post('/api/movies/', formData,
        {
          headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
        })
      console.log(formData)

      history.push('/movies')
    } catch (err) {
      setErrors(err.response.data.errors)
      console.log(err)
    }
  }


  return (
    <section className="section">
      <div className="container">
        <MovieForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formData={formData}
          errors={errors}
          buttonText="Make my Cheese"
        />
      </div>
    </section>
  )
}

export default AddMovies
