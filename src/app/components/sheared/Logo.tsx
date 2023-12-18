"use client";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="images/youtube.svg"
        alt="youtube"
        className="hidden cursor-pointer sm:block ml-4 mr-2 "
        height={20}
        width={30}
      />
      <p className="font-bold text-lg">VidTube</p>
    </Link>
  );
};

export default Logo;
