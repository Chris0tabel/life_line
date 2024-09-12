import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Pagination from "@/Components/Pagination";
import GuestLayout from '@/Layouts/GuestLayout';
import React, { useState,useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import DonorLayout from '@/Layouts/DonorLayout';



const Public = ({ users = [], meta = { current_page: 1, total_pages: 1 } }) => {
    const [currentPage, setCurrentPage] = useState(meta.current_page);
    const [usersData, setUsersData] = useState(users);

    useEffect(() => {
        // Fetch new data when the page changes
        const fetchData = async (page) => {
            const response = await fetch(`${page}`);
            const data = await response.json();
            setUsersData(data.users);
        };

        fetchData(currentPage);
    }, [currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    // Provide a default value for users
//   const Layout = layoutType === 'user' ? GuestLayout : AuthenticatedLayout;

console.log(users);
console.log(meta);

  return (
    <>
    <DonorLayout header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Donors</h2>}>
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
                  {users.length > 0 ? (
                    users.map((users) => (
                      <tr className="bg-white border-b dark:text-gray-800" key={users.id}>
                        <td className="px-3 py-2">{users.id}</td>
                        <td className="px-3 py-2">{users.name}</td>
                        <td className="px-3 py-2">{users.blood_group}</td>

                        <td className="px-3 py-2 text-nowrap">{users.gender}</td>
                        <td className="px-3 py-2">{users.location}</td>
                        <td className="px-3 py-2">{users.phone_number}</td>
                        <td className="px-3 py-2">{users.visibility}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="px-3 py-2 text-center">
                        No donor available.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              <Pagination
                   currentPage={currentPage}
                            totalPages={meta.total_pages}
                            onPageChange={handlePageChange}
               />
            </div>
          </div>
        </div>
      </DonorLayout>

    </>
  );
};

export default Public;
