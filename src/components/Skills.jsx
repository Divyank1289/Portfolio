import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Js from '../assets/javascript.png'
import recatImage from '../assets/react.png'
import nodeImage from '../assets/node.png'
import tailwind from '../assets/tailwind.png'
import matui from '../assets/MUI.png'
import cpp from '../assets/Cpp.png'
import github from '../assets/github.png'


const Skills = () => {

    const techs=[
        {
            id:1,
            src: Html,
            title: 'HTML',
            style : 'shadow-orange-500'
        }, {
            id:2,
            src: Css,
            title: 'CSS',
            style : 'shadow-blue-500'
        }, {
            id:3,
            src: Js,
            title: 'Javascript',
            style : 'shadow-yellow-500'
        }, {
            id:4,
            src: recatImage,
            title: 'React',
            style : 'shadow-sky-800'
        }, {
            id:5,
            src: nodeImage,
            title: 'Node.js',
            style : 'shadow-green-500'
        }, {
            id:6,
            src: tailwind,
            title: 'Tailwind',
            style : 'shadow-sky-400'
        }, {
            id:7,
            src: matui,
            title: 'Material UI',
            style : 'shadow-blue-700'
        }, {
            id:8,
            src: cpp,
            title: 'C++',
            style : 'shadow-sky-500'
        }, {
            id:9,
            src: github,
            title: 'Github',
            style : 'shadow-gray-400'
        }
    ]

  return (
    <div name='Skills' className='bg-gradient-to-b from-gray-800 to-black w-full h-full  pb-10'>

        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div >
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
                <p className='py-6'> These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 lg:grid-cols-3 md:grid-col-3 gap-8 text-center py-8  px-12 sm:px-0'>
               {
                techs.map(({id,src,title,style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto ' />
                    <p className='mt-4'>{title}</p>
                </div>
                ))
               }
                
            </div>
        </div>
    </div>
  )
}
export default Skills