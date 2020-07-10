import React from "react";
import Link from "next/link";

type Props = {
  href: string;
  a?: boolean;
};

export const NavLink: React.FC<Props> = ({ children, href, a = false }) => {
  return (
    <li className="inline-block mx-4">
      {a ? (
        <a
          href={href}
          className="text-shadow-lg px-4 py-2 animation text-gray-100 text-lg rounded-md bg-pink-400 hover:bg-pink-300 nexa font-bold block"
        >
          {children}
        </a>
      ) : (
        <Link href={href}>
          <a
            href="#"
            className="text-shadow-lg px-4 py-2 animation text-gray-100 text-lg rounded-md bg-pink-400 hover:bg-pink-300 nexa font-bold block"
          >
            {children}
          </a>
        </Link>
      )}
    </li>
  );
};
