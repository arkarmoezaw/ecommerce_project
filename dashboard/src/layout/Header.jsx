import { FaList } from 'react-icons/fa';

export default function Header({ showSidebar, setShowSidebar }) {
  return (
    <div className="fixed top-0 left-0 z-40 w-full px-2 py-5 lg:px-7">
      <div className="ml-0 flex h-16.25 items-center justify-between rounded-md bg-[#b1addf] px-5 transition-all lg:ml-65">
        <div
          className="flex h-8.75 w-8.75 cursor-pointer items-center justify-center rounded-sm bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 md:hidden"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <span>
            <FaList />
          </span>
        </div>

        <div className="hidden md:block">
          <input
            className="overflow-hidden rounded-md border border-slate-700 bg-transparent px-3 py-2 text-[#423d72] outline-0 focus:border-indigo-500"
            placeholder="Search"
            name="search"
            type="text"
          />
        </div>

        <div className="relative flex items-center justify-center gap-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center gap-3">
              <div className="flex flex-col justify-center text-end">
                <h2 className="text-md font-bold">R Kar Moe Zaw</h2>
                <span className="w-full text-[14px] font-normal">Admin</span>
              </div>
              <img
                src="/images/admin.jpg"
                alt="User Profile"
                className="h-11.25 w-11.25 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
