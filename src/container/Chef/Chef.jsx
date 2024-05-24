import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding' id='chef'>
    
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef' />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What We We believe In</h1>

      <div className='app__chef-content'>
        
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote' />
          <p className='p__opensans'>What We We believe In What We We believe In</p>
        </div>
        <p className='p__opensans'>What We We believe InWhat We We believe InWhat We We believe InWhat We We believe InWhat We We believe InWhat We We believe InWhat We We believe InWhat We We believe InWhat We We believe InWhat We We believe InWhat We We believe InWhat We We believe InWhat We We believe InWhat We We believe InWhat We We believe InWhat We We believe InWhat We We believe InWhat We We believe In</p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt='sign' />
      </div>

    </div>
  </div>
);

export default Chef;
