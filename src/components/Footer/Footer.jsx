import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-upper">
          <div className="footer-div-1">
            <div className="footer-logo">
              <img src="src/images/logo.png" alt="logo" />
            </div>
            <p className="address">404, sakar 10 Near sanand chokdi <br />railway station Road, Ahmadabad</p>
            <p className="phonee"><span>Phone :</span> +91 12345 67890</p>
            <p className="email"><span>Email :</span> Support@email.com</p>
          </div>
          <div className="footer-div-2">
            <p className="footer-title-2">FOOD MENU</p>
            <div className="underline">
              <div className="large-line"></div>
              <div className="small-line"></div>
            </div>
            <div className="footer-2-list">
              <ul>
                <li>Cheese Burger</li>
                <li>Pan Pizza</li>
                <li>Chocolate Smoothie</li>
                <li>Paneer Pizza</li>
                <li>Full Family Meal</li>
              </ul>
            </div>
          </div>
          <div className="footer-div-3">
            <p className="footer-title-3">PHOTO GALLERY</p>
            <div className="underline">
              <div className="large-line"></div>
              <div className="small-line"></div>
            </div>
            <div className="footer-3-imgs">
              <img src="src/images/Rectangle 22.png" alt="image 1" />
              <img src="src/images/Rectangle 23.png" alt="image 2" />
              <img src="src/images/Rectangle 24.png" alt="image 3" />
              <img src="src/images/Rectangle 25.png" alt="image 4" />
              <img src="src/images/Rectangle 26.png" alt="image 5" />
              <img src="src/images/Rectangle 27.png" alt="image 6" />
            </div>
          </div>
          <div className="footer-div-4">
            <p className="footer-title-4">OPENING TIMMING</p>
            <div className="underline">
              <div className="large-line"></div>
              <div className="small-line"></div>
            </div>
            <div className="footer-4-timings">
              <div className="footer-time-1">
                <p className="left">Weekdays :</p>
                <p className="right">08.00 am - 11.00 pm</p>
              </div>
              <div className="footer-time-2">
                <p className="left">Weekends :</p>
                <p className="right">09.00 am - 12.00 pm</p>
              </div>
              <div className="footer-time-3">
                <p className="left">Lunch :</p>
                <p className="right">Everyday</p>
              </div>
              <div className="footer-time-4">
                <p className="left">Dinner :</p>
                <p className="right">Everyday</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-lower">
          <hr />
          <div className="footer-lower-links">
            <p>Terms Of User</p>
            <p>License</p>
            <p>Support</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
