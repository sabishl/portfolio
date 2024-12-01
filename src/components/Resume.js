import res from '../assets/res.jpg';

export default function Resume() {
  const config = {
    link: 'https://drive.google.com/file/d/1vDTttMosMinGTh3neVqL75ZnZwqEe-C9/view?usp=drive_link',
  };

  return (
    <section
      id="resume"
      className="flex justify-center bg-third px-5 py-4"
    >
      <div
        className="flex flex-col md:flex-row border border-white p-5 max-w-4xl"
      >
        {/* Resume Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end mb-4 md:mb-0 md:mr-4">
          <img
            className="w-full max-w-xs md:max-w-sm rounded-lg shadow-md"
            src={res}
            alt="Resume"
          />
        </div>

        {/* Resume Info */}
        <div className="md:w-1/2 flex justify-center">
          <div className="flex flex-col justify-center font-hero-font text-center md:text-left">
            <h1 className="text-4xl border-b-2 font-bold w-fit mx-auto md:mx-0 mb-5">
              Resume
            </h1>
            <p>
              You can view my Resume below:
            </p>
            <a
              className="btn bg-primary text-center text-white px-4 py-2 rounded-lg shadow hover:bg-secondary transition mt-3"
              href={config.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
