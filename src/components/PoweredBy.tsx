import Container from "./Container";

const PoweredBy = () => {
  return (
    <div className="bg-neutral-500 border-neutral-500 text-white">
      <Container>
        <div className="py-2 text-center text-sm mb-4">
          {/*
           * PLEASE READ THIS SECTION
           * I would really appreciate it if you could keep the link to the tutorial
           * on your site.  Not on every page, but on at least one page would really
           * be appreciated.  Thank you for your help!
           */}
          <>
            This site was created using{" "}
            <a
              href="https://jacoborshalick.me/posts/nextjs-and-aws-amplify-host-a-personal-blog-in-under-30-minutes"
              className="underline hover:text-gray-300 duration-200 transition-colors"
            >
              this tutorial
            </a>
            .
          </>
        </div>
      </Container>
    </div>
  );
};

export default PoweredBy;
