import Link from "next/link";

import Alert from "../components/Alert";
import { Background } from "../components/Background";
import { Logo } from "../components/Logo";
import { NavbarTwoColumns } from "../components/NavbarTwoColumns";
import { Section } from "../components/Section";
import Meta from "./Meta";
import PoweredBy from "./PoweredBy";
import { TemplateFooter } from "./TemplateFooter";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Alert />

      <Background color="bg-gray-200">
        <Section yPadding="py-4">
          <NavbarTwoColumns logo={<Logo />}>
            <li className="mr-5">
              <Link href="/#About-Me">About</Link>
            </li>
            <li>
              <Link href="/#Recent-Articles">Articles</Link>
            </li>
          </NavbarTwoColumns>
        </Section>
      </Background>

      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <TemplateFooter />

      <PoweredBy />
    </>
  );
};

export default Layout;
