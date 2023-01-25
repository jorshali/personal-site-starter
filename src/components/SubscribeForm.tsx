import { useState } from "react";

import { SUBSCRIBER_REQUEST_URL } from "../lib/constants";
import { LoadingButton } from "./LoadingButton";

const SubscribeForm = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const onSubscribe = async () => {
    const url = new URL(SUBSCRIBER_REQUEST_URL);

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify({ email }),
    }).then((response) => response.json());

    setSubscribed(true);
  };

  return (
    <div className="text-center">
      <div className="mb-8">
        <input
          onChange={(event) => setEmail(event.target.value)}
          className="text-base rounded-lg block w-full p-3.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Your Email Address"
        ></input>
      </div>

      {subscribed ? (
        <div className="mb-4">Thank you for subscribing!</div>
      ) : null}

      <LoadingButton xl onClick={onSubscribe}>
        Subscribe Now
      </LoadingButton>
    </div>
  );
};

export { SubscribeForm };
