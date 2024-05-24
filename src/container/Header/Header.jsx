import React from 'react';

import './Header.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      
      <div className='app__wrapper_info'>
        <SubHeading title="Chase the new flavour"/> {/* passing props into the subHeading (title), then destructure in the subHeading jsx and then using dynamic rendering inside the jsx ({title}) */}
        <h1 className='app__header-h1'>The Key to Fine Dining</h1>
        <p className='p__opensans'>The Key to Fine DiningThe Key to Fine DiningThe Key to Fine DiningThe Key to Fine Dining</p>
        <button type='button' className='custom__button'>Explore Menu</button>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.welcome} alt='header img' />
      </div>
    </div>
  )
}

export default Header
