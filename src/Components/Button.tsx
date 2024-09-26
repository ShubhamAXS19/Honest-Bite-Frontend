import React from "react";

// Define the props interface
interface ButtonProps {
  children: React.ReactNode; // Define children as a React node
}

// Use the ButtonProps interface in the component
const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="w-[10vw] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded">
      {children}
    </button>
  );
};

export default Button;
