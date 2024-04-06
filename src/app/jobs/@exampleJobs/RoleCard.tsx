import Text from "@/components/Text";

export type JobDsecr = {
  date: string;
  // description: string
};

function RoleCard(props: JobDsecr) {
  const {
    // description,
    date,
  } = props;

  return (
    <>
      <div className="flex flex-col border border-secondary-gray p-10 pb-20 rounded-xl">
        <h1 className="text-xl font-2 font-bold"> Role </h1>
        <h2 className="mb-5"> Who you are </h2>
        <Text>
          {/* Role descrpition, NOt in DATA!!!!!!! */}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius illum
          perspiciatis impedit nulla aut exercitationem quireprehenderit
          praesentium. Nisi, possimus qui consequatur officiisvoluptatem
          architecto. Culpa aliquam iste animi veritatis! Loremipsum dolor sit
          amet consectetur, adipisicing elit. Eius illumperspiciatis impedit
          nulla aut exercitationem qui reprehenderit praesentium. Nisi, possimus
          qui consequatur officiis voluptatem
        </Text>
        <h2 className="mt-2">Start Date: {date} </h2>
      </div>
    </>
  );
}

export default RoleCard;
