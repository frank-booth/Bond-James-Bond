import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import MovieCard from './MovieCard'

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
          <div
            className="movieCard"
            onClick={() => showMovie(movie)}
            key={movie.name}
          >
            <img className="posterBox" src={movie.poster} />
            <MovieCard movies={movies} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Movies
