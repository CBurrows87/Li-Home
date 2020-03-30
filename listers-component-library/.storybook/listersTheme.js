import { create } from "@storybook/theming";

export default create({
  base: "dark",
  brandTitle: "Listers Component Library",
  brandUrl: "https://listers.co.uk",
  brandImage: process.env.NODE_ENV === "production" ? logoUrl : "/logo.svg",
  colorSecondary: "#faa541"
});
