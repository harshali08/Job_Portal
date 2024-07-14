"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { signIn, signOut, useSession } from 'next-auth/react';
import { CircleUserRound } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      // Navigate to the current page after signing out
      router.refresh();
    }
  }, [status, router]);

  

  return (
    <div className="bg-gray-100 font-sans w-full m-0">
      <div className="bg-white shadow px-5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div>
              <Link href="/" className="text-gray-800 text-xl font-bold">
                Job<span className="text-blue-700">Nest</span>
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
                  <Link href="/profile" className="flex items-center text-gray-800 text-md font-semibold hover:text-blue-600 mr-4">
                    <CircleUserRound className="text-2xl mr-2" />
                    Profile
                  </Link>
                  <Button onClick={() => signOut()}>Sign Out</Button>
                </>
              ) : (
                <a href='/signIn'><Button >Sign In</Button></a>
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
                <div className="flex justify-between items-center border-t-2 pt-2">
                  {session ? (
                    <>
                      <Link href="/profile" className="flex items-center text-gray-800 text-md font-semibold hover:text-blue-600 mb-1">
                        <CircleUserRound className="text-2xl mr-2" />
                        Profile
                      </Link>
                      <Button onClick={() => signOut()}>Sign Out</Button>
                    </>
                  ) : (
                    <>
                      <Link href="#" className="text-gray-800 text-md font-semibold hover:text-blue-600 mr-4" onClick={() => signIn()}>Sign in</Link>
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
