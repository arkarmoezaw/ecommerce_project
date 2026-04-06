import { useState } from 'react';

export default function Orders() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState();
  const [parPage, setParPage] = useState(5);
  return (
    <div className="px-2 pt-5 lg:px-7">
      <div className="w-full rounded-md bg-[#6a5fdf] p-4">
        <div className="flex items-center justify-between">
          <select
            onChange={e => setParPage(parseInt(e.target.value))}
            className="rounded-md border border-slate-700 bg-[#6a5fdf] px-4 py-2 text-[#d0d2d6] outline-none focus:border-indigo-500"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
          <input
            className="text-[#d0d2d6 rounded-md border border-slate-700 bg-[#6a5fdf] px-4 py-2 outline-none focus:border-indigo-500"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
}
