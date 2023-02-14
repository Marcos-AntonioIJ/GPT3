import React from 'react'
import './whatgpt3.css'
import Feature from '../../components/feature/Feature'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='whgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title='What is GPT3' text='Pellentesque quis tristique sapien, et malesuada mauris. Vivamus nec dolor dignissim, volutpat nisl bibendum, mollis est. Nunc ultrices vitae massa eu rutrum. Nulla a nisl vel libero rutrum condimentum vel quis lectus'/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title='Chatbots' text='Pellentesque quis tristique sapien, et malesuada mauris. Vivamus nec dolor dignissim, volutpat nisl bibendum, mollis est. Nunc ultrices vitae massa eu rutrum. Nulla a nisl vel libero rutrum condimentum vel quis lectus.'/>
        <Feature title='Knowledgebase' text='Pellentesque quis tristique sapien, et malesuada mauris. Vivamus nec dolor dignissim, volutpat nisl bibendum, mollis est. Nunc ultrices vitae massa eu rutrum. Nulla a nisl vel libero rutrum condimentum vel quis lectus.'/>
        <Feature title='Education' text='Pellentesque quis tristique sapien, et malesuada mauris. Vivamus nec dolor dignissim, volutpat nisl bibendum, mollis est. Nunc ultrices vitae massa eu rutrum. Nulla a nisl vel libero rutrum condimentum vel quis lectus.'/>
      </div>
    </div>
  )
}

export default WhatGPT3