import React, { Component } from 'react';
import { Button } from './Button'
import './Header.css'
import '../App.css'
import cv from '../cv.pdf'
class About extends Component {


   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "images/" + this.props.data.image;
         var bio = this.props.data.bio;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;


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
                        
                     </div>
                  </div>
               </div>

            </section>
         );

      }

   }
   function Header () {
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
