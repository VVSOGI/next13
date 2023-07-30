"use client";
import React, { useEffect, useState } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const [receiveError, setReceiveError] = useState(JSON.parse(error.message));

  useEffect(() => {
    console.log(JSON.parse(error.message));
  }, [error]);

  return (
    <div>
      <p>{receiveError.statusCode}</p>
      <p>{receiveError.message}</p>
    </div>
  );
}
