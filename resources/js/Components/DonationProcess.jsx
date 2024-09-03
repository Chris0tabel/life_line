import React from 'react';

const BloodDropIcon = () => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
    <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
  </svg>

);

const DonationProcess = () => {
  return (
    <div className="bg-white p-8 flex flex-col md:flex-row px-6 py-12 justify-between">
      <div className=" ">
      <h1 className="text-4xl font-bold mb-4">The Blood Donation Process</h1>
        <p className="text-gray-600 mb-8">
          Donating blood is a simple, safe, and rewarding experience. Here's
          what to expect:
        </p>
      </div>


        {/* <div className="flex flex-col md:flex-row"> */}
          {/* <div className="md:w-1/2 md:pr-8">
            {/* Left column is intentionally left empty to match the image layout */}
          {/* </div>  */}

          <div className="md:w-1/2">
            <div className="space-y-6">
              <ProcessStep
                title="Registration"
                description="Fill out a brief questionnaire to ensure your eligibility."
              />
              <ProcessStep
                title="Donation"
                description="The actual blood donation process takes about 8-10 minutes."
              />
              <ProcessStep
                title="Refreshment"
                description="Enjoy a snack and drink to replenish your energy."
              />
            </div>
          </div>
        </div>

    // </div>
  );
};

const ProcessStep = ({ title, description }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 mr-4">
      <div className="bg-red-500 rounded-full p-2">
        <BloodDropIcon />
      </div>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default DonationProcess;
