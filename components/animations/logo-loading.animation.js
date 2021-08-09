const LogoLoadingAnimation = () => (
  <div className="w-full h-screen bg-white flex justify-center items-center">
    <div className="z-0 rounded-full absolute w-28 h-28 opacity-20 -mt-32 bg-blue-dark animate-expand" />
    <div className="w-28 h-28 shadow-2xl rounded-full -mt-32">
      <div className="z-50 relative text-8xl h-full font-cabin font-bold text-center pt-2 bg-white rounded-full">
        <span className="text-blue-dark">t</span>
        <span className="text-blue">.</span>
      </div>
    </div>
  </div>
);

export default LogoLoadingAnimation;
