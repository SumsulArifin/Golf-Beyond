import React, { useState } from "react";

const ImportantNews = ({ news }) => {
  const [showDetails, setShowDetails] = useState(0);
  return (
    <div className="w-full ">
      <div className="w-full rounded-lg">
        <img
          src={news.img}
          className="w-full"
          alt="Featured news of Golf & Beyond"
        />
        <div className="w-full text-1xl pt-8 mt-10 ">
          <h2 className="text-3xl mb-4">{news.description}</h2>
          <p>{news.details}</p>
          <a className='w-full block text-right text-xm text-primary cursor-pointer'>...Read more</a>
        </div>
      </div>
    </div>
  );
};

export default ImportantNews;
