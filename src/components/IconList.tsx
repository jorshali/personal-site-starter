import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const IconList = (props: Props) => (
  <div className="footer-icon-list flex flex-wrap">{props.children}</div>
);

export { IconList };
