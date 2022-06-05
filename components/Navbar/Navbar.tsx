import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={128} height={75} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/members">
        <a>Member List</a>
      </Link>
    </nav>
  );
};

export default Navbar;
