import React from "react";

const News = ({news}) => {
  return (
    <div className="max-w-[300px] flex gap-3 shadow-md rounded-lg p-3 bg-light/25 backdrop-blur-xl">
      <div className="w-[40%] h-fit rounded-md overflow-hidden object-cover">
        <img className="w-full object-cover" src={news.img} alt="News Image" />
      </div>
      <div className="w-[60%]">
        <p className="text-sm">{news.description}</p>
      </div>
    </div>
  );
};

export default News;
