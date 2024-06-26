import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLink = () => {

    const links=[
        {
            id: 1,
            child: (
                <>
              LinkedIn
              <FaLinkedin size={30} />
            </>
            ),
            href: 'https://www.linkedin.com/in/divyank-trivedi-aba601202/',
            style:'rounded-tr-md'
        },{
            id: 2,
            child: (
                <>
              Github
              <FaGithub size={30} />
            </>
            ),
            href: 'https://github.com/Divyank1289',
            
        },{
            id: 3,
            child: (
                <>
              Mail
              <HiOutlineMail size={30} />
            </>
            ),
            href: 'mailto:divyanktrivedi0@gmail.com',
          
        },{
            id: 4,
            child: (
                <>
              Resume
              <BsFillPersonLinesFill size={30} />
            </>
            ),
            href: 'https://drive.google.com/file/d/1ETyXWJyCuTfGFHPKOD67JcirhbEnNLvz/view?usp=drive_link',
            style:'rounded-br-md',
            download: true,
        }
        
    ]

  return (
    <div className="hidden lg:flex flex-col  top-[35%] left-0 fixed ">
      <ul>
        {links.map(({id,child,href,style,download})=>(
                <li key={id} className={" flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md hover:bg-purple-950 duration-300 hover:ml-[-10px]"+ " " + style}>
                <a href={href} target="_blank" rel="noreferrer" download={download} className="flex justify-between items-center w-full text-white">
                 {child}
                </a>
              </li>
        ))}
        
      </ul>
    </div>
  );
};
export default SocialLink;
