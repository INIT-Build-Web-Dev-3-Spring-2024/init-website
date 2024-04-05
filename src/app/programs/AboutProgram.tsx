import InitLogo from '@/components/InitLogo'
import Text from '@/components/Text'
import { Title } from '@/components/Title'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import tailwindConfig from '@/root/tailwind.config'
import resolveConfig from 'tailwindcss/resolveConfig'

const twConfig = resolveConfig(tailwindConfig)

export interface AboutProgramProps {
  name: string
  description: string
  skillsDescription: string
  images: string[]
}

export default function AboutProgram(props: AboutProgramProps) {
  const { name, description, skillsDescription, images } = props

  function getColor(program: string) {
    const programName = program as keyof typeof twConfig.theme.colors.program // so typescript can stop
    return twConfig.theme.colors.program[programName]
  }

  return (
    <>
      <div className="grid grid-cols-2 min-h-screen mt-8 mx-16">
        <div className="">
          <div className="relative">
            <div
              className={twMerge('absolute -top-[200px] left-1/4 mx-auto w-px h-[200px] mb-8')}
              style={{
                backgroundColor: getColor(name.toLowerCase()),
              }}
            />
            <Title className="flex items-center gap-2">
              <span>
                <InitLogo className="w-24 h-24 mb-3" />
              </span>
              <span style={{ color: getColor(name.toLowerCase()) }}>{name}</span>
            </Title>
            <Text className="mt-4 text-sm mb-8">{description}</Text>

            <div
              className={twMerge('absolute -bottom-[350px] left-1/4 mx-auto w-px h-[300px] mb-8')}
              style={{
                backgroundColor: getColor(name.toLowerCase()),
              }}
            />
          </div>
          <Image className="absolute left-0 -translate-y-72 -z-10" src="images/blobTwo.svg" alt="Blob One" width={400} height={400} />
          <Image className="mb-8 mt-[350px]" src="images/testimonial.svg" alt="Picture of computers" width={300} height={300} />
        </div>
        <div className="flex flex-col justify-center">
          <Image className="absolute right-0 -translate-y-28" src="images/blobOne.svg" alt="Blob One" width={500} height={500} />
          <Image
            className="mb-8 h-56 w-96 object-cover object-left-top rounded-lg self-end z-10 -translate-x-1/3"
            src={images[0]}
            alt={`INIT ${name} Photo`}
            width={300}
            height={192}
          />
          <Image
            className="mb-8 h-56 w-96  object-cover object-left-top rounded-lg -translate-y-16 self-end -translate-x-3/4"
            src={images[1]}
            alt={`INIT ${name} Photo`}
            width={300}
            height={192}
          />
          <Title className="flex items-center gap-2">
            <Text>Learn Skills</Text>
          </Title>
          <Text>{skillsDescription}</Text>
        </div>
      </div>
    </>
  )
}
