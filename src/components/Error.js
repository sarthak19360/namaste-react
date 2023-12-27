import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <div className="center">
      <h1>Oops!!</h1>
      <h1>Something went wrong!</h1>
      <h2>
        {err.status}: {err.statusText}
      </h2>
      <p>{err.data}</p>
    </div>
  );
};

export default Error;
