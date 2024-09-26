import React from 'react'
import img1 from '../../Assets/heroimg.jpg'
import './Hero.css'

export default function Hero() {
  return (
    <div className="Hero">
        <div className="hero-left">
            <h1>NEW ARRIVALS ONLY</h1>
            <div className="hero-text">
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
            <div> Latest Collections </div>
        </div>
        </div>
<div className='"hero-right'>
<img src={img1} alt="Hero"/>
</div>
    </div>
  )
}
