"use client"
import { useState, useEffect } from "react";
import { AiOutlineUp } from "react-icons/ai";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollTop = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);

    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleScrollToTop}
      style={{ cursor: 'pointer', backgroundColor: 'white', borderRadius: '50%', padding: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
    >
      <AiOutlineUp className="w-6 h-6 text-black" />
    </div>
  );
};
