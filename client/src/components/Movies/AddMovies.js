import React, { useState } from 'react'



const AddMovies = () => {
  // const history = useHistory()
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

  
  const handleSubmit = async (event) => {
    event.preventDefault()
    
  }

  return (
    <div className="columns">
      <form
        className="column is-half is-offset-one-quarter box"
        onSubmit={handleSubmit}
      >
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              className={`input ${errors.title ? 'is-danger' : ''}`}
              placeholder="Title"
              name="title"
              onChange={handleChange}
              value={formData.title}
            />
          </div>
          {errors.name && <p className="help is-danger">{errors.name}</p>}
        </div>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <input
              className={`input ${errors.origin ? 'is-danger' : ''}`}
              placeholder="Description"
              name="description"
              onChange={handleChange}
              value={formData.description}
            />
          </div>
          {errors.description && <p className="help is-danger">{errors.description}</p>}
        </div>
        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input
              className={`input ${errors.image ? 'is-danger' : ''}`}
              placeholder="Image URL"
              name="image"
              onChange={handleChange}
              value={formData.image}
            />
          </div>
          {errors.image && <p className="help is-danger">{errors.image}</p>}
        </div>
        <div className="field">
          <label className="label">Video</label>
          <div className="control">
            <textarea
              className={`textarea ${errors.video ? 'is-danger' : ''}`}
              placeholder="Video URL"
              name="video"
              onChange={handleChange}
              value={formData.video}
            />
          </div>
          {errors.video && <p className="help is-danger">{errors.video}</p>}
          
        </div>
        <div className="field">
          <label className="label">Audio Language</label>
          <div className="control">
            <textarea
              className={`textarea ${errors.audio_language ? 'is-danger' : ''}`}
              placeholder="Audio Language"
              name="audio language"
              onChange={handleChange}
              value={formData.audio_language}
            />
          </div>
          {errors.audio_language && <p className="help is-danger">{errors.audio_language}</p>}
          
        </div>
        <div className="field">
          <label className="label">Run time in mins</label>
          <div className="control">
          </div>
          <textarea
            className={`textarea ${errors.run_time_mins ? 'is-danger' : ''}`}
            placeholder="Run time in mins"
            name="run_time_in_mins"
            onChange={handleChange}
            value={formData.run_time_mins}
          />
        </div>
        {errors.run_time_mins && (<p className="help is-danger">{errors.run_time_mins}</p>
        )}

        <div className="field">
          <label className="label">Year</label>
          <div className="control">
            <textarea
              className={`textarea ${errors.year ? 'is-danger' : ''}`}
              placeholder="Year"
              name="year"
              onChange={handleChange}
              value={formData.year}
            />
          </div>
          {errors.year && (<p className="help is-danger">{errors.year}</p>
          )}
        </div>
        <div className="field">
          <label className="label">View count</label>
          <div className="control">
            <textarea
              className={`textarea ${errors.view_count ? 'is-danger' : ''}`}
              placeholder="View count"
              name="view_count"
              onChange={handleChange}
              value={formData.view_count}
            />
          </div>
          {errors.view_count && (
            <p className="help is-danger">{errors.view_count}</p>
          )}
          <div className="field">
            <label className="label">Worth a watch</label>
            <div className="control">
              <textarea
                className={`textarea ${errors.worth_a_watch ? 'is-danger' : ''}`}
                placeholder="Worth a watch"
                name="worth a watch"
                onChange={handleChange}
                value={formData.worth_a_watch}
              />
            </div>
            {errors.worth_a_watch && (
              <p className="help is-danger">{errors.owner}</p>
            )}
            <div className="field">
              <label className="label">Owner</label>
              <div className="control">
                <textarea
                  className={`textarea ${errors.owner ? 'is-danger' : ''}`}
                  placeholder="Owner"
                  name="owner"
                  onChange={handleChange}
                  value={formData.owner}
                />
              </div>
              {errors.video && (
                <p className="help is-danger">{errors.owner}</p>
              )}
              <div className="field">
                <button type="submit" className="button is-warning is-fullwidth">
                  
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddMovies
