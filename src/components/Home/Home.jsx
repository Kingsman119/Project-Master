import React from 'react'
import './Home.css'
import Feature from '../Features/Feature'
import About from '../About/About'
import Menu from '../menu/Menu'
import Offer from '../offer/Offer'
import Chef from '../Chef/Chef'
import Review from '../Review/Review'
import Blog from '../blog/Blog'
import Map from '../Map/Map'


function Home() {
  return (
    <>

      {/* << -------------------- // HOME SECTION START // -------------------->> */}

      <div id='home'>
        <div id='homescreen'>
          <div id='content'>
            <span>Burger</span>
            <h3>Awesome Delicious <br /> Food</h3>
            <p>Lorem ipsum dolor sit amet. Aut esse provident et quibusdam Quis et maxime natus. Non similique vitae quo
              <br /> cumque pariatur et internos quia</p>
            <button id='order'>ORDER NOW</button>
          </div>
        </div>
        <img id='shape' src="src/images/shape.png" />
      </div>

      {/* << -------------------- // HOME SECTION END // -------------------->> */}

      <Feature />
      <About />
      <Menu />
      <Offer />
      <Chef />
      <Review />
      <Blog />
      <Map/>
    </>
  )
}

export default Home
