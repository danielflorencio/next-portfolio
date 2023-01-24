import {FiExternalLink} from 'react-icons/fi'
import { projects } from '../data/projects'
export default function Projects(){
    return(
        <div className="w-full mb-16 flex flex-col justify-center items-center">
            {projects.map((project, index) => (
                <div key={index} className={project.direction === 'direct' ? 'my-12 w-4/5 h-fit flex flex-wrap justify-center' : 'flex-row-reverse my-12 w-4/5 h-fit flex flex-wrap justify-center'}>
                    <div style={{minWidth: '20rem'}} className="h-full flex justify-center items-center w-2/5"><img className="w-80 border border-solid rounded-lg shadow-xl mb-8" src={project.imgSrc}></img></div>
                    <div className=" w-3/5 max-md:w-full flex flex-col justify-between">
                        <div>
                            <div className='flex'>
                                <h3 className="text-left py-3 text-2xl font-bold">{project.title}</h3><a href={project.liveLink} className="hover:text-sky-400 transition-colors duration-150" target="_blank" rel="noopener noreferrer"><FiExternalLink/></a>
                            </div>
                            {project.descriptionParagraphs.map((paragraph, pIndex) =>(
                                <p key={pIndex} className="text-left">{paragraph}<br/><br/></p>
                            ))}
                        </div>
                        <div className="flex p-4 flex-wrap gap-2">
                            {project.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className="mr-4 border border-solid border-black w-fit h-8 p-2 flex justify-center items-center hover:text-white hover:bg-black transition-colors duration-150 rounded-lg">{skill}</div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}