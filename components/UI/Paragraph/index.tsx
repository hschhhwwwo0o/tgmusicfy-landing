import React, { FunctionComponent, ReactNode } from "react";

const Paragraph: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return <p className="text-white text-lg">{children}</p>;
};

export default Paragraph;
