import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="homepage">
      <h1>James Bond</h1>
      <div>
        <Link to="/bonds">Bonds</Link>
        <Link to="/movies">Movies</Link>
      </div>
    </div>
  )
}

export default Home
