import { useEffect, useState } from "react";

import { SUBSCRIBER_REQUEST_URL } from "../lib/constants";
import { LoadingButton } from "./LoadingButton";

const UnsubscribeForm = () => {
  const [unsubscribed, setUnsubscribed] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const url = new URL(window.location.href);

    setEmail(url.searchParams.get("email"));
  }, []);

  const onUnsubscribe = async () => {
    const url = new URL(`${SUBSCRIBER_REQUEST_URL}`);

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    await fetch(`${url}/${email}`, {
      method: "PUT",
      headers,
      body: JSON.stringify({ email, unsubscribeAll: true }),
    }).then((response) => response.json());

    setUnsubscribed(true);
  };

  return (
    <div className="text-center">
      <div className="mb-8">
        Are you sure you want to unsubscribe from all communication? You will
        stop receiving valuable weekly tips.
      </div>
      <div className="mb-8">
        <input
          onChange={(event) => setEmail(event.target.value)}
          value={email || ""}
          className="text-base rounded-lg block w-full p-3.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Your Email Address"
        ></input>
      </div>

      {unsubscribed ? (
        <div className="mb-4">
          We're sorry to see you go! You can resubscribe any time.
        </div>
      ) : null}

      <LoadingButton xl onClick={onUnsubscribe}>
        Unsubscribe
      </LoadingButton>
    </div>
  );
};

export { UnsubscribeForm };
