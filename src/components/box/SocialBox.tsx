import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  title: string;
};

const SocialBox = ({ href, title }: Props) => {
  return (
    <Link href={href} className="border-b border-black">
      {title}
    </Link>
  );
};

export default SocialBox;
