import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Movies = (props) => {
  const [movies, setMovies] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get('http://localhost:3001/movies')
      setMovies(res.data)
      console.log(res.data)
    }
    getMovies()
  }, [])

  const showMovie = (movie) => {
    navigate(`${movie._id}`)
  }

  return (
    <div>
      <div className="movieBox">
        {movies.map((movie) => (
          <div className="movieCard">
            <img className="posterBox" src={movie.poster} />
            <h2>{movie.year_released}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Movies
