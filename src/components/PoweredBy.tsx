import Container from "./Container";

const PoweredBy = () => {
  return (
    <div className="bg-neutral-500 border-neutral-500 text-white">
      <Container>
        <div className="py-2 text-center text-sm">
          <>
            This site was created using{" "}
            <a
              href={"https://jacoborshalick.me/posts/"}
              className="underline hover:text-blue-600 duration-200 transition-colors"
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
