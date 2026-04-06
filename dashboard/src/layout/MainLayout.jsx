import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import { useState } from 'react';

export default function MainLayout() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="min-h-screen w-full bg-[#cdcae9]">
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="ml-0 pt-23.75 transition-all lg:ml-65">
        <Outlet />
      </div>
    </div>
  );
}
