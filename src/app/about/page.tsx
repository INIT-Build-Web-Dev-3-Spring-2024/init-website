import Head from "next/head";
import Image from "next/image";
// import { chapters } from "../Data/chapters";
// import { team_members } from "../Data/InitTeam";
// import Init_Team from "~/components/Init_Team";
// import Chapter_card from "../components/Chapter_card";

export default function About() {
  return (
    <>
      {/* <section className="mx-auto max-w-screen-lg ">
        <Head>
          <title>About Init</title>
          <meta name="description" content="About us for Init" />
        </Head>
        <main className="flex flex-col bg-primary"></main>
        <h1 className="mb-10 text-center text-4xl text-white">💻 About Us</h1>
        <br />
        <span className=" flex flex-wrap  ">
          <div className="mx-auto mb-10 h-auto w-full text-sm  ">
            <div className="mb-5">
              <iframe
                className=""
                src="https://www.youtube.com/embed/q44VgsbcBkw"
                title="INIT Launch Announcement"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
                height={500}
                style={{ width: "100%" }}
              ></iframe>
            </div>
          </div>
        </span>
        <br />

        <h1 className="mb-10 text-center text-4xl text-white">❤️Impact</h1>
        <br />
        <div className="mx-auto mb-10 flex h-auto w-auto flex-wrap items-start justify-center ">
          <Image
            src="https://res.cloudinary.com/dh6y8bufo/image/upload/v1699917117/init-dashboard/events/%27Empowering%20tech%20talent.jpg"
            alt="Init Members"
            className="rounded-lg"
            width={400}
            height={300}
            loading="lazy"
          />
          <span className=" mb-5 ml-5 mt-5 flex flex-wrap items-center text-sm md:w-1/2 ">
            <p>
              Originally as UPE, INIT developed a successful pipeline of diverse
              talent in partnership with academia and industry. We helped
              prepare thousands of students through our very own experiential
              learning and career programs, helping them land interviews and
              placing them in job opportunities. Thousands of INIT members now
              work at top companies such as Google, Microsoft, Meta, and many
              more.
            </p>
            <br />
            <p>
              As we evolve into a non-profit, we are now scaling this proven
              model and bringing it to other underserved communities, impacting
              even more individuals and growing our pipeline of diverse tech
              talent into industry.
            </p>
          </span>
        </div>
        <br />

        <br />
        <h1 className="text-center text-4xl text-white">🤝Partners</h1>
        <br />
        <span className="flex w-full flex-wrap items-center justify-center">
          <Image
            src="https://res.cloudinary.com/dh6y8bufo/image/upload/v1700204766/init-dashboard/about/partners/knight-foundation-logo.svg"
            alt="Knight Foundation Logo"
            className="mb-5  mr-5"
            width={200}
            height={50}
            loading="lazy"
          />
          <Image
            src="https://res.cloudinary.com/dh6y8bufo/image/upload/v1700204767/init-dashboard/about/partners/Lab2C.svg"
            alt="Lab22c Logo"
            className="mb-5  text-sm"
            width={200}
            height={50}
            loading="lazy"
          />
          <Image
            src="https://res.cloudinary.com/dh6y8bufo/image/upload/v1700204830/init-dashboard/about/partners/FIU-Engineering-Logo.svg"
            alt="Init Logo"
            className=" mb-5 text-sm"
            width={200}
            height={50}
            loading="lazy"
          />
          <Image
            src="https://res.cloudinary.com/dh6y8bufo/image/upload/v1700204768/init-dashboard/about/partners/MDC-Logo.svg"
            alt="MDC Logo"
            className="mb-5 text-sm"
            width={200}
            height={50}
            loading="lazy"
          />
        </span>
        <br />
        <section className=" text-center text-sm">
          <p>More partners to be announced soon!</p>
        </section>
        <br />
        <h1 className="my-10 text-center text-4xl text-white">🍎 Chapters</h1>
        <section className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-9 ">
            {chapters.map((chapter) => (
              <Chapter_card
                image={chapter.image}
                name={chapter.name}
                description={chapter.description}
                key={chapter.name}
              />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-5 "></div>
        </section>
        <br />
        <h1 className="mt-10 text-center text-4xl text-white">✨ Our Team</h1>
        <div className="flex flex-wrap justify-center">
          {team_members.map((member) => (
            <div key={member.name} className="w-full p-4 md:w-1/3">
              <Init_Team
                name={member.name}
                position={member.position}
                linkedin={member.linkedin}
                image={member.image}
                key={member.name}
              />
            </div>
          ))}
        </div>
      </section> */}
      <div>
        HELLO!
      </div>
    </>
  );
}
