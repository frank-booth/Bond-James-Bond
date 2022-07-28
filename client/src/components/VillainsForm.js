import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const VillainsForm = () => {
  let navigate = useNavigate()
  const initialState = {
    name: '',
    movies: '',
    description: '',
    image: '',
    bond: ''
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.post('http://localhost:3001/villains', formState)
    console.log(res)
    setFormState(initialState)
    navigate(-1)
  }

  return (
    <div>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <label className="labels" htmlFor="name">
            Villain Name:
          </label>
          <input
            id="name"
            type="text"
            onChange={handleChange}
            value={formState.name}
          />
          <label className="labels" htmlFor="movies">
            Movies:
          </label>
          <input
            id="movies"
            type="text"
            onChange={handleChange}
            value={formState.movies}
          />
          <label className="labels" htmlFor="description">
            Description:
          </label>
          <textarea
            id="description"
            cols="30"
            rows="10"
            value={formState.description}
            onChange={handleChange}
          ></textarea>
          <label className="labels" htmlFor="image">
            Image Url:
          </label>
          <input
            type="text"
            id="image"
            onChange={handleChange}
            value={formState.image}
          />
          <label className="labels" htmlFor="">
            Choose a Bond:
          </label>
          <select id="bond" onChange={handleChange} value={formState.bond}>
            <option value="Sean Connery">Sean Connery</option>
            <option value="George Lazenby">George Lazenby</option>
            <option value="Roger Moore">Roger Moore</option>
            <option value="Timothy Dalton">Timothy Dalton</option>
            <option value="Pierce Brosnan">Pierce Brosnan</option>
            <option value="Daniel Craig">Daniel Craig</option>
          </select>
          <button
            className="formButton"
            style={{ width: '100px', fontSize: '18px', fontWeight: 'bolder' }}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default VillainsForm
