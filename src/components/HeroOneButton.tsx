import { ReactNode } from "react";

import { SubscribeForm } from "./SubscribeForm";

type Props = {
  title: ReactNode;
  description: string;
};

const HeroOneButton = (props: Props) => {
  return (
    <header className="text-center">
      <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
        {props.title}
      </h1>
      <div className="text-2xl mt-4 mb-12">{props.description}</div>

      <SubscribeForm />
    </header>
  );
};

export { HeroOneButton };
