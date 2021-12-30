import React, { FunctionComponent, ReactNode } from "react";

const Header1: FunctionComponent<{ text: string }> = ({ text }) => {
  return (
    <>
      <h1 className="text-white text-10xl">{text}</h1>
    </>
  );
};

export default Header1;
