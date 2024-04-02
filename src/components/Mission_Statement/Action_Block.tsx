import Develop from "@/images/develop_icon.svg";
import SubTitle from "../SubTitle";
import Text from "../Text";
import Astronaut from "@/images/Astronaut.svg";
import Circle from "@/images/large_circle_icon.svg";
import Phone from "@/images/phone-icon.svg";
import Rocket from "@/images/rocket_icon.svg";
import People from "@/images/people_icon.svg";
import Gradcap from "@/images/degree_hat_icon.svg";

export default function Action_Block() {
  const items = [
    {
      name: "Develop",
      description:
        "An in-depth guide to understanding the principles, structures, and benefits.",
      Icon: Phone,
    },
    {
      name: "Enjoy",
      description:
        "An in-depth guide to understanding the principles, structures, and benefits.",
      Icon: Rocket,
    },
    {
      name: "Meet",
      description:
        "An in-depth guide to understanding the principles, structures, and benefits.",
      Icon: People,
    },
    {
      name: "Learn",
      description:
        "An in-depth guide to understanding the principles, structures, and benefits.",
      Icon: Gradcap,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-2 gap-y-10 my-10 w-screen max-md:grid-cols-1">
        <div className="grid grid-cols-1 gap-y-10 max-md:w-full">
          <Astronaut className="grid max-md:w-full" />
        </div>
        <div className="grid grid-cols-2 gap-y-10 my-60 ml-40 w-4/6 max-md:grid-cols-1">
          {items.map(({ name, description, Icon }) => (
            <div key={name}>
              <Icon className="my-2 w-2/5" />
              <SubTitle className="my-4 w-1/5">{name}</SubTitle>
              <Text className="my-4 w-1/2">{description}</Text>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
