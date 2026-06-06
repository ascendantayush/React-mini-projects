import React from "react";
import { Link } from "react-router-dom";
import style from "./Error.module.scss";

const Error = () => {
  return (
    <div className={style.errorContainer}>
      <h1 className={style.errorCode}>404</h1>

      <p className={style.errorTitle}>Page Not Found</p>

      <p className={style.errorText}>
        The page you are looking for does not exist.
      </p>

      <Link to="/" className={style.homeButton}>
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
