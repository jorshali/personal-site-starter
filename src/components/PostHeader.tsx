import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "next-share";
import { PROFILE_IMAGE_LOCATION, SITE_NAME } from "../lib/constants";

import CoverImage from "./CoverImage";
import DateFormatter from "./DateFormatter";
import PostTitle from "./PostTitle";

type Props = {
  shareUrl: string;
  title: string;
  subtitle: string;
  coverImage: string;
  coverImageAttribution: string;
  date: string;
};

const PostHeader = ({
  shareUrl,
  title,
  subtitle,
  coverImage,
  coverImageAttribution,
  date,
}: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>

      <div className="flex items-center mb-8">
        <h2 className="text-1xl md:text-2xl tracking-tighter leading-tight md:leading-none text-center md:text-left text-gray-600">
          {subtitle}
        </h2>
      </div>

      <div className="flex items-center mb-8">
        <img
          src={PROFILE_IMAGE_LOCATION}
          className="w-8 h-8 sm:h-12 sm:w-12 rounded-full mr-4"
          alt={SITE_NAME}
        />

        <span className="text-xs sm:text-lg">
          <DateFormatter dateString={date} />
        </span>

        <div className="ml-4 mt-2 sm:ml-8 hover:opacity-60">
          <FacebookShareButton
            title={title}
            url={shareUrl}
          >
            <FacebookIcon size={28} bgStyle={{ fill: "#a0aec0" }} />
          </FacebookShareButton>
        </div>

        <div className="ml-2 mt-2 hover:opacity-70">
          <LinkedinShareButton 
            title={title}
            url={shareUrl}
          >
            <LinkedinIcon size={28} bgStyle={{ fill: "#a0aec0" }} />
          </LinkedinShareButton>
        </div>

        <div className="ml-2 mt-2 hover:opacity-70">
          <TwitterShareButton
            title={title}
            url={shareUrl}
          >
            <TwitterIcon size={28} bgStyle={{ fill: "#a0aec0" }} />
          </TwitterShareButton>
        </div>

        <div className="ml-2 mt-2 hover:opacity-70">
          <EmailShareButton 
            subject={title}
            url={shareUrl}
          >
            <EmailIcon size={28} bgStyle={{ fill: "#a0aec0" }} />
          </EmailShareButton>
        </div>
      </div>

      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
        <div
          className="text-sm md:text-md mt-2 text-gray-600 text-center [&>a]:underline"
          dangerouslySetInnerHTML={{ __html: coverImageAttribution }}
        />
      </div>
    </>
  );
};

export default PostHeader;
