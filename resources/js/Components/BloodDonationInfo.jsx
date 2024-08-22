import React from 'react';

const BloodDonationInfo = () => {
  return (
            <div className=" mx-auto px-8 py-11 bg-red-50 ">
            <div className="text-center mx-auto mb-12">
                <span className="inline-block bg-red-100 text-red-500 px-2 py-1 rounded-full text-sm mb-4">
                Why Donate Blood?
                </span>
                <h1 className="text-4xl font-bold mb-4">The Importance of Blood Donation</h1>
                <p className="text-gray-600 mb-2">
                Blood donation is a simple way to save lives. Every two seconds, someone around us needs blood.
                </p>
                <p className="text-gray-600">
                Donating blood can help treat patients with cancer, chronic illnesses, and traumatic injuries.
                </p>
            </div>

                <div className="grid grid-cols-1 mx-auto md:grid-cols-3 gap-8">
                    <ReasonCard
                    title="Help Patients in Need"
                    description="Your donation can help treat patients with life-threatening conditions and save lives."
                    />
                    <ReasonCard
                    title="Support Your Community"
                    description="Blood donation is a simple way to give back and support your local community."
                    />
                    <ReasonCard
                    title="Feel Good About Yourself"
                    description="Donating blood is a rewarding experience that can make you feel good about helping others."
                    />
                </div>
                </div>
        );
        };

const ReasonCard = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg ring-1 ring-slate-100 hover:shadow-md">
      <h3 className="text-xl font-semibold text-red-500 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default BloodDonationInfo;
