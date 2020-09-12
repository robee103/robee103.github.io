import baseTheme from "@lekoarts/gatsby-theme-cara/src/gatsby-plugin-theme-ui";
import { merge } from "theme-ui";
import { tailwind } from "@theme-ui/presets";

const theme = merge(baseTheme, {
  initialColorModeName: "light",
  colors: {
    primary: tailwind.colors.pink[4],
  },
});

export default theme;
