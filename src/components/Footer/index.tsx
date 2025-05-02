import Image from "next/image";
import x from "@/src/images/icons/x.svg";
import facebook from "@/src/images/icons/facebook.svg";
import instagram from "@/src/images/icons/instagram.svg";
import FooterLink from "./components/footer-link";

export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-center px-5 py-4 sm:px-10 bg-white">
      <div className="flex w-full justify-between max-w-6xl gap-4">
        <p className="text-sm ">© 2024 PAGINA</p>
        <div className="flex items-center gap-2">
          <FooterLink href={"https://x.com/pagina0ne"}>
            <Image src={x} alt="Twitter" width={16} height={16} />
          </FooterLink>
          <div className="w-[1px] bg-light-2 h-3.5"></div>
          <FooterLink href={"https://www.facebook.com/hello.pagina.one/"}>
            <Image src={facebook} alt="Facebook" width={16} height={16} />
          </FooterLink>
          <div className="w-[1px] bg-light-2 h-3.5"></div>
          <FooterLink href={"https://www.instagram.com/pagina.one/"}>
            <Image src={instagram} alt="Instagram" width={16} height={16} />
          </FooterLink>
        </div>
      </div>
    </footer>
  );
}
