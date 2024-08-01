
"use client"

import Footer from '@/components/Footer';
import PaginationComp from '@/components/PaginationComp';
import SidebarComp from '@/components/SidebarComp';
import { FilePenLine, Trash2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface User {
  email: string;
  userName: string;
}

const UserPage: React.FC = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(8); // Number of users per page
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const resp = await fetch('http://localhost:3000/api/user');
        const data = await resp.json();
        const userData: User[] = data.users;
        setUserList(userData);
        setLoading(false); // Set loading to false even if there's an error
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false); // Set loading to false even if there's an error
      }
    }
    fetchUsers();
  }, []);

  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const currentUser = userList.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <div className="w-1/6">
          <SidebarComp />
        </div>

        <div className="w-5/6">
          <section className="py-1 bg-blueGray-50 mb-10">
            <div className="w-full sm-w-90% xl:w-6/12 mb-12 xl:mb-0 px-4 mx-auto mt-10">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                      <h3 className="font-semibold text-base text-blueGray-700">User Listings</h3>
                    </div>
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                      <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button>
                    </div>
                  </div>
                </div>

                {/* Data Content Area */}
               
                  {loading ? (

                    <div className='flex justify-center items-center h-60'>
                      <div className="flex gap-2">
                        <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
                        <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
                        <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="block w-full overflow-x-auto p-3">
                    <table className="items-center bg-transparent w-full border-collapse">
                      <thead>
                        <tr>
                          <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left sm:w-10">Sr.No.</th>
                          <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left sm:w-10">User Name</th>
                          <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left sm:w-10">Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentUser.map((user, index) => (
                          <tr key={index}>
                            <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left text-blueGray-700 max-w-xs break-words sm:w-10" style={{ width: '150px', maxWidth: '150px', wordWrap: 'break-word' }}>{index + 1 + (currentPage - 1) * userPerPage}</td>
                            <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 max-w-xs break-words sm:w-10" style={{ width: '150px', maxWidth: '150px', wordWrap: 'break-word' }}>{user.userName}</td>
                            <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 max-w-xs break-words sm:w-10">{user.email}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    </div>
                  )}
               
              </div>
            </div>
            {/* Pagination Component */}
            <PaginationComp
              itemsPerPage={userPerPage}
              totalItems={userList.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserPage;
