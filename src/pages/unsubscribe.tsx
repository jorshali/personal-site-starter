import Head from "next/head";

import Layout from "../components/Layout";
import PoweredBy from "../components/PoweredBy";
import { Section } from "../components/Section";
import { UnsubscribeForm } from "../components/UnsubscribeForm";
import { HERO_TITLE, SITE_NAME, SUBSCRIBE_ENABLED } from "../lib/constants";

export default function Unsubscribe() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`${SITE_NAME} | ${HERO_TITLE}`}</title>
        </Head>

        <Section>
          { SUBSCRIBE_ENABLED ? <UnsubscribeForm /> : null }
        </Section>
      </Layout>

      <PoweredBy />
    </>
  );
}
