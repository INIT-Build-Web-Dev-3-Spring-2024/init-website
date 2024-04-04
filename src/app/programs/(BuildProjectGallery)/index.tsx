import { Title } from "@/components/Title";
import { Fragment } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    semester: "Spring 2024",
    teams: [
      {
        name: "Mobile Development (Android/IOS)",
        lead: "Luis Canada",
        coLeads: ["Marcos Carrillo"],
        tools: ["React Native", "Expo", "Typescript"],
        description: `
A mobile app which allows a person to get an accurate price on an item.
They can either take a photo of the item if they do not know what it is, or enter the full name. This will then show prices for the item new on Amazon, Alibaba, etc. Or places where it has recently sold, on places like eBay, or Craigslist.
Additionally, if there is extra time, an AI model may be made which predicts a fair value of the item if it cannot be found on the internet.`,
        images: ["/assets/images/programs/build/code-fallback-image.png"],
      },
      {
        name: "Web Development (Beginner)",
        lead: "Alejandro Vera",
        coLeads: ["Marcos Carrillo"],
        tools: ["React Native", "Expo", "Typescript"],
        description: `
A mobile app which allows a person to get an accurate price on an item.
They can either take a photo of the item if they do not know what it is, or enter the full name. This will then show prices for the item new on Amazon, Alibaba, etc. Or places where it has recently sold, on places like eBay, or Craigslist.
Additionally, if there is extra time, an AI model may be made which predicts a fair value of the item if it cannot be found on the internet.`,
        images: ["/assets/images/programs/build/code-fallback-image.png"],
      },
      {
        name: "Web Development x AI (Intermediate)",
        lead: "Giancarlo Padron",
        coLeads: ["Jose Pujol"],
        tools: ["React Native", "Expo", "Typescript"],
        description: `
A mobile app which allows a person to get an accurate price on an item.
They can either take a photo of the item if they do not know what it is, or enter the full name. This will then show prices for the item new on Amazon, Alibaba, etc. Or places where it has recently sold, on places like eBay, or Craigslist.
Additionally, if there is extra time, an AI model may be made which predicts a fair value of the item if it cannot be found on the internet.`,
        images: ["/assets/images/programs/build/code-fallback-image.png"],
      },
      {
        name: "Web Development (Advanced)",
        lead: "Allan Prieb",
        tools: [
          "Next.JS",
          "TypeScript",
          "Tailwind",
          "Figma",
          "Notion",
          "PostgreSQL",
        ],
        description: `
            **INIT Website Transformation: Shaping the Future of Tech Education**
    
            Are you passionate about technology and community development? We're on a mission to transform the INIT website into the perfect one-stop shop, a central hub for all things related to tech education and community development within INIT. We're looking for enthusiastic individuals to join our team for this exciting initiative. This is your chance to be part of a groundbreaking project that empowers tech talent in the community.
            
            **The Vision:**
            
            - A seamless, engaging platform where users can easily access our Discord, view all upcoming events, and find all the resources they need.
            - A dynamic space that connects, educates, and empowers tech enthusiasts and learners from all backgrounds.
            - A website that not only informs but also inspires action and participation in the tech community.
            
            **We Need You:** Whether you're skilled in frontend, backend, design, content creation, or passionate about community engagement, your talents are invaluable. Joining us means more than just building a website; You will be creating a platform that inspires, connects, and empowers.
            
            **Why This Matters:**
            
            - Contribute to a project with a meaningful and lasting impact.
            - Collaborate with a diverse, passionate team driven by a shared goal.
            - Help create an intuitive and resourceful platform that becomes the go-to site for anyone interested in INIT.
            - Enhance your professional skills by gaining valuable insights through collaboration and hands-on experience with a range of technologies.
            
            Let's make the INIT website a beacon for tech talent and community engagement. Join and let's create something extraordinary!`,

        images: ["/assets/images/programs/build/code-fallback-image.png"],
      },
      {
        name: "Artificial Intelligence (Beginner)",
        lead: "Allan Prieb",
        tools: [
          "OpenCV",
          "Pytorch",
          "Scikit-learn libraries",
          " Convolutional Neural Networks (CNNs)",
          "PostgreSQL",
          "GitHub",
          "Jupyter Notebooks",
        ],
        description: `
            Are you ready to launch 🚀 your AI skills? Get ready because we're aiming for the stars ✨ with our exciting project: the Constellation Identifier! This journey is not just about reaching new heights in the sky, but also in your technological prowess.

            Join us as we embark on a stellar mission to develop an innovative tool that uses the power of AI and image processing to identify and classify constellations from both standard astronomical images and user-submitted sketches. Whether you're an aspiring data scientist, a wizard at image processing, or a web development enthusiast, there's a space in our crew for you.
       `,
        images: ["/assets/images/programs/build/code-fallback-image.png"],
      },
      {
        name: "Artificial Intelligence (Intermediate)",
        lead: "Gabriela Saldana",
        tools: [
          "Tensorflow",
          "Pytorch",
          "CNNs (convolutional neural networks)",
          "OpenCV",
        ],
        description: `
            A Sign Language Recognition - Using image processing / recognition to be able to detect Sign Language in real time and provide a displayed text.

            We can work on a dataset that has different ASL gestures and signs, train the model to be able to pick up and detect on these patterns and put them into practice by implementing it into a live video or video recording.
       `,
        images: ["/assets/images/programs/build/code-fallback-image.png"],
      },
      {
        name: "2D Game Development",
        lead: "Raeus Aranguren-Viegas",
        tools: ["Unity", "Github", "Aseprite"],
        description: `
            Top-Down Survival Defense Game. Defend a crystal from incoming waves of enemies!

            A top-down survival Defense game where the play has to defend a crystal  from enemies that will spawn in a radius around them. The enemies will try to attack and destroy the crystal and the player has to defeat them and survival all the waves of enemies to win.
       `,
        images: ["/assets/images/programs/build/code-fallback-image.png"],
      },
      {
        name: "3D Game Development",
        lead: "Ricardo Garcia",
        tools: ["Unity"],
        description: `
            A mine cart adventure VR game using the controllers to simulate hands, navigate twists, turns, and obstacles such as enemies or debris by physically ducking and swerving in the real world, or interacting with in game inputs such as buttons or levers. The game would feature procedurally generated environments, power-ups, a scoring board, and a selector screen where depending on different scoring can the player potentially unlock new maps or carts with the ability of having unlock-able skins, perks, and many more.
       `,
        images: ["/assets/images/programs/build/code-fallback-image.png"],
      },
      {
        name: "Virtual Reality",
        lead: "Alfredo Medina",
        coLeads: ["Daniel Sanana", "Christian Laverde"],
        tools: ["Unity", "Blender"],
        description: `
            A mine cart adventure VR game using the controllers to simulate hands, navigate twists, turns, and obstacles such as enemies or debris by physically ducking and swerving in the real world, or interacting with in game inputs such as buttons or levers. The game would feature procedurally generated environments, power-ups, a scoring board, and a selector screen where depending on different scoring can the player potentially unlock new maps or carts with the ability of having unlock-able skins, perks, and many more.
       `,
        images: ["/assets/images/programs/build/code-fallback-image.png"],
      },
      {
        name: "Cybersecurity",
        lead: "Nicholas Cogua",
        coLeads: ["William Duran"],
        tools: [
          "Python",
          "Elasticsearch",
          "Logstash",
          "Kibana",
          "Security APIs",
        ],
        description: `
            A mine cart adventure VR game using the controllers to simulate hands, navigate twists, turns, and obstacles such as enemies or debris by physically ducking and swerving in the real world, or interacting with in game inputs such as buttons or levers. The game would feature procedurally generated environments, power-ups, a scoring board, and a selector screen where depending on different scoring can the player potentially unlock new maps or carts with the ability of having unlock-able skins, perks, and many more.
       `,
        images: ["/assets/images/programs/build/code-fallback-image.png"],
      },
    ],
  },
];

export default function BuildProjectGallery() {
  return (
    <>
      <Title className="mt-36 mb-20">Project Gallery</Title>

      <div className="mx-auto w-[90%] mb-36">
        {projects.map(({ semester, teams }) => (
          <Fragment key={semester}>
            <Title className="text-left text-2xl mb-5">{semester}</Title>

            <div className="flex flex-wrap gap-5 justify-center">
              {teams.map((team) => (
                <ProjectCard {...team} key={team.name} />
              ))}
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
}
