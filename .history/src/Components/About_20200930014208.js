import React, { Component } from 'react';
import { Button } from './Button'
import './Header.css'
import '../App.css'
import cv from '../cv.pdf'

function Header() {
   const showCV = () => {
      window.open(cv)
   }
 

         return (
            <section id="about">
               <div className="row">
                  <div className="three columns">
                     <img className="profile-pic" src={profilepic} alt="Baron Zhou profio pic" />
                  </div>
                  <div className="nine columns main-col">
                     <h2>About Me</h2>

                     <p>{bio}</p>
                     <div className="row">
                        <div className="columns contact-details">
                           <h2>Contact Details</h2>
                           <p className="address">
                              <span>{name}</span><br />
                              <span>{street}<br />
                                 {city} {state}, {zip}
                              </span><br />
                              <span>{phone}</span><br />
                              <span>{email}</span>
                           </p>
                        </div>
                        <div className="columns download">
                           <p>
                              <a href="../cv.pdf" >Download</a>

                              <Button
                                 onClick={showCV}
                              >
                                 See My CV <i className='fas fa-file-alt' />
                              </Button>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

            </section>
         );
      }
   }
}
   export default About;
