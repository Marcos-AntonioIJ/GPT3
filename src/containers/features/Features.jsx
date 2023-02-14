import React from 'react'
import './features.css'
import Feature from '../../components/feature/Feature'

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Maecenas ac metus tincidunt, fringilla metus iaculis, euismod ante. Quisque sed dolor convallis velit fringilla semper. Aliquam quis enim volutpat, consequat dui eget, viverra leo. Morbi libero est, efficitur eget elit non, euismod convallis enim. Proin libero ex, facilisis in gravida porta, molestie et mauris.'
  },
  {
    title: 'Improving end distrusts instantly',
    text: 'Maecenas ac metus tincidunt, fringilla metus iaculis, euismod ante. Quisque sed dolor convallis velit fringilla semper. Aliquam quis enim volutpat, consequat dui eget, viverra leo. Morbi libero est, efficitur eget elit non, euismod convallis enim. Proin libero ex, facilisis in gravida porta, molestie et mauris.'
  },
  {
    title: 'Improving end distrusts instantly',
    text: 'Maecenas ac metus tincidunt, fringilla metus iaculis, euismod ante. Quisque sed dolor convallis velit fringilla semper. Aliquam quis enim volutpat, consequat dui eget, viverra leo. Morbi libero est, efficitur eget elit non, euismod convallis enim. Proin libero ex, facilisis in gravida porta, molestie et mauris.'
  },
  {
    title: 'Improving end distrusts instantly',
    text: 'Maecenas ac metus tincidunt, fringilla metus iaculis, euismod ante. Quisque sed dolor convallis velit fringilla semper. Aliquam quis enim volutpat, consequat dui eget, viverra leo. Morbi libero est, efficitur eget elit non, euismod convallis enim. Proin libero ex, facilisis in gravida porta, molestie et mauris.'
  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
        <div className='gpt3__features-heading'>
          <h1 className='gradient__text'>The future is now and you just need to realize it. Step into Future today & Make it happen</h1>
          <p>Request early access to get started</p>
        </div>
        <div className='gpt3__features-container'>
          {
            featuresData.map((feature, index) => <Feature text={feature.text} title={feature.title} key={feature.title + index}></Feature>)
          }
        </div>
    </div>
  )
}

export default Features