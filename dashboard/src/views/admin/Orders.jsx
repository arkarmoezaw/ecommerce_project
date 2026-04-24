import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaChevronDown } from 'react-icons/fa6';
import Pagination from '../pages/Pagination';

export default function Orders() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [parPage, setParPage] = useState(5);
  const [show, setShow] = useState(false);

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
        <div className="relative mt-5 overflow-x-auto">
          <div className="w-full text-left text-sm text-[#d0d2d6]">
            <div className="border-b border-slate-700 text-sm text-[#d0d2d6] uppercase">
              <div className="flex items-center justify-between">
                <div className="w-[25%] py-3 font-bold">Order ID</div>
                <div className="w-[13%] py-3 font-bold">Price</div>
                <div className="w-[18%] py-3 font-bold">Payment Status</div>
                <div className="w-[18%] py-3 font-bold">Order Status</div>
                <div className="w-[18%] py-3 font-bold">Actions</div>
                <div className="w-[8%] py-3 font-bold">
                  <FaChevronDown />
                </div>
              </div>
            </div>
            <div className="text-[#d0d2d6]">
              <div className="flex items-start justify-start border-b border-slate-700">
                <div className="w-[25%] py-3 font-medium whitespace-nowrap">
                  #34343
                </div>
                <div className="w-[13%] py-3 font-medium">$343</div>
                <div className="w-[18%] py-3 font-medium">Pending</div>
                <div className="w-[18%] py-3 font-medium">Pending</div>
                <div className="w-[18%] py-3 font-medium">
                  <Link>View</Link>
                </div>
                <div
                  className="w-[8%] py-3 font-medium"
                  onClick={() => setShow(!show)}
                >
                  <FaChevronDown />
                </div>
              </div>
              <div
                className={
                  show
                    ? 'block border-b border-slate-700 bg-[#8288ed]'
                    : 'hidden'
                }
              >
                <div className="flex items-start justify-start border-b border-slate-700">
                  <div className="w-[25%] py-3 pl-3 font-medium whitespace-nowrap">
                    #34343
                  </div>
                  <div className="w-[13%] py-3 font-medium">$493</div>
                  <div className="w-[18%] py-3 font-medium">Pending</div>
                  <div className="w-[18%] py-3 font-medium">Pending</div>
                  <div className="w-[18%] py-3 font-medium">
                    <Link>View</Link>
                  </div>
                </div>
                <div className="flex items-start justify-start border-b border-slate-700">
                  <div className="w-[25%] py-3 pl-3 font-medium whitespace-nowrap">
                    #34343
                  </div>
                  <div className="w-[13%] py-3 font-medium">$293</div>
                  <div className="w-[18%] py-3 font-medium">Pending</div>
                  <div className="w-[18%] py-3 font-medium">Pending</div>
                  <div className="w-[18%] py-3 font-medium">
                    <Link>View</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-4 bottom-4 mt-4 flex w-full justify-end">
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            totalItem={50}
            showItem={3}
            parPage={parPage}
          />
        </div>
      </div>
    </div>
  );
}
