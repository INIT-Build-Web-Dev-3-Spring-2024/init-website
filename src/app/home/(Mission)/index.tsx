import SubTitle from "@/components/SubTitle";
import Text from "@/components/Text";

import Image from "next/image";

export default function Action_Block() {
  const items = [
    {
      name: "Develop",
      description:
        "Work on projects with fellow students and professionals leveraging current technologies and practices used in the industry.",
      Icon: "phone-icon.svg",
    },
    {
      name: "Network",
      description:
        "Our partnerships with employers connect you with recruiters and help you land your first role in tech.",
      Icon: "rocket_icon.svg",
    },
    {
      name: "Meet",
      description:
        "Our inclusive community of students and professionals helps you navigate the tech industry",
      Icon: "people_icon.svg",
    },
    {
      name: "Learn",
      description:
        "Our experiential learning and career development programs prepare you for new opportunities.",
      Icon: "degree_hat_icon.svg",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-2 gap-y-10 my-10 max-xl:grid-cols-1">
        <div className="relative">
          <Image src="/images/icons/astronaut.svg" alt="" fill />
        </div>

        <div className="grid grid-cols-2 gap-y-10 my-60 ml-20 w-5/6 max-xl:grid-cols-1 max-xl:mx-auto max-xl:w-1/2">
          {items.map(({ name, description, imgPath }) => (
            <div key={name}>
              <div className="relative my-2 w-16 h-16 max-xl:mx-auto max-xl:w-1/5 max-md:w-2/6 max-md:mx-36">
                <Image src={`/images/icons/${Icon}`} alt="" fill />
              </div>

              <SubTitle className="my-4 w-2/5 max-xl:mx-auto max-xl:w-1/5">
                {name}
              </SubTitle>
              <Text className="my-4 w-5/6 max-xl:mx-auto max-xl:w-full max-md:mx-5 opacity-60">
                {description}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
