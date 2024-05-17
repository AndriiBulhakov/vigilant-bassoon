import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  video: string;
  title: string;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="flex flex-col justify-center items-center max-w-[48rem] mx-auto text-center px-4 pb-5xl pt-[8.75rem]">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-[14.5rem] h-[15.625rem] object-cover relative rounded-[1.88rem] mb-[4.19rem]"
    >
      <source src={props.video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <h1 className="text-headlines/h1 mb-10">{props.title}</h1>
    <div className="text-body/large text-gray-quaternary">
      {props.description}
    </div>

    <ul className="flex justify-center gap-5 my-8">
      <li>250K+ Offers Received</li>
      <div className="w-[1px] bg-gray-primary opacity-10" />
      <li>1.2M+ Interviews Aced</li>
    </ul>

    {props.button}
  </header>
)

export { HeroOneButton };
