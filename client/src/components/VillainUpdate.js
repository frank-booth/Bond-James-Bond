import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const VillainUpdate = () => {
  // I used this as a reference to get the id over: https://stackoverflow.com/questions/72017435/how-can-i-pass-parameters-to-route-with-navigate-function-in-react
  let location = useLocation()
  const initialState = {
    name: `${location.state.id.name}`,
    movies: `${location.state.id.movies}`,
    description: `${location.state.id.description}`,
    image: `${location.state.id.image}`,
    bond: `${location.state.id.bond}`
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.put(
      `http://localhost:3001/villains/${location.state.id._id}`,
      formState
    )
    console.log(res)
    setFormState(initialState)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Villain Name:</label>
        <input
          id="name"
          type="text"
          onChange={handleChange}
          value={formState.name}
        />
        <label htmlFor="movies">Movies:</label>
        <input
          id="movies"
          type="text"
          onChange={handleChange}
          value={formState.movies}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          cols="30"
          rows="10"
          value={formState.description}
          onChange={handleChange}
        ></textarea>
        <label htmlFor="image">Image Url:</label>
        <input
          type="text"
          id="image"
          onChange={handleChange}
          value={formState.image}
        />
        <label htmlFor="">Choose a Bond:</label>
        <select id="bond" onChange={handleChange} value={formState.bond}>
          <option value="Sean Connery">Sean Connery</option>
          <option value="George Lazenby">George Lazenby</option>
          <option value="Roger Moore">Roger Moore</option>
          <option value="Timothy Dalton">Timothy Dalton</option>
          <option value="Pierce Brosnan">Pierce Brosnan</option>
          <option value="Daniel Craig">Daniel Craig</option>
        </select>
        <button className="formButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default VillainUpdate
