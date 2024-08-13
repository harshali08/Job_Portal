

"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { signIn, signOut, useSession } from 'next-auth/react';
import { CircleUserRound } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdminDropdownOpen, setIsAdminDropdownOpen] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleAdminDropdown = () => {
    setIsAdminDropdownOpen(!isAdminDropdownOpen);
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      router.refresh();
    }
  }, [status, router]);

  const isAdmin = session?.user?.email === "admin@gmail.com";

  return (
    <div className="bg-gray-100 font-sans w-full m-0">
      <div className="bg-white shadow px-5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div>
              <Link href="/" className="text-gray-800 text-xl font-bold">
                <Logo />
              </Link>
            </div>

            <div className="hidden sm:flex sm:items-center">
              <Link href="#" className="text-gray-800 text-md font-semibold hover:text-blue-600 mr-8"></Link>
              <Link href="/jobs" className="text-gray-800 text-md font-semibold hover:text-blue-600 mr-8">Jobs</Link>
              <Link href="/postjob" className="text-gray-800 text-md font-semibold hover:text-blue-600 mr-8">Post a Job</Link>
              <Link href="#" className="text-gray-800 text-md font-semibold hover:text-blue-600">Pricing</Link>
            </div>

            <div className="hidden sm:flex sm:items-center">
              {session ? (
                <>
                  {isAdmin ? (
                   
<div className="relative inline-block text-left">
    <div className="group">
        <button type="button"
            className="inline-flex justify-center items-center w-full px-4 py-2 text-md font-medium rounded-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none ">
           Admin
            
            <svg className="w-4 h-4 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 12l-5-5h10l-5 5z" />
            </svg>
        </button>

       
        <div
            className="absolute left-0 w-40 mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
            <div className="py-1">
            <a href="/admin/dashboard" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 flex items-center space-x-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-dashboard">
    <rect width="7" height="9" x="3" y="3" rx="1"/>
    <rect width="7" height="5" x="14" y="3" rx="1"/>
    <rect width="7" height="9" x="14" y="12" rx="1"/>
    <rect width="7" height="5" x="3" y="16" rx="1"/>
  </svg>
  <span>Dashboard</span>
</a>

<a href="#" onClick={() => signOut()} className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 flex items-center space-x-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-in">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
    <polyline points="10 17 15 12 10 7"/>
    <line x1="15" x2="3" y1="12" y2="12"/>
  </svg>
  <span>Sign Out</span>
</a>
 </div>
        </div>
    </div>
</div>
                  ) : (
                    <>
                      <Link href="/profile" className="flex items-center text-gray-800 text-md font-semibold hover:text-blue-600 mr-4">
                        <CircleUserRound className="text-2xl mr-2" />
                        Profile
                      </Link>
                      <Button onClick={() => signOut()}>Sign Out</Button>
                    </>
                  )}
                </>
              ) : (
                <a href='/signIn'><Button>Sign In</Button></a>
              )}
            </div>

            <div className="sm:hidden cursor-pointer" onClick={toggleMenu}>
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </div>
          </div>

          {isOpen && (
            <div className="block sm:hidden bg-white border-t-2 py-2">
              <div className="flex flex-col">
                <Link href="#" className="text-gray-800 text-md font-semibold hover:text-blue-600 mb-1">Products</Link>
                <Link href="#" className="text-gray-800 text-md font-semibold hover:text-blue-600 mb-1">Marketplace</Link>
                <Link href="#" className="text-gray-800 text-md font-semibold hover:text-blue-600 mb-1">Partners</Link>
                <Link href="#" className="text-gray-800 text-md font-semibold hover:text-blue-600 mb-1">Pricing</Link>
                <div className="flex flex-col border-t-2 pt-2">
                  {session ? (
                    <>
                      {isAdmin ? (
                        <div className="relative">
                          <Button onClick={toggleAdminDropdown}>
                            Admin
                          </Button>
                          {isAdminDropdownOpen && (
                            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-48">
                              <Link href="/admin/dashboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Admin</Link>
                              <Button onClick={() => signOut()} className=" text-gray-800 hover:bg-gray-200">Sign Out</Button>
                            </div>
                          )}
                        </div>
                      ) : (
                        <>
                          <Link href="/profile" className="flex items-center text-gray-800 text-md font-semibold hover:text-blue-600 mb-1">
                            <CircleUserRound className="text-2xl mr-2" />
                            Profile
                          </Link>
                          <Button onClick={() => signOut()} className="text-gray-800 mb-1">Sign Out</Button>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <Link href="#" className="text-gray-800 text-md font-semibold hover:text-blue-600 mb-1" onClick={() => signIn()}>Sign in</Link>
                      <Link href="#" className="text-gray-800 text-md font-semibold border px-4 py-1 rounded-lg hover:text-blue-600 hover:border-blue-600">Sign up</Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
