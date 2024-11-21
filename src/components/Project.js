import calc from '../assets/calc.webp';
import blood from '../assets/blood.jpg';
import bus from '../assets/bus.jpeg';
import College from '../assets/college.png';
import bpo from '../assets/bpo.webp';

export default function Project() {
    const projectLinks = [
        { src: calc, title: 'Calculator Application Using HTML,CSS,JS', link: 'https://sabishl.github.io/calculator/' },
        { src: bus, title: 'College Bus Reservation System Using HTML,CSS,JS', link: 'https://github.com/sabishl/College-Bus-Management-systme.git' },
        { src: bpo, title: 'BPO System Using MERN Stack', link: 'https://github.com/sabishl/BPO-system.git' },
        { src: blood, title: 'Blood Donation Management System Using Flutter & Firebase', link: 'https://github.com/sabishl/Blood-donation-managment.git' },
        { src: College, title: 'College Employee Management System using Flutter & MS SQL', link: 'https://github.com/sabishl/Employee-management-system.git' },
    ];

    return (
        <section id='project' className="flex flex-col px-5 py-10 justify-center bg-secondary">
            <div className="w-full">
                <div className="flex flex-col px-10 py-5 font-hero-font">
                    <h1 className='text-4xl border-b-2 font-bold w-[150px] mb-5'>Projects</h1>
                    <p>These are my Web and Mobile Application Projects</p>
                </div>  
            </div>
            <div className="w-full">
                <div className='flex flex-col md:flex-row gap-10 px-5 justify-center'>
                    {projectLinks.slice(0, 3).map((project, index) => (
                        <div key={index} className='relative flex justify-center group overflow-hidden rounded-lg'>
                            <img className='h-[250px] w-[300px] transition-transform duration-500 group-hover:scale-110' src={project.src} alt={`Project ${index + 1}`} />
                            <div className='project-desc group-hover:opacity-100 flex flex-col items-center justify-center bg-white/60 backdrop-blur-md absolute left-0 right-0 bottom-0 top-0 opacity-0 transition-opacity duration-300'>
                                <p className='font-bold text-center px-5 py-2 text-blue-800'>{project.title}</p>
                                <a href={project.link} target='_blank' className='mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition'>
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="py-10 w-full">
                <div className='flex flex-col md:flex-row gap-10 px-5 justify-center'>
                    {projectLinks.slice(3).map((project, index) => (
                        <div key={index + 3} className='relative flex justify-center group overflow-hidden rounded-lg'>
                            <img className='h-[250px] w-[300px] transition-transform duration-500 group-hover:scale-110' src={project.src} alt={`Project ${index + 4}`} />
                            <div className='project-desc group-hover:opacity-100 flex flex-col items-center justify-center bg-white/60 backdrop-blur-md absolute left-0 right-0 bottom-0 top-0 opacity-0 transition-opacity duration-300'>
                                <p className='font-bold text-center px-5 py-2 text-blue-800'>{project.title}</p>
                                <a href={project.link} target='_blank' className='mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition'>
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
