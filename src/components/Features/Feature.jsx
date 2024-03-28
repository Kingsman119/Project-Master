import React from 'react'
import './Feature.css'
import Navbar from '../navbar/Navbar'

function Feature() {
  return (
    <>
      <div className="feature">
        <div className="features-1">
          <div className="vector"><img src="src/images/Vectorfoods.png" alt="food" /></div>
          <p className="txt-head">Quality Foods</p>
          <p className="txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae error ad nostrum dolorum corporis molestias?</p>
        </div>
        <div className="features-2">
          <img src="src/images/features-img.png" alt="dish" id='feature-img' />
        </div>
        <div className="features-3">
          <div className="vector"><img src="src/images/Scooter.png" alt="delivery" /></div>
          <p className="txt-head">Fast Delivery</p>
          <p className="txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae error ad nostrum dolorum corporis molestias?</p>
        </div>
      </div>
    </>
  )
}

export default Feature
