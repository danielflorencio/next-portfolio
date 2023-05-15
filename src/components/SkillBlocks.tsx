import {IconContext} from 'react-icons'
import {BsBootstrapFill} from 'react-icons/bs'
import {DiReact, DiSass, DiCss3} from 'react-icons/di'
import {SiJavascript, SiTailwindcss, SiNextdotjs, SiTypescript, SiRedux} from 'react-icons/si'
import {AiFillHtml5, AiFillGithub} from 'react-icons/ai'
import { useMediaQuery } from 'react-responsive'

// The first value in the array is block's icon, the second value is the block's title, the third value is the block's custom color.
export const skillBlocks = [
    [<AiFillHtml5 className='hover:text-htmlIcon'/>, 'HTML',], 
    [<DiCss3 className='hover:text-cssIcon'/>, 'CSS'],
    [<SiJavascript className='hover:text-jsIcon'/>, 'JavaSCript'],
    [<DiReact className='hover:text-reactIcon'/>, 'React'],
    // [<SiNextdotjs/>, 'Next Js'],
    [<SiTypescript className='hover:text-tsIcon'/>, 'TypeScript'],
    [<SiRedux className='hover:text-reduxIcon'/>, 'Redux Toolkit'],
    [<AiFillGithub className='hover:text-white hover:bg-black rounded-full border-none'/>, 'Git'],
    [<BsBootstrapFill className='hover:text-bsIcon'/>, 'Bootstrap'],
    [<DiSass className='hover:text-sassIcon'/>, 'Sass'],
    [<SiTailwindcss className='hover:text-tailwindIcon'/>, 'Tailwind Css']
]
export default function SkillBlocks(){
    const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' }); 
    return(
        <div className={isSmallScreen ? " w-screen flex justify-around gap-12 flex-wrap px-20" : '" w-11/12 flex justify-around gap-12 flex-wrap px-20"'}>
            {skillBlocks.map((skill, index) => (
                <div key={index} className={isSmallScreen ? 'flex flex-col justify-center items-center w-28 h-28 border rounded-lg border-solid' : 'flex flex-col justify-center items-center w-36 h-36  border rounded-lg border-solid'}>
                    {isSmallScreen ? (
                        <IconContext.Provider value={{size: '3.0rem', className:`transition-colors duration-150`}}>
                            {skill[0]}
                        </IconContext.Provider>    
                    ) : (
                        <IconContext.Provider value={{size: '3.5rem', className:`transition-colors duration-150`}}>
                            {skill[0]}
                        </IconContext.Provider>
                    )}

                    <div className='font-bold mt-2'>{skill[1]}</div>
                </div>
            ))}
        </div>
    )
}
