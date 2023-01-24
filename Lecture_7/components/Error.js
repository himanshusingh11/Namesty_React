import { useRouteError } from "react-router-dom";

const Error = () => {
  
  const err = useRouteError();
  console.log(err,"err");
  return (
    <>
      <div>
        <h1>Opps! </h1>
        <h2>Something went Wrong</h2>
        <h2>{err.status + " : " + err.statusText}</h2>
      </div>
    </>
  );
};

export default Error;
