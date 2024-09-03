import React from 'react'
import ApplicationLogo from '@/Components/ApplicationLogo';
import Cayor_logo from '/public/build/images/Cayor_Logo.jpg';

const About = () => {
  return (
    <>
     <div className='justify-center items-center'>
     <img alt="" src={ApplicationLogo}/>
     <h1>LifeLine</h1>
      <p class="version">Version 2.0.0  </p>
      <p>Services Provided: by</p>
      <img src={Cayor_logo} width={100}></img>
      <br></br>
      <p class="copy">@ 2024 Cayor Enterprises Ltd</p>
      <p class="link"><a href="https://cayorenterprises.com">www.cayorenterprises.com</a> | +220 7222967</p>

     </div>
    </>

  )
}

export default About
