"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function NavLink({ href, children, className }: NavLinkProps) {
  const path = usePathname();
  const isActive = path === href || path.startsWith(href + "/");
  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center opacity-70 justify-center transition-all ease-in-out text-sm uppercase font-semibold hover:opacity-100 hover:text-primary",
        className,
        {
          "opacity-100": isActive,
        }
      )}
    >
      {children}
    </Link>
  );
}
