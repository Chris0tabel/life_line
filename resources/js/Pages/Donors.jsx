import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Pagination from "@/Components/Pagination";
import GuestLayout from '@/Layouts/GuestLayout';
import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';

const Donors = ({ donors = [], layoutType, meta = { links: [] } }) => { // Provide a default value for donors
  const Layout = layoutType === 'user' ? GuestLayout : AuthenticatedLayout;


  return (
    <>
    <Layout header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Donors</h2>}>
        <Head title="Donor" />
        <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
              <div className="p-6 text-gray-900">Donors</div>
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase border-b-2 dark:text-gray-400">
                  <tr className="text-nowrap">
                    <th className="px-3 py-3">ID</th>
                    <th className="px-3 py-3">Name</th>
                    <th className="px-3 py-3">Blood group</th>

                    <th className="px-3 py-3">Gender</th>
                    <th className="px-3 py-3">Location</th>
                    <th className="px-3 py-3">Phone NO.</th>
                    <th className="px-3 py-3">Visibility</th>
                  </tr>
                </thead>
                <tbody>
                  {donors.length > 0 ? (
                    donors.map((donor) => (
                      <tr className="bg-white border-b dark:text-gray-800" key={donor.id}>
                        <td className="px-3 py-2">{donor.id}</td>
                        <td className="px-3 py-2">{donor.name}</td>
                        <td className="px-3 py-2">{donor.blood_group}</td>

                        <td className="px-3 py-2 text-nowrap">{donor.gender}</td>
                        <td className="px-3 py-2">{donor.location}</td>
                        <td className="px-3 py-2">{donor.phone_number}</td>
                        <td className="px-3 py-2">{donor.visibility}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="px-3 py-2 text-center">
                        No donors available.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              <Pagination  />
            </div>
          </div>
        </div>
      </Layout>

    </>
  );
};

export default Donors;
