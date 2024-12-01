import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { HiMenuAlt2 } from "react-icons/hi";
import { GrSearch } from "react-icons/gr";
import { RiMessage2Fill } from "react-icons/ri";
import { TiArrowSortedDown } from "react-icons/ti";
import Sidebar from "./Sidebar";
import RevenueCard from "./RevenueCard";
import PayoutCard from "./PayoutCard";
import AmountCard from "./AmountCard";
import OrderTable from "./OrderTable";

function Dashboard() {
  return (
    <div className="w-screen h-screen flex ">
      <Sidebar />
      <div className="flex-1 h-screen overflow-y-auto bg-gray-50">
        <nav className="flex justify-between md:grid md:grid-cols-3 px-4 md:px-8 py-3 items-center bg-white shadow-sm ">
          <div className="md:hidden">
            <HiMenuAlt2 />
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="text-lg font-semibold">Payments</div>
            <div className="flex items-center gap-1 group">
              <AiOutlineQuestionCircle />
              <span className="hidden group:hover:inline md:inline">
                How it works
              </span>
            </div>
          </div>
          <div className="flex gap-2 px-4 py-2 bg-gray-100 rounded-md">
            <GrSearch size={24} className="text-gray-700" />
            <input
              type="text"
              placeholder="Search features, tutorials, etc."
              className="flex-1 bg-transparent"
            />
          </div>
          <div className="flex justify-end gap-2">
            <span className="bg-gray-200 p-1 md:p-3 rounded-full">
              <RiMessage2Fill size={24} />
            </span>
            <span className="bg-gray-200 p-1 md:p-3 rounded-full">
              <TiArrowSortedDown size={24} />
            </span>
          </div>
        </nav>
        <div className="p-6">
          {/* Filter */}
          <div className="flex justify-between items-center mb-5">
            <div className="text-xl font-bold">Overview</div>
            <div className="border p-2 rounded-md">
              <select className="outline-none px-2">
                <option value="">This Month</option>
                <option value="year">This Year</option>
                <option value="custom">Custom</option>
              </select>
            </div>
          </div>
          {/* Cards section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
            <PayoutCard
              title={"Next payout"}
              amount={"2,312.23"}
              orderCount={23}
            />
            <RevenueCard
              title={"Amount Pending"}
              amount={"92,312.20"}
              orderCount={"13"}
            />
            <AmountCard title={"Amount Processed"} amount={"23,92,312.19"} />
          </div>
          <div className="my-6">
            <p className="text-xl font-semibold">Transactions | This Month</p>
            <div className="mt-5 flex gap-3">
              <button className="px-4 py-1.5 rounded-full bg-gray-300 text-gray-500">
                Payouts (22)
              </button>
              <button className="px-4 py-1.5 rounded-full bg-sky-600 text-white">
                Refunds (6)
              </button>
            </div>
          </div>
          <OrderTable />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
