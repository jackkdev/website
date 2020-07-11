import React from "react";

type Props = {
  title: string;
  subtitle: string;
};

export const Title: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <h1 className="text-shadow-md font-bold text-4xl text-white">{title}</h1>
      <h5 className="text-shadow font-semibold text-xl text-pink-300">
        {subtitle}
      </h5>
    </div>
  );
};
