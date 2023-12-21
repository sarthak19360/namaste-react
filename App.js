import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1>Namaste React from title🚀</h1>;
};

// component composition - using one component in another
const Heading = () => {
  return (
    <>
      <Title />
      <h1 className="heading">Namaste React from functional component🚀</h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
