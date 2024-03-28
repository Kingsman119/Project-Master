import React from 'react'
import './Chef.css'

function Chef() {
  return (
    <>
      <div className='chefPage'>
        <p className="chef">Chefs</p>
        <p className="heading">MEET OUR EXPERTS</p>
        <img id='ul' src="src/images/underline.png" />
        <p className='para'>Lorem ipsum dolor sit amet. Non voluptatem esse aut molestiae exercitationem eos sint ullam? <br />
          Id blanditiis amet ut voluptas voluptatem qui dolores ipsa. Et totam obcaecati ut</p>
        <div className='chefs'>
          <section>
            <img src="src/images/chef1.png" id='chef1' />
            <div class="namebox">
              <p class="namee">Dhruvpal Bhatiya</p>
              <p class="post">Prep Chef</p>
            </div>
            <p className='pone'>Lorem ipsum dolor sit amet. Non voluptatem esse aut molestiae exercitationem eos sint </p>
            <div class="iconn">
              <img src="src/images/fb.png" ></img>
              <img src="src/images/insta.png" ></img>
              <img src="src/images/link.png" ></img>
              <img src="src/images/twitter.png" ></img>
            </div>
          </section>
          <section>
            <img src="src/images/chef2.png" id='chef2' />
            <div class="namebox">
              <p class="namee">Pavan Sharma</p>
              <p class="post">Chef</p>
            </div>
            <p className='pone'>Lorem ipsum dolor sit amet. Non voluptatem esse aut molestiae exercitationem eos sint </p>
            <div class="iconn">
              <img src="src/images/fb.png" ></img>
              <img src="src/images/insta.png" ></img>
              <img src="src/images/link.png" ></img>
              <img src="src/images/twitter.png" ></img>
            </div>
          </section>
          <section>
            <img src="src/images/chef3.png" id='chef3' />
            <div class="namebox">
              <p class="namee">Piyush Barjatiya</p>
              <p class="post">Pastry Chef</p>
            </div>
            <p className='pone'>Lorem ipsum dolor sit amet. Non voluptatem esse aut molestiae exercitationem eos sint </p>
            <div class="iconn">
              <img src="src/images/fb.png" ></img>
              <img src="src/images/insta.png" ></img>
              <img src="src/images/link.png" ></img>
              <img src="src/images/twitter.png" ></img>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Chef
