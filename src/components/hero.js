import SabishImg from'../assets/sabish.jpg'
import { FaGithubSquare , FaLinkedin } from "react-icons/fa";
export default function Hero(){
     const config ={
        subtittle : 'I am a Full Stack Enthusiast'
     }


    return <section className=' flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
       <div className='md: w-1/2 flex flex-col'>
       <h1 className=' text-4xl font-hero-font'>Hi,<br/> I am Sabish L
        <p className='text-red-600 text-2xl'>{config.subtittle}</p>
        </h1>
        <div className='flex py-5'>
            <a href='https://github.com/sabishl' target="_blank" className='pr-5 hover:text-white'><FaGithubSquare size={50}/> </a>
            <a href='https://www.linkedin.com/in/sabish-l/' target="_blank" className='pr-5  hover:text-blue-500'><FaLinkedin size={50}/></a>
        </div>
       </div>
      
       <img className='md:w-1/3 h-1/5' src={SabishImg}/>
    </section>
}
