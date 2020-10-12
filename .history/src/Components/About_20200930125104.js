import React from 'react';
import { Button } from './Button'

import '../App.css'
import cv from '../cv.pdf'

   function About () {
      const showCV = () => {
        window.open(cv)
      }
      return (
        <div className='header-container'>
          <video src='/motionplaces fire-Oct2018.mp4' autoPlay loop muted />
          <h1>Rainie Liu</h1>
          <p>Software Engineer based in Sydney</p>
          <p>The days break you are the days make you</p>
          <div className='header-btns'>
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
            See My Projects
            </Button>
            <Button
              className='btns'
              buttonStyle='btn--primary'
              buttonSize='btn--large'
              onClick={showCV}
            >
             See My CV <i className='fas fa-file-alt' />
            </Button>
          </div>
        </div>
      )
    }
    
   export default About;
