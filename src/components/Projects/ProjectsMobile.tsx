import {FiExternalLink} from 'react-icons/fi'
import { projects } from '../../data/projects'
export default function ProjectsMobile(){
    return(
        <div className="w-full mb-16 flex flex-col justify-center items-center">
            {projects.map(project => (
                <div className={project.direction === 'direct' ? 'my-12 w-4/5 h-fit flex flex-wrap' : 'flex-row-reverse my-12 w-4/5 h-fit flex flex-wrap'}>
                    
                    <div className=''>
                        <img className="w-80 border border-solid rounded-lg shadow-2xl" src={project.imgSrc}></img>
                        <div className='flex mt-12'>
                            <h3 className="text-left py-3 text-2xl font-bold">{project.title}</h3><a href={project.liveLink} className="hover:text-sky-400 transition-colors duration-150" target="_blank" rel="noopener noreferrer"><FiExternalLink/></a>
                        </div>
                        {project.descriptionParagraphs.map(paragraph =>(
                            <p className="text-left">{paragraph}<br/><br/></p>
                        ))}
                        <div className="flex p-4 flex-wrap gap-2">
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