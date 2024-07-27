

// "use client"
// import React, { useState } from 'react';

// const SidebarComp = () => {
//     const [sidebarOpen, setSidebarOpen] = useState(false);

//     const toggleSidebar = () => {
//         setSidebarOpen(!sidebarOpen);
//     };

//     return (
//         <div>
//             <div className="flex h-screen bg-gray-100">
//                 {/* <!-- Sidebar --> */}
//                 <div className={`fixed inset-0 flex z-40 md:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
//                     <div className="fixed inset-0 bg-black opacity-50" onClick={toggleSidebar}></div>
//                     <div className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
//                         <div className="absolute top-0 right-0 -mr-12 pt-2">
//                             <button
//                                 className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:bg-gray-600"
//                                 aria-label="Close sidebar"
//                                 onClick={toggleSidebar}
//                             >
//                                 <svg className="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                                 </svg>
//                             </button>
//                         </div>
//                         <div className="flex items-center justify-center h-16 bg-gray-900">
//                             <span className="text-white font-bold uppercase">Sidebar</span>
//                         </div>
//                         <div className="flex-1 overflow-y-auto">
//                             <nav className="px-2 py-4 space-y-1">
//                                 <a href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                                     </svg>
//                                     Dashboard
//                                 </a>
//                                 <a href="/admin/alluser" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                                     </svg>
//                                     Users
//                                 </a>
//                                 <a href="/admin/jobs" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
//                                     </svg>
//                                     Jobs
//                                 </a>
//                             </nav>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="hidden md:flex md:flex-col md:w-64 bg-gray-800">
//                     <div className="flex items-center justify-center h-16 bg-gray-900">
//                         <span className="text-white font-bold uppercase">Sidebar</span>
//                     </div>
//                     <div className="flex-1 overflow-y-auto">
//                         <nav className="px-2 py-4 space-y-1">
//                             <a href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                                 </svg>
//                                 Dashboard
//                             </a>
//                             <a href="/admin/alluser" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                                 </svg>
//                                 Users
//                             </a>
//                             <a href="/admin/jobs" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
//                                 </svg>
//                                 Jobs
//                             </a>
//                         </nav>
//                     </div>
//                 </div>

//                 {/* <!-- Main content --> */}
//                 <div className="flex flex-col flex-1 overflow-y-auto">
//                     <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200 px-4">
//                         <button
//                             className="text-gray-500 focus:outline-none focus:text-gray-700 md:hidden"
//                             onClick={toggleSidebar}
//                         >
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                             </svg>
//                         </button>
//                         <input className="mx-4 w-full border rounded-md px-4 py-2" type="text" placeholder="Search" />
//                         <div className="flex items-center">
//                             <button className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l-7-7 7-7m5 14l7-7-7-7" />
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>
//                     <div className="p-4">
//                         <h1 className="text-2xl font-bold">Welcome to my dashboard!</h1>
//                         <p className="mt-2 text-gray-600">This is an example dashboard using Tailwind CSS.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SidebarComp;



"use client"

import React, { useState } from 'react';
import Logo from '@/components/Logo'

const SidebarComp = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div>
            <div className="flex h-screen bg-gray-100">
                {/* <!-- Sidebar --> */}
                <div className={`fixed inset-0 flex z-40 md:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
                    <div className="fixed inset-0 bg-black opacity-50" onClick={toggleSidebar}></div>
                    <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white-800">
                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                            <button
                                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:bg-gray-600"
                                aria-label="Close sidebar"
                                onClick={toggleSidebar}
                            >
                                <svg className="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center justify-center h-16 bg-gray-900">
                            <span className="text-white font-bold text-3xl"><Logo/></span>
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            <nav className="px-2 py-4 space-y-1">
                                <a href="/admin/dashboard" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                    Dashboard
                                </a>
                                <a href="/admin/alluser" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-check mr-2.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
                                    Users
                                </a>
                                <a href="/admin/jobs" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-briefcase-business mr-2.5"><path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>

                                    Jobs
                                </a>
                                <a href="/admin/postjob" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar-plus mr-2.5"><path d="M8 2v4"/><path d="M16 2v4"/><path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"/><path d="M3 10h18"/><path d="M16 19h6"/><path d="M19 16v6"/></svg>

                                  Post Job
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="hidden md:flex md:flex-col md:w-64 bg-gray-800">
                    <div className="flex items-center justify-center h-16 bg-gray-900">
                        <span className="text-white font-bold text-3xl"><Logo/></span>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        <nav className="px-2 py-4 space-y-1">
                            <a href="/admin/dashboard" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                Dashboard
                            </a>
                            <a href="/admin/alluser" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-check mr-2.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>

                                Users
                            </a>
                            <a href="/admin/jobs" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-briefcase-business mr-2.5"><path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
                                Jobs
                            </a>
                            <a href="/admin/postjob" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar-plus mr-2.5"><path d="M8 2v4"/><path d="M16 2v4"/><path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"/><path d="M3 10h18"/><path d="M16 19h6"/><path d="M19 16v6"/></svg>
                                  Post job
                                </a>
                        </nav>
                    </div>
                </div>
                <div className="flex-1 flex flex-col">
                    <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow md:hidden">
                        <button
                            className="px-2 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-white focus:text-gray-600"
                            aria-label="Open sidebar"
                            onClick={toggleSidebar}
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default SidebarComp;

