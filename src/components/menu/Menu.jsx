import React from 'react'
import './Menu.css'

function Menu() {
  return (
    <>
      <div id='Menu'>
        <div className="head">Discover</div>
        <div className="head2">OUR MENU</div>
        <div className="line">
          <div className="line1"></div>
          <div className="line2"></div>
        </div>
        <div className="text1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rem officiis consequuntur eveniet omnis, voluptatum voluptatibus id molestias animi perspiciatis corrupti.</div>
        <div className="comp1">
          <div class="topnav">
            <a href="#all">ALL<div class="border"></div></a>
            <a href="#smoothie">SMOOTHIE<div class="border"></div></a>
            <a href="#sandwiches">SANDWICHES<div class="border"></div></a>
            <a href="#burger">BURGER<div class="border"></div></a>
            <a href="#chicken">CHICKEN<div class="border"></div></a>
            <a href="#meat">MEAT<div class="border"></div></a>
          </div>
        </div>
        <div className="comp2">
          <div className="sec1">
            <div className="img1">
              <img src="src/images/img1.png" alt="img" id='imgwd' />
              <div className="icon">₹ 600</div>
              <div className="text1_1">Crispy Crust Pizza</div>
              <div className="text1_2">Cheese/Olive Oil/Salt</div>
              <div className="text1_3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi laboriosam in quas officiis expedita ullam inventore optio perspiciatis debitis, culpa vitae!</div>
              <hr id='hr1' />
              <button class='btn1_4'>ORDER NOW</button>
            </div>
            <div className="img2">
              <img src="src/images/img2.png" alt="img" id='imgwd' />
              <div className="icon">₹ 450</div>
              <div className="text1_1">Double Patty Burger</div>
              <div className="text1_2">Bread / Chicken / Salt</div>
              <div className="text1_3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi laboriosam in quas officiis expedita ullam inventore optio perspiciatis debitis, culpa vitae!</div>
              <hr id='hr1' />
              <button class='btn1_4'>ORDER NOW</button>
            </div>
            <div className="img3">
              <img src="src/images/img3.png" alt="img" id='imgwd' />
              <div className="icon">₹ 550</div>
              <div className="text1_1">Choko Ice cream Smoothi</div>
              <div className="text1_2">Milk / Chocolate / Cream</div>
              <div className="text1_3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi laboriosam in quas officiis expedita ullam inventore optio perspiciatis debitis, culpa vitae!</div>
              <hr id='hr1' />
              <button class='btn1_4'>ORDER NOW</button>
            </div>
          </div>
          <div className="sec2">
            <div className="img4">
              <img src="src/images/img4.png" alt="img" id='imgwd' />
              <div className="icon">₹ 720</div>
              <div className="text1_1">Chicken Crispy</div>
              <div className="text1_2">Cheese / Olive oil / Chicken</div>
              <div className="text1_3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi laboriosam in quas officiis expedita ullam inventore optio perspiciatis debitis, culpa vitae!</div>
              <hr id='hr1' />
              <button class='btn1_4'>ORDER NOW</button>
            </div>
            <div className="img5">
              <img src="src/images/img5.png" alt="img" id='imgwd' />
              <div className="icon">₹ 330</div>
              <div className="text1_1">Chicken Sandwich</div>
              <div className="text1_2">Bread / Olive oil / Salt</div>
              <div className="text1_3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi laboriosam in quas officiis expedita ullam inventore optio perspiciatis debitis, culpa vitae!</div>
              <hr id='hr1' />
              <button class='btn1_4'>ORDER NOW</button>
            </div>
            <div className="img6">
              <img src="src/images/img6.png" alt="img" id='imgwd' />
              <div className="icon">₹ 800</div>
              <div className="text1_1">Juicy Steak</div>
              <div className="text1_2">Steak / Olive oil / Salt</div>
              <div className="text1_3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi laboriosam in quas officiis expedita ullam inventore optio perspiciatis debitis, culpa vitae!</div>
              <hr id='hr1' />
              <button class='btn1_4'>ORDER NOW</button>
            </div>

          </div>
        </div>
      </div>
    </>

  )
}

export default Menu
