import { FaCartArrowDown, FaUser } from 'react-icons/fa';
import { MdCurrencyExchange, MdProductionQuantityLimits } from 'react-icons/md';
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  const state = {
    series: [
      {
        name: 'Orders',
        data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 23, 32, 150]
      },
      {
        name: 'Revenue',
        data: [20, 30, 35, 40, 39, 50, 60, 81, 31, 45, 115, 140]
      },
      {
        name: 'Sellers',
        data: [10, 20, 25, 30, 29, 40, 50, 71, 105, 53, 32, 130]
      }
    ],
    options: {
      chart: {
        background: 'transparent',
        foreColor: '#d0d2d6',
        toolbar: { show: false } // Optional: hides the download menu
      },
      colors: ['#181ee8', '#760077', '#00c9ff'], // Main color array
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        curve: 'smooth', // 'smooth', 'straight', or 'stepline'
        width: 2, // 0.5 is very thin; 2 is standard for visibility
        colors: undefined // Uses the 'colors' array above if undefined
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right'
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ]
      },
      responsive: [
        {
          breakpoint: 565,
          options: {
            chart: { height: 550 },
            plotOptions: {
              bar: {
                horizontal: true
              }
            }
          }
        }
      ]
    }
  };
  return (
    <div className="px-2 py-5 md:px-7">
      <div className="grid w-full grid-cols-1 gap-7 text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center justify-between gap-3 rounded-md bg-[#fae8e8] p-5">
          <div className="flex flex-col items-start justify-start text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">$3434</h2>
            <span className="text-md font-medium">Total Sales</span>
          </div>
          <div className="flex h-11.75 w-10 items-center justify-center rounded-full bg-[#fa0305] text-xl">
            <MdCurrencyExchange />
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 rounded-md bg-[#fde2ff] p-5">
          <div className="flex flex-col items-start justify-start text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">50</h2>
            <span className="text-md font-medium">Products</span>
          </div>
          <div className="flex h-11.75 w-10 items-center justify-center rounded-full bg-[#760077] text-xl">
            <MdProductionQuantityLimits />
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 rounded-md bg-[#e9feea] p-5">
          <div className="flex flex-col items-start justify-start text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">10</h2>
            <span className="text-md font-medium">Sellers</span>
          </div>
          <div className="flex h-11.75 w-10 items-center justify-center rounded-full bg-[#038000] text-xl">
            <FaUser />
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 rounded-md bg-[#ecebff] p-5">
          <div className="flex flex-col items-start justify-start text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">54</h2>
            <span className="text-md font-medium">Orders</span>
          </div>
          <div className="flex h-11.75 w-10 items-center justify-center rounded-full bg-[#0200fb] text-xl">
            <FaCartArrowDown />
          </div>
        </div>
      </div>
      <div className="mt-7 flex w-full flex-wrap">
        <div className="w-full lg:w-7/12 lg:pr-3">
          <div className="w-full rounded-md bg-[#6a5fdf] p-4">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              height={350}
            />
          </div>
        </div>

        <div className="mt-6 w-full lg:mt-0 lg:w-5/12 lg:pl-4">
          <div className="w-full rounded-md bg-[#6a5fdf] p-4 text-[#d0d2d6]">
            <div className="flex items-center justify-between">
              <h2 className="pb-3 text-lg font-semibold text-[#d0d2d6]">
                Recent Seller Message
              </h2>
              <Link
                to="/admin/seller-messages"
                className="text-sm font-semibold text-[#d0d2d6] hover:text-white"
              >
                View All
              </Link>
            </div>

            <div className="flex flex-col gap-2 pt-6 text-[#d0d2d6]">
              <ol className="relative ml-4">
                <li className="mb-3 ml-6">
                  <div className="absolute -left-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#4c7fe2] p-1 shadow-lg">
                    <img
                      className="h-full w-full rounded-full shadow-lg"
                      src="/images/admin.jpg"
                      alt="admin photo"
                    />
                  </div>
                  <div className="rounded-lg border border-slate-600 bg-slate-800 p-3 shadow-sm">
                    <div className="mb-2 flex items-center justify-between">
                      <Link
                        to="/admin/profile"
                        className="text-md font-normal text-[#d0d2d6] hover:text-white"
                      >
                        Admin
                      </Link>
                      <time className="sm: mb-1 text-sm font-normal sm:order-last">
                        2 days ago
                      </time>
                    </div>
                    <div className="rounded-lg border border-slate-800 bg-slate-700 p-2 text-xs font-normal">
                      Hello, How are you doing?
                    </div>
                  </div>
                </li>
                <li className="mb-3 ml-6">
                  <div className="absolute -left-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#4c7fe2] p-1 shadow-lg">
                    <img
                      className="h-full w-full rounded-full shadow-lg"
                      src="/images/admin.jpg"
                      alt="admin photo"
                    />
                  </div>
                  <div className="rounded-lg border border-slate-600 bg-slate-800 p-3 shadow-sm">
                    <div className="mb-2 flex items-center justify-between">
                      <Link
                        to="/admin/profile"
                        className="text-md font-normal text-[#d0d2d6] hover:text-white"
                      >
                        Admin
                      </Link>
                      <time className="sm: mb-1 text-sm font-normal sm:order-last">
                        2 days ago
                      </time>
                    </div>
                    <div className="rounded-lg border border-slate-800 bg-slate-700 p-2 text-xs font-normal">
                      Hello, How are you doing?
                    </div>
                  </div>
                </li>
                <li className="mb-3 ml-6">
                  <div className="absolute -left-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#4c7fe2] p-1 shadow-lg">
                    <img
                      className="h-full w-full rounded-full shadow-lg"
                      src="/images/admin.jpg"
                      alt="admin photo"
                    />
                  </div>
                  <div className="rounded-lg border border-slate-600 bg-slate-800 p-3 shadow-sm">
                    <div className="mb-2 flex items-center justify-between">
                      <Link
                        to="/admin/profile"
                        className="text-md font-normal text-[#d0d2d6] hover:text-white"
                      >
                        Admin
                      </Link>
                      <time className="sm: mb-1 text-sm font-normal sm:order-last">
                        2 days ago
                      </time>
                    </div>
                    <div className="rounded-lg border border-slate-800 bg-slate-700 p-2 text-xs font-normal">
                      Hello, How are you doing?
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 w-full rounded-md bg-[#6a5fdf] p-4">
        <div className="flex items-center justify-between">
          <h2 className="p-3 text-lg font-semibold text-[#d0d2d6]">
            Recent Orders
          </h2>
          <Link className="text-sm font-semibold text-[#d0d2d6] hover:text-white">
            View All
          </Link>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-[#d0d2d6]">
            <thead className="border-b border-slate-700 text-left uppercase">
              <tr>
                <th scope="col" className="px-4 py-3">
                  Order ID
                </th>
                <th scope="col" className="px-4 py-3">
                  Price
                </th>
                <th scope="col" className="px-4 py-3">
                  Payment Status
                </th>
                <th scope="col" className="px-4 py-3">
                  Order Status
                </th>
                <th scope="col" className="px-4 py-3">
                  Active
                </th>
              </tr>
            </thead>

            <tbody>
              {[1, 2, 3, 4, 5].map((d, i) => (
                <tr key={i}>
                  <td
                    scope="row"
                    className="px-4 py-3 font-medium whitespace-nowrap"
                  >
                    #5435534
                  </td>
                  <td
                    scope="row"
                    className="px-4 py-3 font-medium whitespace-nowrap"
                  >
                    $454
                  </td>
                  <td
                    scope="row"
                    className="px-4 py-3 font-medium whitespace-nowrap"
                  >
                    Pending
                  </td>
                  <td
                    scope="row"
                    className="px-4 py-3 font-medium whitespace-nowrap"
                  >
                    Pending
                  </td>
                  <td
                    scope="row"
                    className="px-4 py-3 font-medium whitespace-nowrap"
                  >
                    View
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
