import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-left">
          <h1>Our Story</h1>
          <p className="txt-big">Until I discovered cooking I was never
            really interested in anything</p>
          <p className="txt-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ducimus enim quis minima numquam amet!</p> <br />
          <p className="txt-small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque maxime laborum, repellendus necessitatibus quas debitis id dolore consequuntur tenetur saepe esse? Quas nisi sapiente id nemo similique optio error! Nulla?</p>
          <div className="contacts">
            <div className="mail">
                <i class="fa-solid fa-envelope-open-text fa-2xl" id='micon'></i>
              <div className="mail-txt">
                <p className="mail-txt-big">Email</p>
                <p className="mail-txt-small">Support@Email.com</p>
              </div>
            </div>
            <div className="phone">
            <i class="fa-solid fa-phone fa-2xl" id='picon'></i>
              <div className="phone-txt">
                <p className="phone-txt-big">Phone</p>
                <p className="phone-txt-small">+91 12345 12345</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-right">
          <h2>BOOK A TABLE</h2>
          <form>
            <input type="text" name="name" id="name" placeholder='Name' /> <br />
            <input type="email" name="email" id="email" placeholder='Email' /> <br />
            <select name="persons" id="persons" placeholder='Person'>
              <option value="" disabled selected>Person</option>
              <option value="person1">01 Person</option>
              <option value="person2">02 Person</option>
              <option value="person3">03 Person</option>
            </select> <br />
            <input type="date" name="date" id="date" placeholder='Date' /> <br />
            <button id='Btn01'>BOOK NOW</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default About
