import res from '../assets/res.jpg';

export default function Resume() {
  const config={
    link :'https://drive.google.com/file/d/1QF8iqNUWtO0BorvtRDFkXLnGZtvPtSUh/view?usp=drive_link' 
  }

    return (
        <section id='resume' className='flex justify-center bg-third px-5 py-4'>
            <div className='flex flex-col md:flex-row border border-white p-5'>
                <div className='md:w-1/2 flex justify-end mb-4 md:mb-0 md:mr-4'>
                    <img className='w-[400px]' src={res} alt='Resume' />
                </div>
                <div className='md:w-1/2 flex justify-center'>
                    <div className=' flex flex-col justify-center font-hero-font'>
                        <h1 className='text-4xl border-b-2 font-bold w-[155px] mb-5'>Resume</h1>
                        <p className='pb-5'>
                            You can view my Resume <a className='btn text-white' href={config.link} target='_blank'>Download</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
