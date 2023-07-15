import AnimatedPageTitle from "./AnimatedPageTitle";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: 1,
    title: "KEN-SNAP STUDIO",
    alt: "gallery img",
    image: "/project-1-1.webp",
    desc: "This is a photo gallery website.",
    link: "https://gallery-demo-app.vercel.app/",
  },
  {
    id: 2,
    title: "HOODIES eSHOP",
    alt: "Buy here img",
    image: "/project-2-2.webp",
    desc: "This is an e-commerce website.",
    link: "https://hoodies-eshop.vercel.app/",
  },
  {
    id: 3,
    title: "HULU CLONE",
    alt: "hulu clone img",
    image: "/project-3.webp",
    desc: "This is a movie app with different genre.",
    link: "https://hulu-clone-demoapp.vercel.app/",
  },
  {
    id: 4,
    title: "COOP ADVANCE",
    alt: "coop advance",
    image: "/project-4.webp",
    desc: "This is a cooperative loan advancement app.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <div className='py-20'>
      <AnimatedPageTitle text='Selected Projects' />

      <div className='max-w-6xl mx-auto pt-8 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-8 md:gap-4 lg:gap-12'>
        {projectData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
