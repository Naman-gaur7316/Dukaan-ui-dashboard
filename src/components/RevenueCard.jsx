import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

function RevenueCard({ title, amount, orderCount }) {
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <div className="flex items-center gap-3">
        <span>{title}</span>
        <AiOutlineQuestionCircle />
      </div>
      <div className="flex justify-between p-2">
        <span className="text-3xl font-bold">₹ {amount}</span>
        <span className="text-sky-600 underline flex items-center"><span>{orderCount} orders</span> <IoIosArrowForward size={24} /></span>
      </div>
    </div>
  );
}

export default RevenueCard;
