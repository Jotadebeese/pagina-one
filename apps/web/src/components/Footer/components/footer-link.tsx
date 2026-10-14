import clsx from "clsx";
import Link from "next/link";

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function FooterLink({
  href,
  children,
  className,
}: FooterLinkProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center justify-center hover:opacity-70 transition-all ease-in-out",
        className
      )}
      target="_blank"
    >
      {children}
    </Link>
  );
}
