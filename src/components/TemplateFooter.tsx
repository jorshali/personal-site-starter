import Link from "next/link";

import { PROFILE_GITHUB } from "../lib/constants";
import { Background } from "./Background";
import { CenteredFooter } from "./CenteredFooter";
import { Logo } from "./Logo";
import { ProfileLinks } from "./ProfileLinks";
import { Section } from "./Section";

const TemplateFooter = () => (
  <Background color="bg-gray-100">
    <Section>
      <CenteredFooter logo={<Logo />} iconList={<ProfileLinks />}>
        <li className="mx-4">
          <Link href="/">Home</Link>
        </li>
        <li className="mx-4">
          <Link href="#About-Me">About</Link>
        </li>
        <li className="mx-4">
          <Link href="#Recent-Articles">Articles</Link>
        </li>
        <li className="mx-4">
          <Link href={PROFILE_GITHUB}>GitHub</Link>
        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { TemplateFooter };
