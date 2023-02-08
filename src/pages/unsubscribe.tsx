import Head from "next/head";

import { Section } from "../components/Section";
import { UnsubscribeForm } from "../components/UnsubscribeForm";
import { HERO_TITLE, SITE_NAME, SUBSCRIBE_ENABLED } from "../lib/constants";

export default function Unsubscribe() {
  return (
    <>
      <Head>
        <title>{`${SITE_NAME} | ${HERO_TITLE}`}</title>
      </Head>

      <Section>{SUBSCRIBE_ENABLED ? <UnsubscribeForm /> : null}</Section>
    </>
  );
}
