import React from 'react'
// Import header specific styles
import './../styles/header.css';

const Header: React.FC = () => {
  return (
    <header className="flex items-center shadow p-4">
      <img
        src="/assets/chanakya.png"
        alt="Chanakya Logo"
        className="h-10 w-10 mr-4"
      />
      <h1 className="text-2xl font-bold text-gray-800">NEETIBOT</h1>
    </header>
  )
}

export default Header