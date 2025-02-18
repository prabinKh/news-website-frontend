import React, { useState, useEffect, useRef } from 'react';
import { Menu, Search, Moon, Menu as MenuIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';
import { cn } from './lib/utils';

const technologies = [
"Politics",
    "Economics/Business",
    "World News/International Affairs",
    "Science and Technology",
    "Health",
    "Environment/Climate Change",
    "Security/Defense",
    "Social Issues",
    "Legal/Justice",
    "Education",
    "Sports",
    "Entertainment",
    "Lifestyle",
    "Investigative Journalism",
    "Weather",
    "Local News",
    "Financial News",
    "Cyber Security",
    "Space Exploration",
    "Artificial Intelligence"
  // "HTML", "CSS", "JavaScript", "React", "Python", "Java", "SQL", "PHP", "C++", "Node.js",
  // "HTML", "CSS", "JavaScript", "React", "Python", "Java", "SQL", "PHP", "C++", "Node.js",
  // "HTML", "CSS", "JavaScript", "React", "Python", "Java", "SQL", "PHP", "C++", "Node.js",
  // "HTML", "CSS", "JavaScript", "React", "Python", "Java", "SQL", "PHP", "C++", "Node.js",
];

const reviews = [
  {
    title: "Well thought out",
    description: "Brilliant tool! Well thought out and if you are a...",
    content: "Brilliant tool! Well thought out and if you are a developer looking to improve your skills, this is the perfect platform. The tutorials are comprehensive and the interactive coding environment makes learning much more engaging.",
    author: {
      name: "Julian Wielek",
      role: "Developer and Designer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  },
  {
    title: "Love this tool",
    description: "Love this tool! As a developer, I must have tried...",
    content: "Love this tool! As a developer, I must have tried dozens of learning platforms, but this one stands out. The combination of theory and practical exercises is perfectly balanced, and the community support is exceptional.",
    author: {
      name: "Martin Moravek",
      role: "Founder - Minimalist Phone",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
    }
  },
  {
    title: "Love this tool",
    description: "Love this tool! As a developer, I must have tried...",
    content: "Love this tool! As a developer, I must have tried dozens of learning platforms, but this one stands out. The combination of theory and practical exercises is perfectly balanced, and the community support is exceptional.",
    author: {
      name: "Martin Moravek",
      role: "Founder - Minimalist Phone",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
    }
  },
  {
    title: "Exceptional Learning Experience",
    description: "The platform offers an exceptional learning experience...",
    content: "The platform offers an exceptional learning experience with its well-structured courses and hands-on projects. The real-time code editor and instant feedback system make it easy to learn and practice simultaneously.",
    author: {
      name: "Sarah Chen",
      role: "Senior Software Engineer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  },
  {
    title: "Exceptional Learning Experience",
    description: "The platform offers an exceptional learning experience...",
    content: "The platform offers an exceptional learning experience with its well-structured courses and hands-on projects. The real-time code editor and instant feedback system make it easy to learn and practice simultaneously.",
    author: {
      name: "Sarah Chen",
      role: "Senior Software Engineer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true);
  const [selectedReview, setSelectedReview] = useState<typeof reviews[0] | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleSelectReview = (review: typeof reviews[0]) => {
    setSelectedReview(review);
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full h-full flex flex-col bg-[#0B0B14] text-gray-100">
      {/* Header */}
      <header className="bg-[#0B0B14] border-b border-gray-800 sticky top-0 z-50 w-full">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-[#4CAF50] font-bold text-2xl">W</span>
              <span className="text-white text-xl">schools</span>
            </div>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white flex items-center"
            >
              <MenuIcon size={24} />
              <span className="ml-2">Menu</span>
            </button>
          </div>
          <div className="hidden sm:flex items-center gap-4 flex-1 justify-center">
            <div className="relative w-1/3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search..."
                className="bg-white text-black pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50] w-full"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
          
            <button className="bg-[#4CAF50] text-white px-6 py-2 rounded-full font-medium hover:bg-[#3d9c40] transition-colors">
              Log in
            </button>
          </div>
        </div>
      </header>

      {/* Main Navigation */}
      <nav className="bg-[#1B1F24] border-b border-gray-800 sticky top-[69px] z-40 w-full">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-12 overflow-x-auto custom-scrollbar">
            {technologies.map((tech, index) => (
              <a
                key={index}
                href="#"
                className="text-white hover:bg-[#2D333B] hover:text-[#4CAF50] whitespace-nowrap px-6 py-2 rounded-md transition-all duration-200 flex items-center"
              >
                {tech}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div ref={menuRef} className="bg-[#1B1F24] w-64 h-full overflow-y-auto">
            <div className="p-4 border-b border-gray-800">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <MenuIcon size={24} />
              </button>
            </div>
            <div className="p-4 space-y-4">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className={cn(
                    "bg-[#1B1F24] rounded-lg p-4 hover:bg-[#2D333B] transition-colors cursor-pointer",
                    selectedReview === review && "bg-[#2D333B] ring-2 ring-[#4CAF50]"
                  )}
                  onClick={() => handleSelectReview(review)}
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
        </div>
      )}

      <div className="flex flex-1 relative">
        {/* Left Sidebar Toggle */}
        <button
          onClick={() => setLeftSidebarOpen(!leftSidebarOpen)}
          className="hidden md:flex fixed left-0 top-1/2 z-40 bg-[#1B1F24] text-white p-2 rounded-r-lg border border-l-0 border-gray-700 hover:bg-[#2D333B] transition-colors"
        >
          {leftSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>

        {/* Right Sidebar Toggle */}
        <button
          onClick={() => setRightSidebarOpen(!rightSidebarOpen)}
          className="hidden md:flex fixed right-0 top-1/2 z-40 bg-[#1B1F24] text-white p-2 rounded-l-lg border border-r-0 border-gray-700 hover:bg-[#2D333B] transition-colors"
        >
          {rightSidebarOpen ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>

        {/* Main Content with Sidebars */}
        <div className="flex-1 transition-all duration-300">
          {/* Left Sidebar */}
          <LeftSidebar 
            isOpen={leftSidebarOpen}
            reviews={reviews}
            selectedReview={selectedReview}
            onSelectReview={setSelectedReview}
          />

          {/* Right Sidebar */}
          <div className={`transition-all duration-300 ${rightSidebarOpen ? 'md:mr-64' : 'md:mr-0'}`}>
            <RightSidebar isOpen={rightSidebarOpen} />
          </div>

          {/* Main Content */}
          <main className={`h-[calc(100vh-121px)] transition-all duration-300
            ${leftSidebarOpen ? 'md:ml-72' : 'md:ml-0'}
            ${rightSidebarOpen ? 'md:mr-64' : 'md:mr-0'}`}
          >
            <div className="h-full bg-[#3c3cbd] p-6 md:p-8">
              {selectedReview ? (
                <div className="max-w-2xl w-full">
                  <h2 className="text-3xl font-bold text-white mb-6">{selectedReview.title}</h2>
                  <div className="flex items-center gap-4 mb-8">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={selectedReview.author.avatar} alt={selectedReview.author.name} />
                      <AvatarFallback>{selectedReview.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-xl font-semibold text-white">{selectedReview.author.name}</p>
                      <p className="text-gray-300">{selectedReview.author.role}</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-200 leading-relaxed">{selectedReview.content}</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
                  {models.map((model, index) => (
                    <div
                      key={model.name}
                      className={`relative rounded-2xl bg-zinc-900 p-6 flex flex-col gap-3 transition-all duration-300
                        ${model.isHighlighted ? "ring-1 ring-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.15)]" : ""}
                        hover:ring-1 hover:ring-zinc-700`}
                    >
                      {model.status && <div className="text-zinc-500 text-sm tracking-wider">{model.status}</div>}
                      <h2 className="text-white text-xl font-semibold">{model.name}</h2>
                      <p className="text-zinc-400 text-sm leading-relaxed flex-grow">{model.description}</p>
                      <a href="#" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
                        Learn more
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;

// Add this at the top of the file with other constants
const models = [
  {
    name: "1.0 Ultra",
    description: "Our largest model for highly complex tasks.",
    status: "",
    isHighlighted: true,
  },
  {
    name: "2.0 Pro",
    description: "Our best model yet for coding performance and complex prompts.",
    status: "EXPERIMENTAL",
  },
  {
    name: "2.0 Flash",
    description: "Our powerful workhorse model with low latency and enhanced performance, built to power agentic experiences.",
    status: "GENERAL AVAILABILITY",
  },
  {
    name: "2.0 Flash Thinking",
    description: "Our enhanced reasoning model, capable of showing its thoughts to improve performance and explainability.",
    status: "EXPERIMENTAL",
  },
  {
    name: "2.0 Flash-Lite",
    description: "Our most cost-efficient model yet.",
    status: "PUBLIC PREVIEW",
  },
  {
    name: "1.0 Nano",
    description: "Our most efficient model for on-device tasks.",
    status: "GENERAL AVAILABILITY",
  },
];
