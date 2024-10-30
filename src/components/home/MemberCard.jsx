/* eslint-disable react/prop-types */


const MemberCard = ({ member }) => {
  return (
    <div className="max-w-[700px] h-fit flex flex-wrap items-center md:relative md:ml-24 group cursor-default">
      <div className="w-full h-auto md:w-[200px] md:h-[160px] md:absolute md:-left-24 rounded-t-2xl md:rounded-2xl overflow-hidden shadow-md shadow-slate-300 md:-skew-x-12 md:skew-y-6 md:-rotate-12 group-hover:skew-x-0 group-hover:skew-y-0 group-hover:rotate-0 transition-all duration-300">
        <img
          src={member.img}
          className="w-full h-full object-cover object-center"
        ></img>
      </div>
      <div className="w-full md:max-w-[520px] h-full p-4 md:pl-[120px] flex flex-col gap-3 bg-white rounded-b-2xl md:rounded-3xl shadow-inner shadow-gray-300 items-center group-hover:shadow-lg">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-600 font-thin">{member.quote}</p>
          <div className="flex gap-4 items-center">
            <div className="w-[60px] aspect-square rounded-full overflow-hidden shadow-md shadow-gray-400">
              <img
                className="w-full h-full object-cover object-center"
                src={member.img}
                alt="Image of featured stories profile"
              />
            </div>
            <div className="flex flex-col justify-start">
              <p className="text-lg">{member.name}</p>
              <p className="text-sm font-thin">{member.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
