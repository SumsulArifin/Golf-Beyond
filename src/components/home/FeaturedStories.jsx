import React from "react";

const FeaturedStories = ({ story }) => {
  return (
    <div className='w-full md:max-w-[260px] h-fit flex flex-col items-center rounded-lg shadow-lg shadow-slate-300 cursor-default hover:-translate-y-2 transition-all duration-300'>
        <div className="w-full h-fit rounded-t-xl overflow-hidden">
            <img className='w-full object-cover object-center' src={story.img} alt="Member image" />
        </div>
        <div className="p-4 flex flex-col gap-2 text-sm font-thin rounded-b-xl">
            <p>{story.description}</p>
            <div className="">
                <p>{story.name}</p>
                <p>{story.address}</p>
            </div>
        </div>
    </div>
  );
};

export default FeaturedStories;
