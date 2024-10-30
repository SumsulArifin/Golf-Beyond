

const MediaCard = () => {
  return (
    <div className="w-full md:max-w-[260px] h-fit flex flex-col items-center shadow-lg shadow-slate-300 cursor-default hover:scale-105 transition-all duration-300 relative">
      <div className="w-full h-full rounded-xl absolute top-0 left-0 p-8 flex flex-col gap-2 justify-center items-center bg-white backdrop-blur-md opacity-0 hover:opacity-100 transition-all duration-200 z-10">
        <button className="px-6 py2 bg-primary hover:bg-sedondaryLight rounded-lg hover:shadow-md text-secondary hover:text-light">
          Watch
        </button>
        <button className="px-6 py2 bg-primary hover:bg-sedondaryLight rounded-lg hover:shadow-md text-secondary hover:text-light">
          Description
        </button>
      </div>
      <div className="w-full h-full rounded-xl overflow-hidden z-0">
        <video src="" controls />
      </div>
    </div>
  );
};

export default MediaCard;
