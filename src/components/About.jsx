const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="lg:pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500  ">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Welcome to my portfolio! I'm Divyank Trivedi, a passionate Full Stack
          Web Developer eager to start my career in the tech industry. Fresh out
          of ABES Engineering College, where I honed my skills and fueled my
          passion for innovation, I am excited to apply my comprehensive
          training to real-world challenges.
        </p>
        <br />
        <p className="text-xl ">
          My portfolio showcases various projects that demonstrate my
          proficiency in both front-end and back-end development, using
          technologies like HTML, CSS, JavaScript, and Node.js. From dynamic
          websites to robust web applications, each project reflects my
          commitment to learning and growth. Explore my work to see how I can
          contribute to your team. Let's collaborate and create something
          amazing together!
        </p>
      </div>
    </div>
  );
};
export default About;
