import React from 'react';

const FloatingShapes: React.FC = () => {
  return (
    <>
      <div className="shape-float absolute opacity-25 filter blur-2xl w-52 h-52 rounded-full bg-accent top-[-5%] left-[-80px]"></div>
      <div className="shape-float absolute opacity-25 filter blur-2xl w-48 h-48 bg-blue-500 bottom-[5%] right-[-60px] transform rotate-30"></div>
      <div
        className="shape-float absolute opacity-25 filter blur-2xl w-0 h-0 
        border-l-[100px] border-l-transparent
        border-r-[100px] border-r-transparent
        border-b-[180px] border-b-indigo-400
        top-[60%] left-[5%]"
        style={{ animationDelay: '2s' }}
      ></div>
    </>
  );
};

export default FloatingShapes;