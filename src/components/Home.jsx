import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="bd">
        <div className="slider-show">
         <div id="AA">Welcome to <br/> my website</div> 
        <div className="d">I made some list of mammels,bird and fish.</div> 
        </div>

        <div className="content">
          <div className="first1">
            <div className="textl">
              <p><h1 id="h">WANT TO LEARN ABOUT THE<br /> TOP 10 ANIMALS</h1></p>
              <button className='buton1'>
                <Link to='/top10_mammel'><b>Learn More</b></Link>
              </button>
            </div>
          </div>

          <div className="second2">
            <div className="textr">
              <p><h1 id="h">WANT TO LEARN ABOUT THE<br /> TOP 10 BIRD</h1></p>
              <button className='buton2'>
                <Link to='/top10_bird'><b>Learn More</b></Link>
              </button>
            </div>
          </div>

          <div className="third3">
            <div className="textl">
              <p><h1 id="h">WANT TO LEARN ABOUT THE<br /> TOP 10 FISH</h1></p>
              <button className='buton1'>
                <Link to='/top10_fish'><b>Learn More</b></Link>
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home;
