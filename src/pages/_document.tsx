import { Head, Html, Main, NextScript } from "next/document";
import Link from "next/link";

import Alert from "../components/Alert";
import { Background } from "../components/Background";
import { Logo } from "../components/Logo";
import { NavbarTwoColumns } from "../components/NavbarTwoColumns";
import { Section } from "../components/Section";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
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

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
