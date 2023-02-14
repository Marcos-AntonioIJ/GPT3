import React from 'react'
import possibilityImage from '../../assets/possibility.png'
import './possibility.css'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt='possibility'></img>
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request early access to get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Vitae egestas risus pulvinar. Ut commodo sodales justo, ut bibendum dolor egestas eu. Nunc pretium molestie nulla, quis pellentesque dui volutpat nec. Donec eu urna ipsum. Quisque placerat diam felis, vitae vestibulum sem pharetra id.</p>
        <h4>Request early access to get Started</h4>
      </div>
    </div>
  )
}

export default Possibility