import React from 'react';
import map from './project/all/location.jpg';

export default function Contact() {
  return (
    <div className='Contact x'>

      <div className="box fcs">

        <h3>Contact us</h3>

        <div className="all">

          <img src={map} alt="location" />

          <form>

            <input type="text" placeholder='Full name' />

            <input type="email" placeholder='E-mail' />

            <input type="text" placeholder='Phone' />

            <textarea placeholder='Message'></textarea>

            <button>Send</button>

          </form>

        </div>

      </div>

    </div>
  )
}