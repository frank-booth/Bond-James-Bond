import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="navPage">
      <div className="navButtons">
        <button className="homeButtons">
          <Link
            style={{ color: 'black', fontWeight: 'bold', fontSize: '18px' }}
            to="/"
          >
            Home
          </Link>
        </button>
        <button className="homeButtons">
          <Link
            style={{ color: 'black', fontWeight: 'bold', fontSize: '18px' }}
            to="/bonds"
          >
            Bonds
          </Link>
        </button>
        <button className="homeButtons">
          <Link
            style={{ color: 'black', fontWeight: 'bold', fontSize: '18px' }}
            to="/movies"
          >
            Movies
          </Link>
        </button>
        <button className="homeButtons">
          <Link
            style={{ color: 'black', fontWeight: 'bold', fontSize: '18px' }}
            to="/villains"
          >
            Villains
          </Link>
        </button>
        <button className="homeButtons">
          <Link
            style={{ color: 'black', fontWeight: 'bold', fontSize: '18px' }}
            to="add"
          >
            Add a Villain
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Nav
