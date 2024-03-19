import localFont from "next/font/local";

export const proximaNova = localFont({
  src: [
    {
      path: "../public/font/proximanova_regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/proximanova_light.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/font/proximanova_bold.otf",
      weight: "600",
      style: "bold",
    },
  ],
});
