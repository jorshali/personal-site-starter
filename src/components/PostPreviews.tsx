import type Post from "../interfaces/post";
import { RECENT_ARTICLES_TEXT } from "../lib/constants";
import PostPreview from "./PostPreview";
import { Section } from "./Section";

type Props = {
  posts: Post[];
};

const PostPreviews = ({ posts }: Props) => {
  return (
    <Section
      yPadding="pt-12"
      title="Recent Articles"
      description={RECENT_ARTICLES_TEXT}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-16">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </Section>
  );
};

export default PostPreviews;
