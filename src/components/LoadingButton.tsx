import className from "classnames";
import { useState } from "react";

type Props = {
  xl?: boolean;
  onClick?: () => Promise<void>;
  children: React.ReactNode;
};

const LoadingButton = (props: Props) => {
  const [processing, setProcessing] = useState(false);

  const handleClick = async () => {
    setProcessing(true);
    await props.onClick();
    setProcessing(false);
  };

  const btnClass = className({
    "inline-block rounded-md text-center text-white bg-primary-500 cursor-pointer hover:bg-primary-600":
      true,
    "font-extrabold text-xl py-4 px-6": props.xl,
    "text-lg font-semibold py-2 px-4": !props.xl,
    "animate-pulse": processing,
  });

  return (
    <div className={btnClass} onClick={handleClick}>
      {props.children}
    </div>
  );
};

export { LoadingButton };
