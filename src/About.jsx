import { SectionHeading } from "./components/SectionHeading";
import { SectionCTABtn } from "./components/SectionCTABtn";

const About = () => {
  const onCTAClickHandler = () => {
    window.open("/assets/resume/1-Kuldeep_Sharma_Resume_Full_stack_webdev.pdf");
  };

  return (
    <div>
      <div className="mb-10 text-center md:text-left md:flex justify-between">
        <SectionHeading
          headingText="About me"
          subHeadingText="Little bit of myself if you are interested"
        />
        <div className="hidden md:inline-block">
          <SectionCTABtn text="Download CV" onCTAClick={onCTAClickHandler} />
        </div>
      </div>

      <div className="grid gap-5 justify-center md:grid-cols-2 md:gap-0">
        <img
          src="/assets/images/me&tea.jpg"
          alt="Kuldeep with nice cup of tea"
          className="rounded-base max-w-[400px] w-full md:col-start-2 mx-auto"
        />
        <p className="text-center md:text-left md:col-start-1 md:row-start-1 md:text-lg">
          Hi, I'm Kuldeep and I'm currently pursuing my Bachelor's degree in
          <strong> Computer Science.</strong> I've had a passion for computers
          since childhood and started coding in 8th grade.
          <br /> <br />
          Over time, I've gained proficiency in various programming languages
          such as C, C++, Dart, and Python. Currently, I'm upgrading my skills
          in <strong>MERN stack web development. </strong> <br />
          <br />
          Originally from a small town in Haryana, I'm now based in
          <strong> New Delhi</strong> and eagerly seeking exciting career
          opportunities to help me unleash my full potential. <br /> <br /> To
          know more{" "}
          <span
            className="text-accentColor font-bold cursor-pointer"
            onClick={onCTAClickHandler}
          >
            Download my CV.
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
