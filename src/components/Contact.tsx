import {FaWhatsappSquare} from 'react-icons/fa'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {SiGmail} from 'react-icons/si'
import { IconContext } from 'react-icons'
import { useState } from 'react'

export default function ContactSection(){
    
    const [showMessage, setShowMessage] = useState(false);

    const handleClick = async () => {
        try {
          await navigator.clipboard.writeText('danielflorenciodev@gmail.com');
          setShowMessage(true);
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
    };
    
    return(
        <div className='flex flex-col justify-center items-center'>
            <div className='flex mt-12 gap-12'>
                <div>
                    <a href='https://wa.me/55084996509076' target="_blank" rel="noopener noreferrer">
                        <IconContext.Provider value={{size: '3.5rem'}}>
                            <FaWhatsappSquare/>
                        </IconContext.Provider>
                    </a>
                </div>
                <div>
                    <a href='https://www.linkedin.com/in/danolliver/' target="_blank" rel="noopener noreferrer">
                        <IconContext.Provider value={{size: '3.5rem'}}>
                            <AiFillLinkedin/>
                        </IconContext.Provider>
                    </a>
                </div>
                <div className='flex items-center'>
                    <button onClick={handleClick}>
                        <IconContext.Provider value={{size: '3.5rem'}}>
                            <SiGmail/>
                        </IconContext.Provider>
                    </button>
                    
                </div>
            </div>
            <div>
            {showMessage && (
                    <div className="mt-6 h-fit w-fit px-4 py-1 border-solid border-2 border-green-300 rounded bg-green-200 text-green-700">
                    My email contact has been copied to the clipboard. <br/> Now email me so we can start talking.
                    </div>
                    )}
            </div>
            <div className='mt-8 mb-20'>
                <a href='https://github.com/danielflorencio' target="_blank" rel="noopener noreferrer">
                    <IconContext.Provider value={{size: '3.5rem'}}>
                        <AiFillGithub/>
                    </IconContext.Provider>
                </a>
            </div>
        </div>       
    )
}