// import SubTitle from "../../../components/SubTitle";
// import Text from "../../../components/Text";
import Astronaut from "@/images/icons/astronaut.svg";
// import Phone from "images/icons/phone-icon.svg";
// import Rocket from "images/icons/rocket_icon.svg";
// import People from "images/icons/people_icon.svg";
// import Gradcap from "images/icons/degree_hat_icon.svg";

export default function Action_Block() {
  // const items = [
  //   {
  //     name: "Develop",
  //     description:
  //       "Work on projects with fellow students and professionals leveraging current technologies and practices used in the industry.",
  //     Icon: Phone,
  //   },
  //   {
  //     name: "Network",
  //     description:
  //       "Our partnerships with employers connect you with recruiters and help you land your first role in tech.",
  //     Icon: Rocket,
  //   },
  //   {
  //     name: "Meet",
  //     description:
  //       "Our inclusive community of students and professionals helps you navigate the tech industry",
  //     Icon: People,
  //   },
  //   {
  //     name: "Learn",
  //     description:
  //       "Our experiential learning and career development programs prepare you for new opportunities.",
  //     Icon: Gradcap,
  //   },
  // ];

  return (
    <>
      <div className="grid grid-cols-2 gap-y-10 my-10 w-screen max-xl:grid-cols-1">
        <div className="grid grid-cols-1 gap-y-10 max-md:w-full">
          <Astronaut className="grid max-md:w-full" />
        </div>
        {/* <div className="grid grid-cols-2 gap-y-10 my-60 ml-20 w-5/6 max-xl:grid-cols-1 max-xl:mx-auto max-xl:w-1/2">
          {items.map(({ name, description, Icon }) => (
            <div key={name}>
              <Icon className="my-2 w-2/5 max-xl:mx-auto max-xl:w-1/5 max-md:w-2/6 max-md:mx-36" />
              <SubTitle className="my-4 w-2/5 max-xl:mx-auto max-xl:w-1/5">
                {name}
              </SubTitle>
              <Text className="my-4 w-5/6 max-xl:mx-auto max-xl:w-full max-md:mx-5">
                {description}
              </Text>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
}
