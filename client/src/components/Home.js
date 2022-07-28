import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="homepage">
      <h1>James Bond</h1>
      <div>
        <button className="homeButtons">
          <Link to="/bonds">Bonds</Link>
        </button>
        <button className="homeButtons">
          <Link to="/movies">Movies</Link>
        </button>
        <button className="homeButtons">
          <Link to="/villains">Villains</Link>
        </button>
        <button className="homeButtons">
          <Link to="add">Add a Villain</Link>
        </button>
      </div>
    </div>
  )
}

export default Home
