import React from "react";
//import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import teamwork from "../img/teamwork.svg";
import money from "../img/money.svg";
import home2 from "../img/home2.png";
import { About, Discription, Image, Hide } from "../pages/styles";
import styled from "styled-components";

export default function ServicesSection() {
  return (
    <Services>
      <Discription>
        <h2>
          high <span>quantity</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p> Lorem ispum </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="clock" />
              <h3>teamwork</h3>
            </div>
            <p> Lorem ispum </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="clock" />
              <h3>diaphragm</h3>
            </div>
            <p> Lorem ispum </p>
          </Card>

          <Card>
            <div className="icon">
              <img src={money} alt="clock" />
              <h3>Affortable </h3>
            </div>
            <p> Lorem ispum </p>
          </Card>
        </Cards>
      </Discription>
      <Image>
        <img src={home2} alt="home2" />
      </Image>
    </Services>
  );
}

const Services = styled(About)`
  h2{
      padding-bottom:5rem;

  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
   display:flex;
   flex-wrap:wrap;
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3{
        margin-left:1rem;
        background:white;
        color:black;
        padding:1rem
    }
  }
`;
