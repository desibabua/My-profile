import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    sans: "'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif",
    mono: "'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace",
  },

  colors: {
    darkPrimary: "#020c1b",
    primary: "#0a192f",
    lightPrimary: "#112240",
    lightestPrimary: "#233554",
    primaryShadow: "rgba(2, 12, 27, 0.7)",

    secondary: "#64ffda",
    lightSecondary: "#2f443f",

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
    subTitle: "70px",
    heading: "42px",
    subHeading: "32px",
    sectionMargin: "120px",
    subSectionMargin: "40px",
  },

  styles: {
    global: (props) => {
      const { colors, sizes, fonts } = props.theme;

      return {
        ".App": {
          bg: colors.primary,
          color: colors.slate,
          minHeight: "100vh",
          fontFamily: fonts.sans,
          fontSize: sizes.xl,
          lineHeight: 1.3,
        },

        "li::marker": {
          content: '"▹"',
          left: "0px",
          color: colors.secondary,
          fontSize: sizes.sm,
        },

        "a:hover": {
          textDecoration: "none !important",
          color: colors.secondary,
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

        ".section": {
          fontSize: theme.sizes.subHeading,
          color: theme.colors.white,
        },

        ".experienceNav": {
          padding: "5px",
        },

        ".experienceNav::hover": {
          color: theme.colors.secondary,
          background: theme.colors.lightSecondary,
        },

        ".selected": {
          color: theme.colors.secondary,
        },
      };
    },
  },
});

export default theme;
