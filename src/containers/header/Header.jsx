import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
        <div className='gpt3__header-content'>
          <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAI</h1>
          <p>Sed ut tortor vitae tortor porttitor porta. Pellentesque quis tristique sapien, et malesuada mauris. Vivamus nec dolor dignissim, volutpat nisl bibendum, mollis est. Nunc ultrices vitae massa eu rutrum. Nulla a nisl vel libero rutrum condimentum vel quis lectus. Etiam id elit vitae nisi dignissim euismod non sit amet quam.</p>
          <div className='gpt3__header-content__input'>
              <input type='email' placeholder='Your email address'></input>
              <button type='button'>Get Started</button>
          </div>
          <div className='gpt3__header-content__people'>
            <img src={people} alt='people'></img>
            <p>1.600 people requested our services in last 24 hours</p>
          </div>
        </div>
        <div className='gpt3__header-image'>
          <img src={ai} alt='AI'></img>
        </div>
    </div>
  )
}

export default Header