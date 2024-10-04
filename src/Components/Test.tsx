import { useEffect } from "react";
import axios from "axios";

const Test = () => {
  useEffect(() => {
    const test = async () => {
      try {
        const response = await axios.get("http://localhost:3000/test");
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    test();
  }, []);
  return <div>Hi</div>;
};

export default Test;
