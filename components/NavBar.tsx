import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constants";
import { AuthProviders } from "@/components/AuthProviders";

export const NavBar = () => {
  const session = null;
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" alt="Flexibble logo" width={115} height={40} />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <li key={link.key}>
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session ? (
          <>
            UserPhoto
            <Link href="/create-project">Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};
