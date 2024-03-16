import ProgramCard from "./programCard";

export default function ProgramsPage() {
  const programs = [
    {
      name: "Explore",
      color: "#EB6A65",
      image: "/images/programs/initexplore.webp",
      description:
        "the software development side of technology. From web development to machine learning to simple scripts, this program aims to expose members to all sorts of different programming languages and frameworks commonly used in the industry.",
    },
    {
      name: "Reach",
      color: "#6FA4F4",
      image: "/images/programs/initreach.webp",
      description:
        "the hardware development side of technology. Using all sorts of machinery, large or small, this program aims inspire members to create their own devices with the technology available today.",
    },
    {
      name: "Build",
      color: "#FC6C3F",
      image: "/images/programs/initbuild.webp",
      description:
        "project development. Teams have nine weeks to complete a project corresponding to a topic in technology that they may be interested in. From mobile applications to games to even robots.",
    },
    {
      name: "Ignite",
      color: "#87DE65",
      image: "/images/programs/initignite.webp",
      description:
        "INIT Ignite is a program focused on information technology, a field in technology. Commonly overlooked, information technology ensures that the systems running the software are secured and works.",
    },
    {
      name: "Hack",
      color: "#A27BFC",
      image: "/images/programs/inithack.webp",
      description:
        "INIT Hack is a program focused on the community in Computer Science. Across the country, there are various coding competitions, Hackathons, where students must create a solution by the end of a given time frame. Most students work as teams, with the members being fellow students in the same school.",
    },
    {
      name: "Discover",
      color: "#7e8794",
      image: "/images/programs/initdiscover.webp",
      description:
        "INIT Discover is a program focused on the academic side of technology. Though often overlooked, research is a viable career path for students interested in academics or furthering advancements in the field.",
    },
    {
      name: "Uplift",
      color: "#FF3E9E",
      image: "/images/programs/inituplift.webp",
      description:
        "INIT Uplift is a program focused on mentorship. Many incoming freshmen are overwhelmed by the amount of information available to them from the start. Our program aims to guide these new students and help them kickstart their tech careers. Those with experience in the field or program help to navigate freshmen during these rough times and allow them to establish a network or two. Mentor with us or get a mentor today",
    },
    {
      name: "Launch",
      color: "#11CEBB",
      image: "/images/programs/initlaunch.webp",
      description:
        "INIT Launch is a program focused on project development. Teams have nine weeks to complete a project corresponding to a topic in technology that they may be interested in. From mobile applications to games to even robots, this program aims teach you the fundamentals of project development in the real world. No experience is required to spark up your portfolio with us.",
    },
  ];

  return (
    <div className="bg-zinc-900 min-h-screen px-16 py-12 bg-opacity-95">
      <div>
        <h1 className="text-4xl font-bold mb-3 text-white">Programs</h1>
      </div>
      <div className="grid grid-cols-3 gap-6 lg:grid-cols-4">
        {programs.map(({ name, color, image, description }) => (
          <div>
            <ProgramCard
              name={name}
              color={color}
              image={image}
              description={description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
