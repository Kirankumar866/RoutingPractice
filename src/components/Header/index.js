// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="title-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        height="20px"
        width="20px"
        className="title-img"
      />
      <h1>Wave</h1>
    </div>
    <ul className="list-container nav-link">
      <li className="listElement">
        <Link to="/">Home</Link>
      </li>
      <li className="listElement">
        <Link to="/about">About</Link>
      </li>
      <li className="listElement">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Header
