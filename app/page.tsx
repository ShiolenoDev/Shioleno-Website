import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center max-w-[1440px] m-auto pb-8">
      <header
        className="w-full h-auto flex flex-col items-center justify-center lg:flex-row lg:justify-between lg:items-center p-4 lg:h-16 font-bold relative lg:py-12 text-xl space-y-2"
        style={{ zIndex: 10 }}
      >
        <div className="lg:hidden">
          <img src="/images/logo.svg" alt="Shioleno Logo" className="w-full" />
        </div>
        <span className="order-2 lg:order-1 tracking-wider z-10">EST 1983</span>
        <div className="hidden lg:flex absolute left-1/2 top-10 transform -translate-x-1/2 -translate-y-1/2">
          <img src="/images/logo.svg" alt="Shioleno Logo" className="w-full" />
        </div>
        <span className="order-3 tracking-wider z-10">UNDER CONSTRUCTION</span>
      </header>

      <div
        className="relative w-full flex-grow bg-cover bg-center min-h-full"
        style={{ backgroundImage: "url('/images/desk-header.png')" }}
      >
        <div className="absolute left-1/2 top-[60%] lg:top-[55%] transform -translate-x-1/2 -translate-y-1/2 w-full">
          <div className="text-white text-center flex flex-col justify-center items-center h-full mb-10 text-4xl md:text-6xl lg:space-y-10 tracking-widest">
            <h1>SHIOLENO </h1>
            <h1>INDUSTRIES, INC</h1>
          </div>
          <div className="w-full flex  items-center justify-center text-lg">
            <div className="flex flex-col items-center justify-center space-y-6 lg:flex-row lg:space-x-24 lg:space-y-0">
              <ContactBox contactInfo={siteConfig.wood} title={"WOOD"} />
              <ContactBox contactInfo={siteConfig.metal} title={"METAL"} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

type ContactProps = {
  contactInfo: typeof siteConfig.wood | typeof siteConfig.metal;
  title: string;
};

const ContactBox = ({ contactInfo, title }: ContactProps) => {
  return (
    <div className="flex flex-col items-start text-left max-w-xs mx-auto text-white">
      <span className="self-center font-bold text-lg mb-4">{title}</span>
      <div className="grid grid-cols-[auto,1fr] gap-1 lg:gap-2 items-center">
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
        <a
          href={`mailto:${contactInfo.email}`}
          className="hover:text-gray-300 text-left"
        >
          {contactInfo.email}
        </a>
      </div>
    </div>
  );
};
