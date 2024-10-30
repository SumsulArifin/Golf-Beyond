import img from "../assets/images/golf-and-beyond-logo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
// import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";

const MainFooter = () => {
  return (
    <>
      <footer className="footer bg-neutral text-neutral-content p-5 text-sm">
        <aside>
          <img className="w-[110px] h-[50px]" src={img} alt="Back to Top" />
          <p>
            Golfing & Beyond
            <br />
            Novo Tower, 13th Floor, <br />
            270, Tejgaon Industrial Area,
            <br /> Dhaka 1208, Bangladesh.
          </p>
        </aside>
        <nav>
          <a className="link link-hover ">Home</a>
          <a className="link link-hover">Golf</a>
          <a className="link link-hover">Lifestyle</a>
          <a className="link link-hover">Tournaments</a>
          <a className="link link-hover">Subscribe</a>
        </nav>
        <nav>
          <h6 className="footer-title">About us</h6>
          <a className="link link-hover">About Spec</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">Find Us</h6>
          <div className="flex justify-end gap-2">
            <a href="https://www.facebook.com/profile.php?id=61566667637223&mibextid=ZbWKwL" target="_blank" className="social-icon link link-hover" style={{ fontSize: "20px" }}>
              <FaFacebookSquare />
            </a>
            <a href="https://www.instagram.com" target="_blank" className="social-icon link link-hover" style={{ fontSize: "20px" }}>
              <FaInstagramSquare />
            </a>
            <a href="https://www.twitter.com" target="_blank" className="social-icon link link-hover" style={{ fontSize: "20px" }}>
              <FaTwitterSquare />
            </a>
            <a href="https://www.twitter.com" target="_blank" className="social-icon link link-hover" style={{ fontSize: "20px" }}>
              <FaPinterestSquare />
            </a>
            <a href="https://www.twitter.com" target="_blank" className="social-icon link link-hover" style={{ fontSize: "20px" }}>
              <FaLinkedin />
            </a>
          </div>
          <h6 className="footer-title">Contact Us</h6>
          <a href="mailto: quraitz@gmail.com" className="link link-hover flex items-center gap-2" style={{ fontSize: "20px" }}>
            <IoMailSharp /> <span className="text-sm">Golfandbeyondmagazine@gmail.com</span> </a>
          <a href="tel: 01306443102" className="link link-hover flex items-center gap-2" style={{ fontSize: "20px" }}><FaPhoneSquareAlt /><span className="text-sm">+8801714331388</span> </a>
          <form className="input-group flex justify-center items-center gap-2">
            <input type="email" className="form-control text-neutral-content p-2 rounded-lg border border-neutral-content h-12" placeholder="Email address" aria-label="Email address" />
            <button className="btn btn-success text-neutral-content p-2 rounded-lg h-12" type="button">Submit</button>
          </form>
        </nav>
      </footer>
      <div className="w-full flex justify-center bg-secondary  text-sm">
        <div className="col-md-12 text-center">
          <p className="text-neutral-content p-4">
              © <strong>Golfing & Beyond</strong>, All rights reserved by <strong>Tiger Golf Club</strong>
          </p>
        </div>
      </div>
    </>
    // <>
    //   <footer className="footer bg-neutral text-neutral-content  p-5">

    //     <aside>
    //       <img
    //         className="w-[75px] h-[50px]"
    //         src={img}
    //         alt="Back to Top"
    //       />
    //       <p >
    //         Golfing & Beyond
    //         <br />
    //         Novo Tower, 13th Floor, <br />
    //         270, Tejgaon Industrial Area,
    //         <br /> Dhaka 1208, Bangladesh.
    //       </p>
    //     </aside>
    //     <nav>

    //       <a className="link link-hover">Home</a>
    //       <a className="link link-hover">Golf</a>
    //       <a className="link link-hover">Lifestyle</a>
    //       <a className="link link-hover">Tournaments</a>
    //       <a className="link link-hover">Subscribe</a>
    //     </nav>
    //     <nav>
    //       <h6 className="footer-title">About us</h6>
    //       <a className="link link-hover">About Spec </a>
    //       <a className="link link-hover">Careers</a>
    //       <a className="link link-hover">Terms of use</a>
    //       <a className="link link-hover">Privacy policy</a>

    //     </nav>

    //     <nav>
    //       <h6 className="footer-title">Find Us</h6>
    //       <div className="flex justify-end gap-2">
    //         <a
    //           href="https://www.facebook.com/profile.php?id=61566667637223&mibextid=ZbWKwL"
    //           target="_blank"
    //           className="social-icon link link-hover"
    //           style={{ fontSize: "20px" }}
    //         >
    //           <FaFacebookSquare />
    //         </a>
    //         <a
    //           href="https://www.instagram.com"
    //           target="_blank"
    //           className="social-icon link link-hover"
    //           style={{ fontSize: "20px" }}
    //         >
    //           <FaInstagramSquare />
    //         </a>
    //         <a
    //           href="https://www.twitter.com"
    //           target="_blank"
    //           className="social-icon link link-hover"
    //           style={{ fontSize: "20px" }}
    //         >
    //           <FaTwitterSquare />
    //         </a>
    //         <a
    //           href="https://www.twitter.com"
    //           target="_blank"
    //           className="social-icon link link-hover"
    //           style={{ fontSize: "20px" }}
    //         >
    //           <FaPinterestSquare />
    //         </a>
    //         <a
    //           href="https://www.twitter.com"
    //           target="_blank"
    //           className="social-icon link link-hover"
    //           style={{ fontSize: "20px" }}
    //         >
    //           <FaLinkedin />
    //         </a>


    //       </div>
    //       <h6 className="footer-title">Contact Us</h6>
    //       <a href="mailto: quraitz@gmail.com" className="link link-hover"> Mail : Golfandbeyondmagazine@gmail.com</a>
    //       <a href="tel: 01306443102" className="link link-hover">Phone : 01714331388</a>
    //       <form className="input-group flex justify-center items-center gap-2">
    //         <input
    //           type="email"
    //           className="form-control text-neutral-content p-2 rounded-lg border border-neutral-content h-12"
    //           placeholder="Email address"
    //           aria-label="Email address"
    //         />
    //         <button
    //           className="btn btn-success text-neutral-content p-2 rounded-lg h-12"
    //           type="button"
    //         >
    //           Submit
    //         </button>
    //       </form>



    //     </nav>

    //   </footer >
    //   <div className="w-full flex justify-center bg-secondary p-6">
    //     <div className="col-md-12 text-center">
    //       <p className="text-neutral-content">
    //         <h6>
    //           © <strong>Golfing & Beyond</strong>, All right resevered by{" "}
    //           <strong>Tiger Golf Club</strong>
    //         </h6>
    //       </p>
    //     </div>
    //   </div>
    // </>


  );
};

export default MainFooter;
