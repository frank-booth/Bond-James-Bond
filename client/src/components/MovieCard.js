import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const MovieCard = (props) => {
  const [movie, setMovie] = useState('')
  let { id } = useParams()

  useEffect(() => {
    let selectedMovie = props.movies.find((movie) => movie.id === parseInt(id))
    setMovie(selectedMovie)
  }, [props.movies, id])

  return movie ? (
    <div>
      <h2>{movie.name}</h2>
      <img src={movie.poster} />
    </div>
  ) : null
}

export default MovieCard
