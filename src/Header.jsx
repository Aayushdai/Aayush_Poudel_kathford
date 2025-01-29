import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <ul className='bg-black text-white d-flex justify-evenly list-unstyled py-2 fs-2'>
      <li>
      <Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/gallery'>Gallery</Link></li>
      <li className="dropdown">
          <a href="#" className="dropdown-toggle">Top 10</a>
          <ul className="dropdown-menu">
            <li><Link to="/top10_mammel"> Mammel</Link></li>
            <li><Link to="/top10_bird"> Birds</Link></li>
            <li><Link to="/top10_fish"> Fish</Link></li>
          </ul>
        </li>
        
    
        
    </ul>
  )
}

export default Header
