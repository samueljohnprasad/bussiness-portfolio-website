import React from "react";
//import Icons
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import teamwork from '../img/teamwork.svg'
import money from '../img/money.svg'
import home2 from '../img/home2.png'

export default function ServicesSection() {
  return (
    <div className="services">
      <div className="description">
        <h2>
          high <span>quantity</span> services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
                <img src={clock} alt='clock'/>
                <h3>Efficient</h3>
            </div>
            <p> Lorem ispum </p>
          </div>
          <div className="card">
            <div className="icon">
                <img src={teamwork} alt='clock'/>
                <h3>teamwork</h3>
            </div>
            <p> Lorem ispum </p>
          </div>
          <div className="card">
            <div className="icon">
                <img src={diaphragm} alt='clock'/>
                <h3>diaphragm</h3>
            </div>
            <p> Lorem ispum </p>
          </div>
          <div className="card">
            <div className="icon">
                <img src={money} alt='clock'/>
                <h3>Affortable </h3>
            </div>
            <p> Lorem ispum </p>
          </div>
        </div>
      </div>
      <div className='image'>
          <img src={home2} alt='home2'/>

      </div>
    </div>
  );
}
