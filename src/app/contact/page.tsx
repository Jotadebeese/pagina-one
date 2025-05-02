import Image from "next/image";
import styles from "@/src/styles/ContactPage.module.css";
import { BasicForm } from "@/src/components/ui/Forms";
import contact from "@/src/images/contact.svg";

export default function Contact() {
  return (
    <div className="w-full flex flex-col items-center justify-center p-5 sm:p-10 pt-25 sm:pt-40">
      <div className="w-full flex flex-col  sm:gap-24 gap-10 max-w-6xl">
        <Image
          src={contact}
          className=" sm:w-lg w-3xs"
          alt="Contact"
          width={500}
        />
        <div className="flex flex-col gap-4">
          <p className="">
            Fill the form below and one of our many staff &#40;only two&#41;
            will be in touch.
          </p>
          <BasicForm
            inputFields={{
              name: {
                type: "text",
                label: "Name",
              },
              email: {
                type: "email",
                label: "Email",
              },
              phone: {
                type: "tel",
                label: "Phone",
              },
              message: {
                type: "textArea",
                label: "Message",
                placeholder: "Could be anything really...",
                style: { gridColumn: "span 2" },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
