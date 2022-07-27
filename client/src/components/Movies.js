import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
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

  return (
    <div>
      <div className="movieBox">
        {movies.map((movie) => (
          <div className="movieCard" key={movie.name}>
            <img className="posterBox" src={movie.poster} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Movies
