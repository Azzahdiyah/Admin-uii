import React from "react";

const BillLoader = () => {
  return (
    <div className="animate-pulse duration-[2s]"> {/* Perlama durasi pulse */}
      {/* Simulasi 2 bill items */}
      {[1, 2].map((item) => (
        <div 
          key={item} 
          className="lg:flex justify-between pt-3 pb-3"
          style={{
            animation: `fadeInOut ${item * 1.5}s infinite` // Animasi fade yang lebih lama per item
          }}
        >
          <div className="flex">
            {/* Date box loader */}
            <div className="bg-gray-200 me-3 px-8 py-6 rounded-lg transition-all duration-1000"></div>
            
            {/* Content loader */}
            <div>
              {/* Logo loader dengan delay berbeda */}
              <div 
                className="h-6 w-24 bg-gray-200 rounded mb-2"
                style={{animation: `shimmer ${2 + item * 0.5}s infinite`}}
              ></div>
              {/* Name loader */}
              <div 
                className="h-4 w-32 bg-gray-200 rounded mb-2"
                style={{animation: `shimmer ${2.5 + item * 0.5}s infinite`}}
              ></div>
              {/* Last charge loader */}
              <div 
                className="h-3 w-28 bg-gray-200 rounded"
                style={{animation: `shimmer ${3 + item * 0.5}s infinite`}}
              ></div>
            </div>
          </div>
          
          {/* Amount loader */}
          <div className="flex place-content-center flex-col">
            <div 
              className="h-10 w-20 bg-gray-200 rounded-lg"
              style={{animation: `shimmer ${2 + item * 0.5}s infinite`}}
            ></div>
          </div>
        </div>
      ))}

      {/* Tambahkan keyframes untuk animasi */}
      <style jsx>{`
        @keyframes fadeInOut {
          0% { opacity: 0.3; }
          50% { opacity: 0.7; }
          100% { opacity: 0.3; }
        }

        @keyframes shimmer {
          0% { opacity: 0.3; }
          50% { opacity: 0.5; }
          100% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

export default BillLoader;