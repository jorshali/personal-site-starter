import { HERO_SUBTITLE, HERO_TITLE } from "../lib/constants";
import { Background } from "./Background";
import { HeroOneButton } from "./HeroOneButton";
import { Section } from "./Section";

const Intro = () => {
  return (
    <Background color="bg-gray-200">
      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          title={
            <>
              <span className="text-primary-500">{HERO_TITLE}</span>
            </>
          }
          description={HERO_SUBTITLE}
        />
      </Section>
    </Background>
  );
};

export default Intro;
