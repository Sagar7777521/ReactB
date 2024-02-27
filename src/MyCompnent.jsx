import { useEffect } from "react";

const MyCompnent = () => {
  useEffect(() => {
    console.log("My Component");
  }, []);
  return <div>My Componenet</div>;
};

export default MyCompnent;
