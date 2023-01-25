import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const IconList = (props: Props) => (
  <div className="footer-icon-list flex flex-wrap">
    {props.children}

    <style jsx>
      {`
        .footer-icon-list :global(a:not(:last-child)) {
          @apply mr-3;
        }

        .footer-icon-list :global(a) {
          @apply text-gray-500;
        }

        .footer-icon-list :global(a:hover) {
          @apply opacity-60;
        }

        .footer-icon-list :global(svg) {
          @apply fill-current w-6 h-6;
        }
      `}
    </style>
  </div>
);

export { IconList };
