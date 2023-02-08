import "../styles/index.css";
import Link from "next/link";

import { AppProps } from "next/app";

import Alert from "../components/Alert";
import { Background } from "../components/Background";
import { Logo } from "../components/Logo";
import { NavbarTwoColumns } from "../components/NavbarTwoColumns";
import { Section } from "../components/Section";


export default function MyApp({ Component, pageProps }: AppProps) {
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
      
      <Component {...pageProps} />
    </>
  );
}
