import React from 'react'
import { About } from "../pages/styles";
import styled from "styled-components";

export default function FaqSection() {
    return (
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className='question'>
                <h4>How Do I Start?</h4>
                <div className='answer'>
                    <p>Lorem ipsum</p>
                    <p>hwllo everyone</p>
                </div>
            </div>
            <div className='question'>
                <h4>Daily schedule</h4>
                <div className='answer'>
                    <p>Lorem ipsum</p>
                    <p>hwllo everyone</p>
                </div>
            </div>
            <div className='question'>
                <h4>Different Payment Methods?</h4>
                <div className='answer'>
                    <p>Lorem ipsum</p>
                    <p>hwllo everyone</p>
                </div>
            </div>
            <div className='question'>
                <h4>What product do you offer?</h4>
                <div className='answer'>
                    <p>Lorem ipsum</p>
                    <p>hwllo everyone</p>
                </div>
            </div>
            
        </Faq>
    )
}

const Faq=styled(About)`
  display:block;
  span{
      display:block;
  }
  h2{
      padding-botton:2rem;
      font-weight:lighter;
  }
  .faq-line{
      background:#cccccc;
      height:0.2rem;
      margin:2rem 0rem;
      width:100%;

  }
  .question{
      padding:3rem 0rem;
      cursor:pointer;
  }
  .answer{
      padding:2rem 0rem;
      p{
          padding:1rem 0rem;
      }
  }
`;