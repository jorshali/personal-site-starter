import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-3xl lg:text-4xl font-bold tracking-tighter leading-tight md:leading-none mb-8 text-center md:text-left">
      {children}
    </h1>
  );
};

export default PostTitle;
