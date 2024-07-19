


// import React, { useState, FormEvent } from 'react';

// interface SearchBarProps {
//   onSearch: (searchTerm: string, filterCategory: string, filterLocation: string,filtermainCategory:string) => void;
// }

// const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterCategory, setFilterCategory] = useState('All');
//   const [filtermainCategory, setFiltermainCategory] = useState('All');
//   const [filterLocation, setFilterLocation] = useState('All');

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     onSearch(searchTerm, filterCategory, filterLocation, filtermainCategory);
//   };

//   return (
//     <div className='flex justify-center p-10'>
//       <form className="flex flex-col md:flex-row gap-3 " onSubmit={handleSubmit}>
//         <div>
//           <select 
//             id="categoryFilter" 
//             name="categoryFilter"
//             className="h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
//             value={filterCategory}
//             onChange={(e) => setFilterCategory(e.target.value)}
//           >
//             <option value="All">All Categories</option>
//             <option value="Full Time">Full Time</option>
//             <option value="Part Time">Part Time</option>
//             <option value="Remote">Remote</option>
//             <option value="Internship">Internship</option>
            
//           </select>
//         </div>
//         <div>
//           <select 
//             id="locationFilter" 
//             name="locationFilter"
//             className="h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
//             value={filterLocation}
//             onChange={(e) => setFilterLocation(e.target.value)}
//           >
//             <option value="All">All Locations</option>
//             <option value="Pune">Pune</option>
//             <option value="Mumbai">Mumbai</option>
//             <option value="Banglore">Banglore</option>
//             <option value="Hyderabad">Hyderabad</option>
//             <option value="Navi Mumbai">Navi Mumbai</option>
//           </select>
//         </div>
//         <div>
//           <select 
//             id="mainCategoryFilter" 
//             name="mainCategoryFilter"
//             className="h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
//             value={filtermainCategory}
//             onChange={(e) => setFiltermainCategory(e.target.value)}
//           >
//             <option value="All">All </option>
//             <option value="IT Jobs">IT jobs</option>
//             <option value="Sales">Sales</option>
//             <option value="Marketing">Marketing</option>
//             <option value="Customer support">Customer support</option>
//             <option value="Banking">Banking</option>
//             <option value="Accounting">Accounting</option>
//             <option value="HR">HR</option>
//           </select>
//         </div>
//         <div className="flex">
//           <input
//             type="text"
//             placeholder="Search for the job you like"
//             className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//         <button type="submit" className="bg-sky-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1">Search</button>

//       </form>
//     </div>
//   );
// };

// export default SearchBar;

import React, { useState, FormEvent } from 'react';

interface SearchBarProps {
  onSearch: (searchTerm: string, filterCategory: string, filterLocation: string, filtermainCategory: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [filtermainCategory, setFiltermainCategory] = useState('All');
  const [filterLocation, setFilterLocation] = useState('All');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm, filterCategory, filterLocation, filtermainCategory);
  };

  return (
    <div className='flex justify-center p-10'>
      <form className="flex flex-col md:flex-row gap-3 items-center" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row md:gap-3 w-full md:w-auto">
          <select 
            id="categoryFilter" 
            name="categoryFilter"
            className="h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider flex-1"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Remote">Remote</option>
            <option value="Internship">Internship</option>
          </select>
          
          <select 
            id="locationFilter" 
            name="locationFilter"
            className="h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider flex-1"
            value={filterLocation}
            onChange={(e) => setFilterLocation(e.target.value)}
          >
            <option value="All">All Locations</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Banglore">Banglore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Navi Mumbai">Navi Mumbai</option>
          </select>
          
          <select 
            id="mainCategoryFilter" 
            name="mainCategoryFilter"
            className="h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider flex-1"
            value={filtermainCategory}
            onChange={(e) => setFiltermainCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="IT Jobs">IT jobs</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Customer support">Customer support</option>
            <option value="Banking">Banking</option>
            <option value="Accounting">Accounting</option>
            <option value="HR">HR</option>
          </select>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search for the job you like"
            className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500 flex-1"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="bg-sky-500 text-white rounded-r px-2 md:px-5 py-0 md:py-2">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
