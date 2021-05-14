import React from "react";
import home1 from '../img/home1.png'
//styled
import styled from 'styled-components'
import {About ,Discription,Image,Hide} from '../pages/styles'

 function AboutSection() {
  return (
    <About>
      <Discription>
        <div className="title">
          <Hide>
            <h2>we work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>Contact us for any photography or videography.
            We have professionals with amazing skills.
        </p>
        <button>Contact us</button>
      </Discription>
      <Image>
          <img src={home1} alt='guy with a camera'/>
      </Image>
    </About>
  );
}

export default  AboutSection