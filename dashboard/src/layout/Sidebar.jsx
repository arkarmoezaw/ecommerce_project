import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getNav } from '../navigation';
import { BiLogOutCircle } from 'react-icons/bi';

export default function Sidebar({ showSidebar, setShowSidebar }) {
  const [allNav, setAllNav] = useState(() => getNav('admin'));
  const { pathname } = useLocation();

  return (
    <div>
      <div
        onClick={() => setShowSidebar(false)}
        className={`bg-opacity-50 fixed inset-0 top-0 left-0 z-10 h-screen w-screen bg-[#22292f80] duration-200 ${!showSidebar ? 'invisible' : 'visible'}`}
      ></div>
      <div
        className={`fixed top-0 z-50 h-screen w-65 bg-[#e6e7fb] shadow-[0_0_15px_0_rgba(34_41_47/5%)] transition-all ${showSidebar ? 'left-0' : '-left-65'} lg:left-0`}
      >
        <div className="flex h-17.5 items-center justify-center">
          <Link to="/" className="h-12.5 w-45">
            <img className="h-full w-full" src="/images/logo.png" alt="Logo" />
          </Link>
        </div>
        <div className="px-4">
          {allNav.map(nav => (
            <Link
              key={nav.id}
              to={nav.path}
              className={`${pathname === nav.path && 'bg-[#cdcae9]'} mt-1 flex items-center rounded-lg px-3 py-2 text-lg font-medium text-gray-700 transition-all hover:bg-[#cdcae9]`}
            >
              {nav.icon}
              <span className="ml-3">{nav.title}</span>
            </Link>
          ))}

          <button className="font-lg mb-1 flex w-full items-center justify-start gap-3 rounded-sm px-3 py-2.25 font-bold text-[#030811] transition-all duration-200 hover:pl-4">
            <span>
              <BiLogOutCircle />
            </span>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
