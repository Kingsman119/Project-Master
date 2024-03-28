import React from 'react'
import './Review.css'

function Review() {
  return (
    <>
      <div className="review">
        <h2 className='title'>Review</h2>
        <h2 className='test'>Testimonial</h2>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
        </div>
        <p className="top">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia harum fugit adipisci, non facilis dolores.</p>
        <p className="top">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, qui?</p>
        <div className="testimonial">
          <div className="pizza">
            <p className="test-head">Awesome Pizza</p>
            <p className="test-txt">Lorem ipsum dolor sit amet  adipisicing elit. Tempora.</p>
            <p className="test-txt">Lorem ipsum dolor sit, amet consectetur  Reiciendis, dolores minus.</p>
            <div className="img-bg">
              <div className="img-circle"><img src="src/images/user-1.jpg" alt="user" /></div>
            </div>
            <div className="symbol-bg"><img src="src/images/q.png" alt="quote" /></div>
            <p className="name">SAANI SAIYED</p>
            <img src="src/images/stars.png" alt="rating" className='stars' />
          </div>
          <div className="burger">
            <p className="test-head">Delicious Burger</p>
            <p className="test-txt">Lorem ipsum dolor sit amet  adipisicing elit. Tempora.</p>
            <p className="test-txt">Lorem ipsum dolor sit, amet consectetur  Reiciendis, dolores minus.</p>
            <div className="img-bg">
              <div className="img-circle"><img src="src/images/user-2.jpg" alt="user" /></div>
            </div>
            <div className="symbol-bg"><img src="src/images/q.png" alt="quote" /></div>
            <p className="name">MAZHAR SHAIKH</p>
            <img src="src/images/stars.png" alt="rating" />
          </div>
        </div>
        <div className="scroll-lines">
          <div className="scroll-line-1"></div>
          <div className="scroll-line-2"></div>
        </div>
      </div>
    </>
  )
}

export default Review
