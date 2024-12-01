import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

function PayoutCard({ title, amount, orderCount }) {
  return (
    <div className="bg-sky-600 hover:bg-sky-500 overflow-hidden text-white shadow-md rounded-md">
      <div className="p-4 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span>{title}</span>
          <AiOutlineQuestionCircle />
        </div>
        <div className="flex justify-between">
          <span className="text-3xl font-bold">₹ {amount}</span>
          <span className=" underline flex items-center">
            <span>{orderCount} orders</span> <IoIosArrowForward size={24} />
          </span>
        </div>
      </div>

      <div className="bg-sky-800 flex justify-between p-2 px-4">
        <span>Next payout date:</span>
        <span>Today, 04:00 PM</span>
      </div>
    </div>
  );
}

export default PayoutCard;
