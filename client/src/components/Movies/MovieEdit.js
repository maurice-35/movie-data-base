import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../../helpers/auth'
import MovieForm from './MovieForm'



const MovieEdit = () => {
  const history = useHistory()
  const { id } = useParams()
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
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`api/movies/${id}`)
      console.log('DATA', data)
      setFormData(data)
    }
    getData()
  }, [id])

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    const newErrors = { ...errors, [event.target.name]: '' }
    setFormData(newFormData)
    setErrors(newErrors)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.put(
        `api/movies/${id}`,
        formData,
        {
          headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
        }
      )
      history.push(`/movies/${id}`)
    } catch (err) {
      setErrors(err.response.data.errors)
    }
  }

  return (
    <section className="section">
      <div className="container">
        <MovieForm
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          buttonText="Edit a Movie"
        />
      </div>
    </section>
  )
}

export default MovieEdit