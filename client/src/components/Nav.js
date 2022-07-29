import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="navPage">
      <div className="navButtons">
        <button className="homeButtons">
          <Link className="links" to="/">
            Home
          </Link>
        </button>
        <button className="homeButtons">
          <Link className="links" to="/bonds">
            Bonds
          </Link>
        </button>
        <button className="homeButtons">
          <Link className="links" to="/movies">
            Movies
          </Link>
        </button>
        <button className="homeButtons">
          <Link className="links" to="/villains">
            Villains
          </Link>
        </button>
        <button className="homeButtons">
          <Link className="links" to="add">
            Add a Villain
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Nav
