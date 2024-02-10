import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const REDIRECT_TIME = "time_remaining";

export default function Notfound() {
  const [redirectIn, setRedirectIn] = useState(
    () => parseInt(localStorage.getItem(REDIRECT_TIME)) || 3
  );

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setRedirectIn((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  if (redirectIn <= 0) {
    navigate("/");
  }

  return (
    <>
      {redirectIn && (
        <div>
          <h1>Sorry! Not Found</h1>
          <p>Redirect in 0{redirectIn}</p>
        </div>
      )}
    </>
  );
}
