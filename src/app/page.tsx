import Image from "next/image";
import Link from "next/link";
import logoName from "@/src/images/full_name_logo_no_space.svg";

export default async function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center p-5  sm:p-10 pt-25 sm:pt-40">
      <div className="w-full  max-w-6xl flex flex-col items-start justify-center sm:gap-24 gap-10">
        <Image
          src={logoName}
          className=" sm:w-lg w-3xs"
          alt="Company logo"
          width={500}
        />
        <p className="sm:text-2xl text-base max-w-52 sm:max-w-3xl ">
          We build web and mobile apps from the ground.
          <br />
          We listen to your problem or idea and solve it with code.
          <br />
          <br />
          <Link
            className="font-semibold underline hover:text-primary transition-all ease-in-out"
            href={"/contact"}
          >
            Hit us up
          </Link>{" "}
          to collaborate.
        </p>
      </div>
    </main>
  );
}
