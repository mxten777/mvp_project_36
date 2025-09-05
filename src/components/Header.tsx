import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { 
    to: "/solutions", 
    label: "솔루션", 
    icon: (
      <svg width="20" height="20" fill="none">
  <rect x="4" y="8" width="12" height="6" rx="2" fill="#a78bfa"/>
      </svg>
    )
  },
  { 
    to: "/cases", 
    label: "사례", 
    icon: (
      <svg width="20" height="20" fill="none">
  <circle cx="10" cy="10" r="8" fill="#a78bfa"/>
      </svg>
    ) 
  },
  { 
    to: "/blog", 
    label: "블로그", 
    icon: (
      <svg width="20" height="20" fill="none">
  <rect x="4" y="5" width="12" height="8" rx="2" fill="#a78bfa"/>
      </svg>
    ) 
  },
  { 
    to: "/support", 
    label: "고객지원", 
    icon: (
      <svg width="20" height="20" fill="none">
  <rect x="5" y="5" width="10" height="10" rx="5" fill="#a78bfa"/>
      </svg>
    ) 
  },
  { 
    to: "/about", 
    label: "소개", 
    icon: (
      <svg width="20" height="20" fill="none">
  <rect x="5" y="5" width="10" height="10" rx="2" fill="#a78bfa"/>
      </svg>
    ) 
  },
  { 
    to: "/admin", 
    label: "Admin", 
    icon: (
      <svg width="20" height="20" fill="none">
  <rect x="4" y="8" width="12" height="4" rx="2" fill="#a78bfa"/>
      </svg>
    ) 
  },
];

function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // 외부 클릭 시 닫힘
  useEffect(() => {
    if (!open) return;
    
    function handleClick(e: MouseEvent) {
      if (
        (menuRef.current && menuRef.current.contains(e.target as Node)) ||
        (buttonRef.current && buttonRef.current.contains(e.target as Node))
      ) {
        return; // 메뉴 또는 버튼 클릭 시 무시
      }
      setOpen(false);
    }
    
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEsc);
    
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  // 모바일 메뉴 열려있을 때 스크롤 방지
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
  <header className="bg-[#18181b] shadow-md sticky top-0 z-40 text-[#f4f4f5]">
  <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between relative">
          {/* 로고 */}
          <Link to="/" className="flex items-center gap-2 font-extrabold text-2xl sm:text-3xl text-[#60a5fa] tracking-tight z-30">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#38bdf8" />
              <text x="16" y="21" textAnchor="middle" fontSize="16" fill="#18181b" fontWeight="bold">S</text>
            </svg>
            <span className="whitespace-nowrap">스마트한</span>
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden sm:block">
            <ul className="flex items-center gap-1 md:gap-2">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="px-3 py-2 rounded-lg text-[#60a5fa] bg-[#23272f] hover:bg-[#1e293b] hover:text-[#38bdf8] transition-colors duration-150 text-sm md:text-base font-bold flex items-center gap-1"
                  >
                    {item.icon && <span className="hidden md:inline-block">{item.icon}</span>}
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 햄버거 버튼 (모바일) */}
          <button
            ref={buttonRef}
            className="sm:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#60a5fa] bg-[#23272f] border border-[#60a5fa] text-[#f4f4f5] shadow-sm transition-colors duration-200 z-30"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            onClick={() => setOpen(!open)}
          >
            <svg width="24" height="24" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* 모바일 네비게이션 메뉴 */}
        <div 
          ref={menuRef}
          className={`sm:hidden fixed inset-0 bg-black/60 z-20 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className={`bg-[#23272f] h-auto max-h-[90vh] overflow-y-auto w-[80%] max-w-[320px] fixed top-[60px] right-0 shadow-xl rounded-bl-2xl transition-transform duration-300 transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}>
            <nav className="p-4">
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.to} className="w-full">
                    <Link
                      to={item.to}
                      className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-[#60a5fa] bg-[#23272f] hover:bg-[#1e293b] hover:text-[#38bdf8] transition-colors duration-150 text-base font-bold"
                      onClick={() => setOpen(false)}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
