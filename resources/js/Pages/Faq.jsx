import ApplicationLogo from '@/Components/ApplicationLogo';
import GuestLayout from '@/Layouts/GuestLayout';
import React, { useState } from 'react';
// import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, Head } from '@inertiajs/react';


const FAQItem = ({ question, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (


      <div className="border-b justify-items-center border-gray-200 py-4">
        <button
          className="flex justify-between  w-full "
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-lg font-medium">{question}</span>
          <span className="ml-6 flex-shrink-0">
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </span>
        </button>
        {isOpen && (
          <div className="mt-2">
            {children}
          </div>
        )}
      </div>
    );
  };
  //flex flex-col
  const Faq = () => {
    return (
       <>
              <div className=''>
                          <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link> </div>
         <div className=" mx-auto px-4 py-12 justify-center items-center max-w-2xl bg-white">
        <div className="text-center mb-8">
          <span className="inline-block bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm mb-4">
            FAQ
          </span>
          <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Get answers to common questions about blood donation.
          </p>
        </div>

        <div className="space-y-2 max-w-2xl mb-8 ">
        <FAQItem question="What is LIFELINE?">
            <p>LIFELINE is designed to facilitate blood donation management in The Gambia. It serves as a platform to connect blood donors, patients, and healthcare workers, particularly during emergencies, ensuring timely access to life-saving blood transfusions.
          </p>
          </FAQItem>
          <FAQItem question="How does it work?">
            <p>LifeLine uses advanced geolocation technology to find nearby donors based on the user's location and blood type. Users can easily create profiles, request blood donations, and communicate with donors using our platform.</p>
          </FAQItem>

          <FAQItem question="Who can donate blood?">
            <p>
            Generally, blood donors must be healthy individuals aged 16-65  who meet weight and hemoglobin level requirements. They should not have any high-risk behaviors, chronic illnesses, or recent infections.
                  </p>
          </FAQItem>
          <FAQItem question="What are the benefits of donating blood?">
            <p>Donating blood can save lives and improve the health of recipients. Additionally, it offers health benefits for donors, such as reducing the risk of heart disease and improving overall cardiovascular health.</p>
          </FAQItem>
          <FAQItem question="How often can I donate blood?">
            <p>Content for how often one can donate blood...</p>
          </FAQItem>
          <FAQItem question="Is donating blood safe?">
            <p>Content for safety of blood donation...</p>
          </FAQItem>
          <FAQItem question="What can I expect during the donation process?">
            <p>Content for what to expect during donation...</p>
          </FAQItem>
        </div>
      </div>


       </>


    );
  };

  export default Faq;
