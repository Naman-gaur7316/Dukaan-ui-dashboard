import React from "react";
import { GoDownload } from "react-icons/go";
import { GrSearch } from "react-icons/gr";
import { TbArrowsSort } from "react-icons/tb";
import { orders } from "../data";

const tableHeading = [
  "ORDER ID",
  "STATUS",
  "TRANSACTION ID",
  "REFUND DATE",
  "ORDER AMOUNT",
];

function OrderTable() {
  return (
    <div className="bg-white p-3">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 px-4 py-2 rounded-md items-center border-2">
          <GrSearch size={18} className="text-gray-700" />
          <input
            type="text"
            placeholder="Order ID or transaction ID"
            className="flex-1 bg-transparent"
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 border border-neutral-300 rounded-md px-3 py-1.5">
            <span>Sort</span>
            <TbArrowsSort />
          </div>
          <div className="border border-neutral-300 p-2 rounded-md">
            <GoDownload size={20} />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto mt-5">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="font-medium">
            <tr>
              {tableHeading.map((heading) => (
                <th className={`px-6 py-3 border-b font-medium ${heading === "order amount".toUpperCase() ? "text-right": "" }`}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr>
                <td class="px-6 py-4 border-b">{order.orderId}</td>
                <td class="px-6 py-4 border-b">
                  <span class="flex items-center gap-2">
                    {order.status === "Successful" ? (
                      <span class="h-3 w-3 rounded-full bg-green-500"></span>
                    ) : order.status === "Processing" ? (
                      <span class="h-3 w-3 rounded-full bg-gray-500"></span>
                    ) : (
                      <span class="h-3 w-3 rounded-full bg-red-500"></span>
                    )}

                    {order.status}
                  </span>
                </td>
                <td class="px-6 py-4 border-b">{order.transactionId}</td>
                <td class="px-6 py-4 border-b">{order.refundDate}</td>
                <td class="px-6 py-4 border-b text-right">{order.orderAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderTable;
