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
    btn: true,
    "btn-xl": props.xl,
    "btn-base": !props.xl,
    "btn-primary": true,
    "animate-pulse": processing,
    "cursor-pointer": true,
  });

  return (
    <div className={btnClass} onClick={handleClick}>
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            @apply text-white bg-primary-500;
          }

          .btn-primary:hover {
            @apply bg-primary-600;
          }
        `}
      </style>
    </div>
  );
};

export { LoadingButton };
