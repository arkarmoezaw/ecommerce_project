import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Pagination from '../pages/Pagination';

export default function Category() {
  const [parPage, setParPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(false);
  return (
    <div className="px-2 pt-5 lg:px-7">
      <div className="flex w-full flex-wrap">
        <div className="w-full lg:w-7/12">
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
            </div>{' '}
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-[#d0d2d6]">
                <thead className="border-b border-slate-700 text-left uppercase">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      No
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Image
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {[1, 2, 3, 4, 5].map((d, i) => (
                    <tr key={i}>
                      <td
                        scope="row"
                        className="px-4 py-1 font-medium whitespace-nowrap"
                      >
                        {d}
                      </td>
                      <td
                        scope="row"
                        className="px-4 py-1 font-medium whitespace-nowrap"
                      >
                        <img
                          className="h-11.25 w-11.25"
                          src={`/images/category/${d}.jpg`}
                          alt="Category"
                        />
                      </td>
                      <td
                        scope="row"
                        className="px-4 py-1 font-medium whitespace-nowrap"
                      >
                        Tshirt
                      </td>
                      <td
                        scope="row"
                        className="px-4 py-1 font-medium whitespace-nowrap"
                      >
                        <div className="flex items-center justify-start gap-4">
                          <Link className="rounded bg-yellow-500 p-2 hover:shadow-lg hover:shadow-yellow-500/50">
                            <FaEdit />
                          </Link>
                          <Link className="rounded bg-red-500 p-2 hover:shadow-lg hover:shadow-red-500/50">
                            <FaTrash />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              0
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
        <div
          className={`fixed w-85 lg:relative lg:right-0 lg:w-5/12 ${show ? 'right-0' : '-right-85'} top-0 z-20 transition-all duration-500`}
        >
          <div className="w-full pl-5">
            <div className="h-screen bg-[#6a5fdf] px-3 py-3 text-[#d0d2d6] lg:h-auto lg:rounded-md">
              <h1 className="mb-4 w-full text-center text-xl font-semibold">
                Add Category
              </h1>
              <form>
                <div className="mb-3 flex w-full flex-col gap-1">
                  <label htmlFor="name">Category Name</label>
                  <input
                    className="px-4 py-2 focus:border-indigo-500"
                    type="text"
                    id="name"
                    name="category-name"
                    placeholder="Category Name"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
