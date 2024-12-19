import { useState, useEffect } from 'react';

const bannerMessages = [
  { text: "Get 50% on Selection", link: "Shop Now" },
  { text: "Free Shipping on Orders Over $50", link: "Learn More" },
  { text: "New Arrivals Just Landed", link: "Shop New" }
];

const TopBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerMessages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black text-white py-2 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span>📞 +91-097888800</span>
          </div>
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {bannerMessages.map((message, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-full"
              >
                <span>{message.text}</span>
                <a href="#" className="ml-2 underline">
                  {message.link}
                </a>
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <select className="bg-transparent border-none text-white">
              <option value="en">Eng</option>
              <option value="es">Es</option>
            </select>
            <select className="bg-transparent border-none text-white">
              <option value="us">Location</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;