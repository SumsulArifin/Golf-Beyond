/* eslint-disable react/no-unescaped-entities */

import AboutUsLayout from '../../layouts/AboutUsLayout'
import img from '../../assets/images/president&ceo.jpg'
import img1 from '../../assets/images/cto.jpg'
import img2 from '../../assets/images/Vice_President.jpg'
import TabTitleService from '../../services/TabTitleService'

const AboutUs = () => {
  TabTitleService.setTabTitle("About us | G&B")
  return (
    <AboutUsLayout className="m-10">
      <>
        <div className="flex justify-center mb-5 mt-5">
          <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src={img}
                alt="Shoes"
                className="h-100 w-full object-cover" // Add these classes
              />
            </figure>
            <div className="card-body ">
              <div className="text-center">
                <h2 className="card-title text-center">President & CEO</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mb-10">
          <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src={img2}
                alt="Item 2"
                className="h-80 w-full object-cover" // Add these classes
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center">Vice President</h2>
            </div>
          </div>

          <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src={img1}
                alt="Item 3"
                className="h-80 w-full object-cover" // Add these classes
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center">CTO</h2>
            </div>
          </div>
        </div>



        <div className="hero bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className='grid grid-cols-2'>
              <h1 className="text-3xl font-bold">About Us – Golf and Beyond</h1>
              <p className="indent-8">
                Welcome to "Golf and Beyond," your go-to magazine for everything golf and more! Proudly launched by the esteemed Tiger Golf Club (TGC), we're rooted in the lively golfing scene of Bangladesh. Our magazine beautifully combines the timeless charm of golf with the vibrant energy of sports and lifestyle. Dive into our pages to discover the latest in golf, along with engaging sports insights and lifestyle trends that are perfect for golfers, sports enthusiasts, and curious minds alike.
              </p>

            </div>
          </div>
        </div>
        <div className="hero bg-base-200 ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className='grid grid-cols-2'>
              <h1 className="text-3xl font-bold">About Tiger Golf Club (TGC)</h1>
              <p className="indent-8">
                Tiger Golf Club, founded on October 8, 2012, started as a dream shared by a group of passionate golfers from all walks of life, including diplomats, expatriates, local business leaders, defense personnel, and professionals. Nestled in the heart of Dhaka, with renowned courses like Kurmitola Golf Club and Army Golf Club nearby, TGC was created to unite people who share a passion for golf. What began as an informal association has grown into an officially registered Limited Company as of October 12, 2020.
              </p>
            </div>
          </div>
        </div>

        <div className="hero bg-base-200 ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className='grid grid-cols-2'>
              <h1 className="text-3xl font-bold">Vision</h1>
              <p className="indent-8">
                At TGC, our goal is simple: to promote the love of golf while fostering connections between communities both near and far. We provide a welcoming space where people can socialize and build new friendships, all while enjoying the game they love.
              </p>
            </div>
          </div>
        </div>
        <div className="hero bg-base-200 ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className='grid grid-cols-2'>
              <h1 className="text-3xl font-bold">Golf and Beyond Magazine</h1>
              <p className="indent-8">
                In line with TGC's values, "Golf and Beyond" is all about inclusivity, passion, and striving for excellence. Our magazine isn't just about golf; we cover a wide array of sports and lifestyle topics. You'll find in-depth features, expert opinions, player profiles, event highlights, and much more, offering you a glimpse into the ever-evolving world of sports and luxury living.
              </p>
            </div>
          </div>
        </div>
        <div className="hero bg-base-200 mb-10 ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className='grid grid-cols-2'>
              <h1 className="text-3xl font-bold">Our Mission</h1>
              <p className="indent-8">
                Our mission is to inspire and engage readers from around the world by delivering captivating content that showcases the best in golf, sports, and lifestyle. We aim to offer valuable insights not only from Bangladesh but from a global perspective.
              </p>
            </div>
          </div>
        </div>

      </>


    </AboutUsLayout>
  )
}

export default AboutUs;