
import HomeLayout from "../../layouts/HomeLayout";
import Images from "../../assets/images";
import TabTitleService from "../../services/TabTitleService";
import { RecentNews } from "../../constants/RecentNews";
import News from "../../components/home/News";
import News2 from "../../components/home/News2";
import ImportantNews from "../../components/home/ImportantNews";
import { Members } from "../../constants/Members";
import MemberCard from "../../components/home/MemberCard";
import MediaCard from "../../components/home/MediaCard";
import img1 from '../../assets/TGCCorner/1.jpeg'
import img2 from '../../assets/TGCCorner/2.jpeg'
import img3 from '../../assets/TGCCorner/3.jpeg'
import img4 from '../../assets/TGCCorner/4.jpeg'
import img5 from '../../assets/TGCCorner/5.jpeg'
import img6 from '../../assets/TGCCorner/6.jpeg'
const Recent = RecentNews.slice(0, 3);

const Home = () => {
  TabTitleService.setTabTitle("Golf & Beyond");
  console.log(RecentNews);
  return (
    <HomeLayout>
      <div className="grid grid-cols-2 gap-4 flex justify-between mt-5 mb-5 p-10">
        <div className="flex items-baseline ">
          <h1 className="text-3xl pt-20 mt-20 p-10">Indoor Golf... And a Lot More!
            Beyond Golf features FIVE GOLFZON simulators where you can play some of the world’s most famous courses in extreme realism.  Enjoy your round of golf in a laid-back atmosphere complete with a full bar, gourmet food menu, and big screen TVs!</h1>
        </div>

        <img
          className="w-full object-cover object-center rounded-xl"
          src={Images.banner.heroImage1}
          alt="HeroImage of Golf and Beyond"
        />

      </div>


      {/* recent news section */}
      <section className="w-full h-fit p-8 bg-primary flex justify-center">
        <div className="w-fit md:w-[90%] flex flex-col md:flex-row flex-wrap justify-center gap-2 items-start p-4">
          {Recent.map((nws) => (
            <News key={nws.id} news={nws} />
          ))}
        </div>
      </section>
      <section>
        <div className="w-full h-fit bg-secondary p-4 md:px-8 md:py-4 flex justify-center items-center text-3xl text-light">
          <h2>Golfing All News</h2>
        </div>
        <div className="w-full flex justify-center items-start bg-light py-10">
          <div className="w-full md:w-[90%] h-fit p-2 md:p-0 flex flex-col md:flex-row gap-4 items-start">
            <div className="w-full md:w-1/2">
              <ImportantNews news={RecentNews[0]} />


            </div>
            <div className="w-full md:w-1/3">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                {RecentNews.map((nws) => (
                  <News2 key={nws.id} news={nws} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured stories */}
      <section className="w-full pt-2 md:py-20">
        {/* <div className="w-full h-fit p-4 md:px-8 md:py-4 flex justify-center items-center text-secondary font-bold">
          <h2 className="text-4xl border-b-8 border-primary px-6 py-2">
            Featured Stories
          </h2>
        </div> */}
        <div className="w-full h-[650px] md:h-[500px] relative flex justify-center items-center">
          <div className="w-full md:w-[90%] h-full md:px-10 flex justify-around">
            <p className="hidden md:block text-7xl font-bold text-light drop-shadow-md z-10 h-fit self-center z-20">
              Featured
              <br /> Stories
            </p>
            <div className="w-full md:w-[400px] lg:w-[600px] h-full bg-light/50 backdrop-blur-md z-10 p-8 rounded-3xl font-thin flex flex-col gap-4 border-l-8 border-light overflow-hidden">
              <h2 className="text-3xl">
                Bangladesh: The Next Frontier in Golf Tourism
              </h2>
              <p>
                Picture this: teeing off with the lush green hills of Bangladesh
                as your backdrop, or sinking a putt with a serene beachside view
                in the distance. Golf tourism is on the rise globally, and
                Bangladesh is emerging as an exciting new destination for those
                who love to combine travel with the game of golf. Traditionally,
                destinations like Scotland, the USA, and Spain have been the
                go-to spots for golf enthusiasts. Still, Asia is quickly
                catching attention, with Bangladesh leading the charge as a
                fresh and inviting location for players worldwide.
              </p>
              <h3 className="text-xl">The Rise of Golf Tourism</h3>
              <p>
                The world of golf tourism is booming, contributing billions to
                the global economy each year. As of 2019, the market was valued
                at a whopping USD 22 billion...
              </p>
              <button className="w-fit text-right self-end text-green-800">
                Read more
              </button>
            </div>
          </div>
          <div className="w-full h-full absolute top-0 left-0">
            <img
              src={Images.banner2}
              alt="Banner image for Featured stories"
              className="w-full h-full object-cover object-bottom absolute top-0 left-0 z-0"
            />
          </div>
        </div>
        <section>
          <div className="w-full h-fit bg-secondary p-4 md:px-8 md:py-4 flex justify-center items-center text-3xl text-light mt-5 mb-5">
            <h2>Golfing  News</h2>
          </div>
          <div className="w-full flex justify-center items-start bg-light ">
            <div className="w-full md:w-[90%] h-fit p-2 md:p-0 flex flex-col md:flex-row gap-2 items-start">
              <div className="w-full md:w-1/3">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                  {RecentNews.map((nws) => (
                    <News2 key={nws.id} news={nws} />
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/1">
                <ImportantNews news={RecentNews[0]} />


              </div>
            </div>
          </div>
        </section>
        {/* <div className="w-full h-fit flex justify-center py-10">
          <div className="w-[90%] h-fit flex flex-wrap justify-center gap-4">
            {Stories.map((story) => (
              <FeaturedStories key={story.id} story={story} />
            ))}
          </div>
        </div> */}
      </section>
      {/* Executive members */}
      <section className="flex flex-col md:gap-10">
        <div className="w-full h-fit bg-primary p-4 md:px-8 md:py-4 flex justify-center items-center text-3xl text-sedondaryLight font-bold">
          <h2>Executive Members</h2>
        </div>
        <div className="w-full flex justify-center md:pb-20">
          <div className="w-[90%] flex flex-wrap justify-center gap-4">
            {Members.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
      {/* TGC */}
      <section className="flex flex-col md:gap-10">
        <div className="w-full bg-primary p-4 md:px-8 md:py-4 flex justify-center items-center text-3xl text-sedondaryLight font-bold">
          <h2>TGC Galleries </h2>
        </div>
        <div className="carousel w-full " style={{ height: '550px' }}>
          <div id="slide1" className="carousel-item relative w-full">
            <img src={img6} className="w-full h-full object-cover" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={img5} className="w-full h-full object-cover" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={img3} className="w-full h-full object-cover" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={img4} className="w-full h-full object-cover" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>

      </section>

      {/* Galleries */}
      <section className="py-2 flex flex-col md:gap-6">
        <div className="w-full h-fit md:px-8 flex justify-center items-center text-3xl text-secondary font-bold">
          <h2>Galleries</h2>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-[90%] flex flex-wrap justify-center gap-4">
            {Members.map((member) => (
              <MediaCard key={member.id} />
            ))}
          </div>
        </div>
      </section>
    </HomeLayout>
  );
};

export default Home;
