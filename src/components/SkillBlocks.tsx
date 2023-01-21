import {IconContext} from 'react-icons'
import {BsBootstrapFill} from 'react-icons/bs'
import {DiReact, DiSass, DiCss3} from 'react-icons/di'
import {SiJavascript, SiTailwindcss, SiNextdotjs, SiTypescript, SiRedux} from 'react-icons/si'
import {AiFillHtml5, AiFillGithub} from 'react-icons/ai'
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
    return(
        <div className="w-screen flex justify-around gap-16 flex-wrap px-20 pb-20">
            {skillBlocks.map(skill => (
                <div className='flex flex-col justify-center items-center w-36 h-36  border rounded-lg border-solid'>
                    <IconContext.Provider value={{size: '3.5rem'}}>
                        {skill[0]}
                    </IconContext.Provider>
                    <div className='font-bold mt-2'>{skill[1]}</div>
                </div>
            ))}
        </div>
    )
}