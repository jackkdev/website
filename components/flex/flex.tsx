import React from "react";

type Props = {
  col?: boolean;
  center?: boolean;
  [key: string]: any;
};

export const Flex: React.FC<Props> = ({
  children,
  col = false,
  center = false,
  ...props
}) => {
  return (
    <div
      className={`flex ${col ? "flex-col" : ""} ${
        center ? "justify-center items-center" : ""
      } ${props.className ? props.className : ""}`}
    >
      {children}
    </div>
  );
};
