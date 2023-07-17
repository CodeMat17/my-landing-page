import AnimatedPageTitle from "./AnimatedPageTitle";
import StatComponent from "./StatComponent";

const AboutMe = () => {
  return (
    <div id='about' className='py-20 w-full max-w-2xl mx-auto text-lg'>
      {/* <p className='text-4xl text-center'>ABOUT ME</p> */}
      <AnimatedPageTitle text='about me.' />

      <h1 className='text-xl font-light opacity-80 tracking-widest'>
        Biography
      </h1>
      <div className='pt-4 space-y-4 text-lg'>
        <p>
          I am Matthew and my code name is CodeMat. I am a full stack web
          developer (Mobile Web Specilaist, MWS). It gives me joy to create things that live on the internet.
          I have passion for creating sleek, intuitive, responsive, dynamic and
          user-friendly digital experiences. I have 8+ experience in software
          development and I am ever ready to bring my client&apos;s vision(s) to
          life.
        </p>
        <p>
          I believe in continuous learning to restack my skills and unlearn the
          old ways of doing things considering the fact that the internet is always new, refreshing and constantly upgrading.
        </p>
        <p>
          I love giving back to the tech ecosystem by mentoring the younger
          developers. I have mentored and facilitated meetups across Africa
          (physically and remotely) for Google Africa via Andela Learning
          Community, ALC, programme for 3 seasons.
        </p>
        <p>
          I am also a member of PSLC 20, (Policy, Strategy and Leadership Course, class
          20), of the prestigious institute, National Institute For Policy and
          Strategic Studies, NIPSS, Kuru, Jos, Nigeria.
        </p>
      </div>
      <h1 className='pt-6 text-xl font-light opacity-80 tracking-widest'>
        Stats
      </h1>

      <StatComponent />
    </div>
  );
};

export default AboutMe;
