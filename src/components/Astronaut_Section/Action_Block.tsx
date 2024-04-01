import Develop from "@/images/develop_icon.svg";
import SubTitle from "../SubTitle";
import Text from "../Text";

export default function Action_Block() {
  const items = [
    {
      name: "Develop",
      description:
        "An in-depth guide to understanding the principles, structures, and benefits.",
      Icon: Develop,
    },
    {
      name: "Develop",
      description:
        "An in-depth guide to understanding the principles, structures, and benefits.",
      Icon: Develop,
    },
    {
      name: "Develop",
      description:
        "An in-depth guide to understanding the principles, structures, and benefits.",
      Icon: Develop,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-2 gap-y-1">
        {items.map(({ name, description, Icon }) => (
          <div key={name} className="w-20">
            <Icon />
            <SubTitle>{name}</SubTitle>
            <Text>{description}</Text>
          </div>
        ))}

        {/* <div className="row-span-3">
          <Develop />
        </div>
        <div>QUE BOLAAAAA</div>
        <div>HOOOLLL</div> */}
      </div>
    </>
  );
}
