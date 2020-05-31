// some options may be initialized in the "croco.config.js"
// these options are marked with comments -> "//craco.config"
// please make same changes on craco.config.js

const primaryColor = "#309bf2"; // craco.config
const primaryFocus = "#309bf2";
const secondaryColor = "#ff4b42";

// ** INDEX **
// MAIN
// COMPONENTS
// PAGES

// Use mobile values for < 992px

const theme = {
  // MAIN
  main: {
    primaryColor,
    primaryFocus,
    secondaryColor,

    horizontalPadding: "5%",
    borderRadius: "4px",

    shadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    shadowHover: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",

    textFontSize: "18px",
    textFontSizeMobile: "initial",
    h1FontSize: "4vw",
    h1FontSizeMobile: "7vw",
    h2FontSize: "1.5vw",
    h2FontSizeMobile: "4vw",

    textColor: "#000",
    lightTextColor: "#fff",
  },
  // COMPONENTS
  header: {
    backgroundColor: "#FFF",
    height: "80px",
  },
  card: {
    background: "#fff",
    margin: "10px",
    padding: "10px",
    borderRadius: "5px",
  },

  // PAGES
};
export default theme;
