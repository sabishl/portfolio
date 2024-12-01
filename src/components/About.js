import bg from '../assets/ab6.png';
import { BiLogoFlutter } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa'; // Corrected import path

export default function About() {
  const config = {
    line: 'Frameworks: React JS, Flutter',
    line2: ''
  };

  return (
    <section id='about' className='flex flex-col md:flex-row bg-third px-5 py-5'>
      <div className='py-4 md:flex w-1/2'>
        <img src={bg} alt="Background" />
      </div>
      <div className='md:w-1/2 flex justify-center '>
        <div className=' flex flex-col justify-center font-head'>
          <h1 className='text-4xl border-b-2 font-bold w-[180px] mb-5 font-hero-font'>About Me</h1>
          <p className='pb-5'>
            I'm a final-year Computer Science and Engineering student at Ramco Institute of Technology.
            Passionate about <span className='font-bold text-red-600'>Full-stack Development</span> and <span className='font-bold text-red-600'>DevOps</span>,
            I've honed my skills through projects like a Blood Donation Management System and a College Staff Management System.
            My Oracle APEX project earned a "Best Project" award.
          </p>
          <p className='text-red-600 pb-5'>{config.line}</p>
          <div className='flex flex-row gap-4'>
            <FaReact size={40} style={{  border: '2px solid black', borderRadius: '5px', padding: '4px' }} />
            <BiLogoFlutter size={40} style={{ border: '2px solid black', borderRadius: '5px', padding: '4px' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
