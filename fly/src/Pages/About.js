import React from 'react'
import './Aboutcss.css';
import img from "E:\\21P135 React Js\\fly\\src\\Images\\plane-img.png";

export default function About() {
  return (
    <div className='about'>
    <div className='container2'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='titlepage'>
            <h2>ABOUT OUR TRAVEL AGENCY</h2>
            <span>fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</span>
          </div>
        </div>
      </div>
    </div>
    <div className=''>
      <div className='container2'>
        <div className='row'>
          <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
            <div className='about-box'>
             
            <p> <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure thereThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there</span>
            <img src={img} alt='Plane'></img> 
            <div className='palne-img-area'>
            </div>
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
