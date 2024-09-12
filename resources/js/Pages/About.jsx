import React from 'react'
import ApplicationLogo from '@/Components/ApplicationLogo';
import Cayor_logo from '/public/build/images/Cayor_Logo.jpg';

const About = () => {
  return (
    <>

        <div className='flex flex-col items-center py-6'>
        {/* <div className=" ">
                            <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div> */}
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
