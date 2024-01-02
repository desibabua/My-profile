import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif",
    heading:
      "'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif",
    mono: "'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace",
  },

  colors: {
    darkPrimary: "#020c1b",
    primary: "#0a192f",
    lightPrimary: "#112240",
    lightestPrimary: "#233554",
    navyShadow: "rgba(2, 12, 27, 0.7)",

    secondary: "skyblue",
    lightSecondary: "#2d4756",

    white: "#dbe9ff",
    grey: "#89a4cb",

    darkSlate: "#495670",
    slate: "#8892b0",
    lightSlate: "#a8b2d1",
    lightestSlate: "#ccd6f6",
  },

  sizes: {
    xxs: "12px",
    xs: "13px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    xxl: "22px",
    title: "80px",
    subTitle: "75px",
    heading: "32px",
    borderRadius: "4px",
    navHeight: "100px",
    navScrollHeight: "70px",
    tabHeight: "42px",
    tabWidth: "120px",
    topMargin: "240px",
  },

  styles: {
    global: (props) => {
      const { colors, sizes } = props.theme;

      return {
        ".App": {
          bg: colors.primary,
          color: colors.white,
          minHeight: "100vh",
        },

        "li::marker": {
          content: '"▹"',
          left: "0px",
          color: colors.secondary,
          fontSize: sizes.sm,
        },

        li: {
          paddingLeft: sizes.md,
        },

        ".skills": {
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(140px, 200px))",
          gap: "0px 10px",
          padding: "0px",
          margin: "20px 0px 0px",
          listStyle: "none",
        },
      };
    },
  },
});

export default theme;
