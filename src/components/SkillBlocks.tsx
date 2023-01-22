import {IconContext} from 'react-icons'
import {BsBootstrapFill} from 'react-icons/bs'
import {DiReact, DiSass, DiCss3} from 'react-icons/di'
import {SiJavascript, SiTailwindcss, SiNextdotjs, SiTypescript, SiRedux} from 'react-icons/si'
import {AiFillHtml5, AiFillGithub} from 'react-icons/ai'
import { useMediaQuery } from 'react-responsive'
const skillBlocks = [
    [<AiFillHtml5/>, 'HTML'], 
    [<DiCss3/>, 'CSS'],
    [<SiJavascript/>, 'JavaSCript'],
    [<DiReact/>, 'React'],
    [<SiNextdotjs/>, 'Next Js'],
    [<SiTypescript/>, 'TypeScript'],
    [<SiRedux/>, 'Redux Toolkit'],
    [<AiFillGithub/>, 'Git'],
    [<BsBootstrapFill/>, 'Bootstrap'],
    [<DiSass/>, 'Sass'],
    [<SiTailwindcss/>, 'Tailwind Css']
]
export default function SkillBlocks(){
    const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' }); 
    return(
        <div className={isSmallScreen ? " w-screen flex justify-around gap-12 flex-wrap px-20" : '" w-11/12 flex justify-around gap-12 flex-wrap px-20"'}>
            {skillBlocks.map((skill, index) => (
                <div key={index} className={isSmallScreen ? 'flex flex-col justify-center items-center w-28 h-28 border rounded-lg border-solid' : 'flex flex-col justify-center items-center w-36 h-36  border rounded-lg border-solid'}>
                    {isSmallScreen ? (
                        <IconContext.Provider value={{size: '3.0rem'}}>
                            {skill[0]}
                        </IconContext.Provider>    
                    ) : (
                        <IconContext.Provider value={{size: '3.5rem'}}>
                            {skill[0]}
                        </IconContext.Provider>
                    )}
                    <div className='font-bold mt-2'>{skill[1]}</div>
                </div>
            ))}
        </div>
    )
}
