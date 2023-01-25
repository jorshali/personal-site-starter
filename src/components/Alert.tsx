import { PERSONAL_BLOG_SOURCE_CODE } from "../lib/constants";
import Container from "./Container";

const Alert = () => {
  return (
    <div className="bg-neutral-50 border-neutral-200">
      <Container>
        <div className="py-2 text-center text-sm">
          <>
            The source code for my site is{" "}
            <a
              href={PERSONAL_BLOG_SOURCE_CODE}
              className="underline hover:text-blue-600 duration-200 transition-colors"
            >
              available on GitHub
            </a>
            .
          </>
        </div>
      </Container>
    </div>
  );
};

export default Alert;
