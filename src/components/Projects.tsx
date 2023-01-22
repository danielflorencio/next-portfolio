import {FiExternalLink} from 'react-icons/fi'

const projects = [
    { imgSrc: 'fire-screenshot.png', 
    title: 'Personal Finance Web App', 
    descriptionParagraphs: 
    ['This is Fire, a personal finance web application that helps people control their finances, take better financial decisions and retire as early as possible. This project has a handful of features all aimed towards one simple goal: making you get the best out of all of your money investments.', 
    'The app fetches data from external APIS in order to better inform the user of their preferred stocks real-time data whenever they need it.', 
    'It also helps them track all of their expenses, incomes, and will, in the future, use analytical data structures and algorithms to give insights on how to improve their spending, so they can accelerate their journey to financial independence.'], 
    skills: ['HTML', 'CSS', 'React', 'Redux', 'Bootstrap', 'TypeScript'], 
    link: 'https://danielflorencio.github.io/fire_advisor/',
    direction: 'direct'},
    
    { imgSrc: 'aos-screenshot.png', 
    title: 'AOS - The Application Optimizing System', 
    descriptionParagraphs: 
    ['A simple React application that helps software engineering professionals (and future professionals) track their efforts and prioritize their learning.', 
    'It helps them optimize their progress by analyzing their technical job skills and technical interview skills, so they know exactly what to focus and thus avoid procrastination and feeling lost.',
    'It also has a Word-frequency analyzing system, so they can analyze job postings descriptions and find the most common used keywords for their specific roles and beat the ATS (Applicant Tracking System).'], 
    skills: ['HTML', 'CSS', 'React', 'TypeScript'], 
    link: '',
    direction: 'reverse'},
    
    { imgSrc: 'salus-screenshot.png', 
    title: 'Digital Agency Website', 
    descriptionParagraphs: 
    ['Built a Website with the goal of acquiring new customers for a marketing agency that focuses on healthcare clinics and doctors as their main target audience.', 
    'It is a fully responsive and conversion focused web page, where it’s unique goal is to generate meetings and finally sales.'], 
    link: 'https://danielflorencio.github.io/rp-salusmidia/',
    skills: ['HTML', 'CSS', 'React', 'JavaScript'], direction: 'direct'}
] 

export default function Projects(){
    return(
        <div className="w-full mb-16 flex flex-col justify-center items-center">
            {projects.map(project => (
                <div className={project.direction === 'direct' ? 'my-12 w-4/5 h-fit flex flex-wrap' : 'flex-row-reverse my-12 w-4/5 h-fit flex flex-wrap'}>
                    <div className=" h-full flex justify-center items-center w-1/2"><img className=" w-3/5 border border-solid rounded-lg shadow-2xl" src={project.imgSrc}></img></div>
                    <div className="w-1/2 flex flex-col justify-between">
                        <div>
                            <div className='flex'>
                                <h3 className="text-left py-3 text-2xl font-bold">{project.title}</h3><a href={project.link} className="hover:text-sky-400 transition-colors duration-150"><FiExternalLink/></a>
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