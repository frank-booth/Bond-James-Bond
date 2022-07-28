import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const MovieCard = (props) => {
  const [movie, setMovie] = useState('')
  let { id } = useParams()

  useEffect(() => {
    let selectedMovie = props.movies.find((movie) => movie.id === parseInt(id))
    setMovie(selectedMovie)
  }, [props.movies, id])
  console.log(movie)
  // useEffect(() => {
  //   const getMovie = async () => {
  //     const res = await axios.get(`http://localhost:3001/movies/${id}`)

  //     setMovies(res.data)
  //   }
  //   getMovie()
  // }, [id])

  return (
    <div>
      <h2>{movie != null ? movie.name : ''}</h2>
      <img src={movie != null ? movie.poster : ''} />
    </div>
  )
}

export default MovieCard
