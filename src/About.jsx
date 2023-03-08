import { SectionHeading } from "./components/SectionHeading";
import { SectionCTABtn } from "./components/SectionCTABtn";
import { MobileCTABtn } from "./components/MobileCTABtn";

const About = () => {
  const onCTAClickHandler = () => {};

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
          src="./src/assets/images/me&tea.jpg"
          alt="Kuldeep with nice cup of tea"
          className="rounded-base max-w-[400px] w-full md:col-start-2 mx-auto"
        />
        <p className="text-center md:text-left md:col-start-1 md:row-start-1 md:text-lg">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injectedß
          humour, or randomised words which don't look even slightly believable.
          <br /> <br />
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. <br />
          <br />
          All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator
          on the Internet. <br /> <br /> To know more{" "}
          <span className="text-accentColor font-semibold">
            Download my CV.
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
