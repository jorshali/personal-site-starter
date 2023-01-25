import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  color: string;
};

const Background = (props: Props) => (
  <div className={props.color}>{props.children}</div>
);

export { Background };
