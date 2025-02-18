import React from 'react';
import { Wallet, CreditCard, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

interface RightSidebarProps {
  isOpen: boolean;
}

const RightSidebar = ({ isOpen }: RightSidebarProps) => {
  return (
    <div className={cn(
      "hidden md:block w-60 bg-[#0B0B14] border-l border-gray-800 fixed top-[121px] right-0 h-[calc(100vh-121px)] overflow-y-auto transition-transform duration-300",
      !isOpen && 'translate-x-full'
    )}>
      <div className="p-6">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Accelerate Bank</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Bank Operations</h3>
            <div className="grid grid-cols-3 gap-4">
              <button className="flex flex-col items-center p-4 bg-[#2D333B] rounded-lg hover:bg-[#363D45] transition-colors">
                <Wallet className="text-gray-400 mb-2" size={24} />
                <span className="text-sm text-gray-300">Transfer</span>
              </button>
              <button className="flex flex-col items-center p-4 bg-[#2D333B] rounded-lg hover:bg-[#363D45] transition-colors">
                <CreditCard className="text-gray-400 mb-2" size={24} />
                <span className="text-sm text-gray-300">Pay Bills</span>
              </button>
              <button className="flex flex-col items-center p-4 bg-[#2D333B] rounded-lg hover:bg-[#363D45] transition-colors">
                <Zap className="text-gray-400 mb-2" size={24} />
                <span className="text-sm text-gray-300">Recharge</span>
              </button>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Account</h3>
            <div className="bg-[#2D333B] rounded-lg p-4">
              <h4 className="text-gray-300 mb-2">Debit Card Savings</h4>
              <p className="text-sm text-gray-400 mb-2">XXXX XXXX XXXX 0026 /</p>
              <p className="text-sm text-gray-400 mb-4">UPI: username@acc</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Total Balance</span>
                <span className="text-xl font-bold text-white">₹50,000</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Deposits</h3>
            <p className="text-sm text-gray-400 mb-4">
              Save lumpsum amount or make regular deposits at attractive rates.
            </p>
            <div className="bg-[#2D333B] rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-gray-300">Fixed Deposit</h4>
                <span className="text-yellow-500">🔒</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                I have some money saved that I want to deposit to earn higher interest.
              </p>
              <button className="w-full bg-white text-[#1B1F24] py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Open New Deposit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;