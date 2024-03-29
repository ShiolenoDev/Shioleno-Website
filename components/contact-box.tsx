import { siteConfig } from "@/config/site";

type ContactProps = {
  contactInfo: typeof siteConfig.wood | typeof siteConfig.metal;
  title: string;
};

export function ContactBox({ contactInfo, title }: ContactProps) {
  // Function to reverse the string for CSS-based "obfuscation"
  const reverseString = (str: string) => {
    return str.split("").reverse().join("");
  };

  return (
    <div className="flex flex-col items-start text-left max-w-xs mx-auto text-white">
      <span className="self-center font-bold text-lg mb-4">{title}</span>
      <div className="grid grid-cols-[auto_1fr] gap-1 lg:gap-2 items-center">
        <span className="font-semibold text-left">Phone:</span>
        <a
          href={`tel:${contactInfo.phone}`}
          className="hover:text-gray-300 text-left"
        >
          {contactInfo.phone}
        </a>
        <span className="font-semibold text-left">Fax:</span>
        <a
          href={`tel:${contactInfo.fax}`}
          className="hover:text-gray-300 text-left"
        >
          {contactInfo.fax}
        </a>
        <span className="font-semibold text-left">Email:</span>
        {/* Apply reverse CSS to visually display email correctly */}
        <span
          className="text-left inline-block cursor-default"
          style={{ direction: "rtl", unicodeBidi: "bidi-override" }}
        >
          {reverseString(contactInfo.email)}
        </span>
      </div>
    </div>
  );
}
