import ProgramCard from "./programCard";

export default async function ProgramsPage() {
  interface Program {
    name: string;
    color: string;
    image: string;
    description: string;
  }

  const programRequest = await fetch("http://localhost:3000/api/programs");
  const programs: Program[] = await programRequest.json();

  return (
    <div className="bg-zinc-900 min-h-screen px-16 py-12 bg-opacity-95">
      <h1 className="text-4xl font-bold mb-3 text-white">Programs</h1>
      <div className="grid grid-cols-3 gap-6 lg:grid-cols-4">
        {programs.map(({ name, color, image, description }) => (
          <ProgramCard
            key={name}
            name={name}
            color={color}
            image={image}
            description={description}
          />
        ))}
      </div>
    </div>
  );
}
