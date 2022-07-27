import { useState } from 'react'
import axios from 'axios'

const VillainsForm = () => {
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

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formState)
    setFormState(initialState)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Villain Name:</label>
        <input id="name" type="text" onChange={handleChange} />
        <label htmlFor="movies">Movies:</label>
        <input id="movies" type="text" onChange={handleChange} />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          cols="30"
          rows="10"
          onChange={handleChange}
        ></textarea>
        <label htmlFor="image">Subject:</label>
        <input type="text" id="image" onChange={handleChange} />
        <label htmlFor="">Choose a Bond:</label>
        <select id="bond" onChange={handleChange}>
          <option value="bond">Sean Connery</option>
          <option value="bond">George Lazenby</option>
          <option value="bond">Roger Moore</option>
          <option value="bond">Timothy Dalton</option>
          <option value="bond">Pierce Brosnan</option>
          <option value="bond">Daniel Craig</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default VillainsForm
