import React from 'react'
import {google, slack, atlassian, dropbox, shopify} from './imports'
import './brand.css'

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google} alt='google'></img>
      </div>
      <div>
        <img src={slack} alt='google'></img>
      </div>
      <div>
        <img src={atlassian} alt='google'></img>
      </div>
      <div>
        <img src={dropbox} alt='google'></img>
      </div>
      <div>
        <img src={shopify} alt='google'></img>
      </div>
    </div>
  )
}

export default Brand
