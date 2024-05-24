import ContactsBackend from '../assets/portfolio/contacts.jpg'
import ExpenseTracker from '../assets/portfolio/ExpenseTracker.png'
import Food from '../assets/portfolio/Food.png'
import GYm from '../assets/portfolio/GYm.png'
import InvestmentCalc from '../assets/portfolio/InvestmentCalc.png'
import TextToSpeech from '../assets/portfolio/Speechtotext.png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Projects = () => {
    const projects=[
        {
            id:1,
            src: GYm,
            href: 'https://github.com/Divyank1289/GYM',
        },
        {
            id:2,
            src: ExpenseTracker ,
            href: 'https://github.com/Divyank1289/Expense-Tracker'
        },
        {
            id:3,
            src:ContactsBackend,
            href: 'https://github.com/Divyank1289/My-contacts-backend'
        },
        {
            id:4,
            src:Food,
            href: 'https://github.com/Divyank1289/Food_Ordering_App'
        },
        {
            id:5,
            src:InvestmentCalc,
            href: 'https://github.com/Divyank1289/Investment_Calculator'
        },
        {
            id:6,
            src:TextToSpeech,
            href: 'https://github.com/Divyank1289/Text-To-Speech'
        },

    ]
  return (
    <div name="Projects" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full lg:h-full pb-10'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-gray-500 border-b-4'>
                    Projects
                </p>
                <p className='py-6'>Check out some of my work right here </p>
            </div>

            

            <div  className='grid sm:grid-cols-3  md:grid-col-3 gap-8 px-12 sm:px-0'>
            {
                projects.map(({id,src,href})=>(
                    <div key={id} className='shadow-md shadow-gray-700 rounded-lg hover:scale-105'>
                    <img src={src} alt=""className='rounded-md duration-200  ' />
                    <div className='flex group items-center justify-center p-0'>
                        
                        <a href={href} target='_blank' rel='noreferrer' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 flex items-center'>Github Link <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight/></span> </a>
                    </div>
                </div> 
                ))
            }
               
            </div>
        </div>

    </div>
  )
}
export default Projects