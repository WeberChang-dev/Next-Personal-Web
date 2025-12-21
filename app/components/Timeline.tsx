import React from 'react';
import Image from 'next/image';

interface TimelineItem {
  title: string;
  date: string;
  subtitle: string;
  imageUrl: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="relative w-full max-w-6xl mx-auto py-10 px-4 text-white">
      <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-400 -translate-x-1/2 hidden md:block"></div>

      <div className="space-y-12 md:space-y-0">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div key={index} className="relative flex flex-col md:flex-row items-center justify-between w-full mb-8">
              <div className={`w-full md:w-[45%] ${isEven ? 'md:order-1' : 'md:order-3'}`}>
                <div className="bg-[#121621] p-6 rounded-lg shadow-xl transition-transform hover:scale-[1.02]">
                  <div className="relative aspect-video mb-4 overflow-hidden rounded-md">
                    <Image 
                      src={item.imageUrl} 
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#B9D0E9] mb-2">{item.title}</h3>
                  <p className="text-sm font-semibold text-gray-300 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <div className="z-10 flex items-center justify-center w-full md:w-[10%] md:order-2 my-4 md:my-0">
                <div className="relative flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full border-2 border-white bg-[#181D2A] hidden md:block"></div>
                  
                  <div className={`md:absolute md:whitespace-nowrap bg-[#121621] px-3 py-1 rounded text-sm font-bold 
                    ${isEven ? 'md:left-12' : 'md:right-12'}`}>
                    {item.date}
                  </div>
                </div>
              </div>

              <div className={`hidden md:block md:w-[45%] ${isEven ? 'md:order-3' : 'md:order-1'}`}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;