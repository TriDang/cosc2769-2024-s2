import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

export default function NotFound() {
  const err = useRouteError();
  console.log(err);

  return (
    <>
      <h1>Oops! The page you accessed does not exist</h1>
      <div>
        <Link to="/">Go to Home</Link>
      </div>
    </>
  )
}
