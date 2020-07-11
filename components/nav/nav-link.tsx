import React from "react";
import Link from "next/link";

type Props = {
  href: string;
  a?: boolean;
};

export const NavLink: React.FC<Props> = ({ href, a = false, children }) => {
  return (
    <li className="inline-block px-4 text-gray-300 hover:text-gray-100 animation font-bold nexa">
      {a ? (
        <a href={href}>{children}</a>
      ) : (
        <Link href={href}>
          <a href="#">{children}</a>
        </Link>
      )}
    </li>
  );
};
