import Head from "next/head";

import Container from "../components/Container";
import { IconList } from "../components/IconList";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import PostPreviews from "../components/PostPreviews";
import PoweredBy from "../components/PoweredBy";
import { ProfileLinks } from "../components/ProfileLinks";
import { Section } from "../components/Section";
import SectionSeparator from "../components/SectionSeparator";
import Post from "../interfaces/post";
import { getAllPosts } from "../lib/api";
import {
  HERO_TITLE,
  PROFILE_ABOUT_TEXT,
  PROFILE_IMAGE_LOCATION,
  SITE_NAME,
} from "../lib/constants";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>{`${SITE_NAME} | ${HERO_TITLE}`}</title>
        </Head>
        <Intro />

        <Section>
          <div id="About-Me" className="flex flex-wrap items-center">
            <div className="w-full sm:w-1/2 text-center sm:px-6">
              <h3 className="text-3xl text-gray-900 font-semibold">About Me</h3>
              <div className="mt-6 text-xl leading-9">{PROFILE_ABOUT_TEXT}</div>
              <div className="mt-6 mb-6 md:mb-0 flex justify-center">
                <IconList>
                  <ProfileLinks />
                </IconList>
              </div>
            </div>

            <div className="w-full sm:w-1/2 p-6">
              <img
                src={PROFILE_IMAGE_LOCATION}
                className="rounded-full mr-4"
                alt={SITE_NAME}
              />
            </div>
          </div>
        </Section>

        <SectionSeparator />

        <Container>
          <div id="Recent-Articles">
            {allPosts.length > 0 && <PostPreviews posts={allPosts} />}
          </div>
        </Container>
      </Layout>

      <PoweredBy />
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
