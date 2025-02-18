import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { cn } from '../lib/utils';

interface Review {
  title: string;
  description: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

interface LeftSidebarProps {
  isOpen: boolean;
  reviews: Review[];
  selectedReview: Review | null;
  onSelectReview: (review: Review) => void;
}

const LeftSidebar = ({ isOpen, reviews, selectedReview, onSelectReview }: LeftSidebarProps) => {
  return (
    <div className={cn(
      "hidden md:block w-72 bg-[#0B0B14] border-r border-gray-800 fixed top-[121px] left-0 h-[calc(100vh-121px)] overflow-y-auto transition-transform duration-300",
      !isOpen && '-translate-x-full'
    )}>
      <div className="p-4 space-y-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={cn(
              "bg-[#1B1F24] rounded-lg p-4 hover:bg-[#2D333B] transition-colors cursor-pointer",
              selectedReview === review && "bg-[#2D333B] ring-2 ring-[#4CAF50]"
            )}
            onClick={() => onSelectReview(review)}
          >
            <h3 className="text-white font-semibold mb-2">{review.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{review.description}</p>
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={review.author.avatar} alt={review.author.name} />
                <AvatarFallback>{review.author.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm text-white">{review.author.name}</p>
                <p className="text-xs text-gray-400">{review.author.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;