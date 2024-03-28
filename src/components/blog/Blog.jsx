import React from 'react'
import './Blog.css'

function Blog() {
  return (
    <>
      <div id="blog">
        <div className="head">Blog</div>
        <div className="head2">LATEST NEWS</div>
        <div className="line">
          <div className="line1"></div>
          <div className="line2"></div>
        </div>
        <div className="text1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rem officiis consequuntur eveniet omnis, voluptatum voluptatibus id molestias animi perspiciatis corrupti.</div>
        <div className="mainssec">
          <div className="ssec1">
            <div className="imgsec">
              <img src="src/images/img7.png" alt="img" id='img7' />
              <div className="textt11">SPECIAL BURGER</div>
              {/* <img src="src/images/icon1.png" alt="img" id='icon1' /> */}
              <i class="fa-solid fa-user" id='icon1'></i>
              <div className="textt22">ADMIN</div>
              <i class="fa-solid fa-calendar-days" id='icon2'></i>
              <div className="textt33">24 AUGUST 2022</div>
            </div>
            <div className="subsec">
              <div className="sometext1">blanditiis amet ut voluptas voluptatem qui dolores ipsa. Et totam obcaecati</div>
              <div className="sometext2">Lorem ipsum dolor sit amet. Non voluptatem esse aut molestiae exercitationem eos sint ullam? Id blanditiis amet ut voluptas voluptatem qui dolores ipsa. Et totam obcaecati ut  voluptatem quod ad accusantium odio. Et voluptas Quis</div>
              <button id='btn10'>READ MORE</button>
            </div>
          </div>
          <div className="ssec2">
            <div className="ssec22">
              <img src="src/images/img8.png" alt="img" id='img8' />
              <i class="fa-solid fa-user" id='icon3'></i>
              <div className="sometext3">ADMIN</div>
              <i class="fa-solid fa-calendar-days" id='icon4'></i>
              <div className="sometext4">24 AUGUST 2022</div>
              <div className="sometext5">molestiae exercitationem eos sint ullam? Id blanditiis amet</div>
              <div className="sometext6">Lorem ipsum dolor sit amet. Non voluptatem esse aut molestiae exercitationem eos sint ullam? Id blanditiis amet ut voluptavoluptatem qui dolores ipsa. Et totam obcaecati ut</div>
            </div>
            <hr id='hr2' />
            <div className="ssec23">
              <img src="src/images/img9.png" alt="img" id='img9' />
              <i class="fa-solid fa-user" id='icon3'></i>
              <div className="sometext3">ADMIN</div>
              <i class="fa-solid fa-calendar-days" id='icon4'></i>
              <div className="sometext4">24 AUGUST 2022</div>
              <div className="sometext5">molestiae exercitationem eos sint ullam? Id blanditiis amet</div>
              <div className="sometext6">Lorem ipsum dolor sit amet. Non voluptatem esse aut molestiae exercitationem eos sint ullam? Id blanditiis amet ut voluptavoluptatem qui dolores ipsa. Et totam obcaecati ut</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
