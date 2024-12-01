import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RevenueCard from './components/RevenueCard'
import AmountCard from './components/AmountCard'
import PayoutCard from './components/PayoutCard'
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Dashboard />
    // <div>
    //   <PayoutCard title={"Next payout"} amount={"2,312.23"} orderCount={23} />
    //   <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={"13"} />
    //   <AmountCard title={"Amount Processed"} amount={"23,92,312.19"} />
    // </div>
  )
}

export default App
