/* eslint-disable react/prop-types */

const News2 = ({news, size=1}) => {
  return (
    <div className="w-full flex gap-3 shadow-md rounded-lg bg-light cursor-default">
      <div className="w-[45%] h-full overflow-hidden">
        <img className="w-full h-full object-cover object-center rounded-l-md" src={news.img} alt="News Image" />
      </div>
      <div className="w-[55%] p-4">
        <p className={`${size>5?'text-xl':'text-sm'} font-medium text-sedondaryLight`}>{news.description}</p>
        {
          news.details && (<p className="text-sm">{news.details.slice(0, size*50)}</p>)
        }
        <a className='w-full block text-right text-xm text-primary cursor-pointer'>...Read more</a>
      </div>
    </div>
  )
}

export default News2