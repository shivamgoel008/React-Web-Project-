import React, { useState, useEffect } from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <React.Fragment>
      <h1>Oops!!🚀</h1>
      <h3>Something went wrong</h3>
      <h3>
        ❗{err.status}: {err.data}
      </h3>
    </React.Fragment>
  );
};

export default Error;
