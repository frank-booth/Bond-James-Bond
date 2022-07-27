import { useState, useEffect } from 'react'
import axios from 'axios'

const Movies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get('http://localhost:3001/movies')
      setMovies(res.data)
      console.log(movies)
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
