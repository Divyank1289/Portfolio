import HeroImage from "../assets/HeroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto px-4 md:flex-row flex flex-col items-center justify-center h-full">
        <div className="flex flex-col justify-center h-full">
          <div className="text-4xl  sm:text-7xl font-bold text-white" >
            <TypeAnimation sequence={['I m a Full Stack Developer',1000,'I m a Problem Solver',1000 ]}
            wrapper="span"
            style={{display:'inline-block'}}
            speed={50}
            repeat={Infinity}></TypeAnimation>
            </div>
          <p className="text-gray-500 py-4 max-w-md">
            Strong in design and integration with in- tuitive problem solving
            skills . Passionate about implementing and launching new projects .
            Ability to translate business re- quirements into technical
            solutions
          </p>
          <div>
            <button className="group text-white cursor-pointer w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 ">
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div className="flex justify-center">
            <img src={HeroImage} alt="My Profile" className="rounded-2xl mx-au w-2/3 md:w-full" />
        </div>
      </div>
    </div>
  );
};
export default Home;
