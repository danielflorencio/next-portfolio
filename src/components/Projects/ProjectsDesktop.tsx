import {FiExternalLink} from 'react-icons/fi'
import { projects } from '../../data/projects'
export default function ProjectsDesktop(){
    return(
        <div className="w-full mb-16 flex flex-col justify-center items-center">
            {projects.map(project => (
                <div className={project.direction === 'direct' ? 'my-12 w-4/5 h-fit flex flex-wrap' : 'flex-row-reverse my-12 w-4/5 h-fit flex flex-wrap'}>
                    <div style={{minWidth: '20rem'}} className="h-full flex justify-center items-center w-2/5"><img className="w-80 border border-solid rounded-lg shadow-2xl" src={project.imgSrc}></img></div>
                    <div className=" w-3/5 flex flex-col justify-between">
                        <div>
                            <div className='flex'>
                                <h3 className="text-left py-3 text-2xl font-bold">{project.title}</h3><a href={project.liveLink} className="hover:text-sky-400 transition-colors duration-150" target="_blank" rel="noopener noreferrer"><FiExternalLink/></a>
                            </div>
                            {project.descriptionParagraphs.map(paragraph =>(
                                <p className="text-left">{paragraph}<br/><br/></p>
                            ))}
                        </div>
                        <div className="flex p-4 flex-wrap">
                            {project.skills.map(skill => (
                                <div className="mr-4 border border-solid border-black w-fit h-8 p-2 flex justify-center items-center hover:text-white hover:bg-black transition-colors duration-150">{skill}</div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}