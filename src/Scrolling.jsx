const Scrolling = () => {
  return (
    <>
      <style>
        {`
          @keyframes scroll-rtl {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .scroll-rtl {
            animation: scroll-rtl 15s linear infinite;
          }
        `}
      </style>

      <div className="w-full overflow-hidden bg-yellow-400 my-2">
        <div className="whitespace-nowrap text-black text-xl md:text-2xl font-bold scroll-rtl py-2">
          BUY DEGEN DOGE 🚀 BUY DEGEN DOGE 🚀 BUY DEGEN DOGE 🚀 BUY DEGEN DOGE 🚀 BUY DEGEN DOGE 🚀 BUY DEGEN DOGE 🚀
        </div>
      </div>
    </>
  );
};

export default Scrolling;
