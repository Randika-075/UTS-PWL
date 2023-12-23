import { ImageStatic } from "../static/ImageStatic";
import { aboutDump } from "../dump/aboutDump";

const About = () => {
  return (
    <main>
      <div className="self-center">
        <figure>
          <img src={ImageStatic.navLogo} alt={ImageStatic.navLogo} />
        </figure>
      </div>
      <div className="px-[50px] pt-[20px] grid gap-[15px] grid-cols-1 md:grid-cols-2">
        {aboutDump.map((about, index) => (
          <div key={index}>
            <h1 className="text-3xl font-bold">{about.title}</h1>
            <p>{about.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default About;
