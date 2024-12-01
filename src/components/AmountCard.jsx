import React from 'react'
import { AiOutlineQuestionCircle } from 'react-icons/ai'

function AmountCard({ title, amount }) {
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <div className="flex items-center gap-3">
        <span>{title}</span>
        <AiOutlineQuestionCircle />
      </div>
      <div className="p-2">
        <span className="text-3xl font-bold">₹ {amount}</span>
      </div>
    </div>
  )
}

export default AmountCard