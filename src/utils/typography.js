import Typography from "typography";

const typography = new Typography({
  baseFontSize: "12px",
  baseLineHeight: 2,
  bodyFontFamily: ["Lato", "sans-serif"],
  bodyWeight: 300,
  googleFonts: [
    {
      name: "Lato",
      styles: ["300", "300i"]
    }
  ],
  headerFontFamily: ["Times New Roman", "serif"],
  scaleRatio: 2,
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    h1: {
      fontFamily: "Lato",
      fontSize: "48px",
      fontStyle: "normal",
      fontWeight: 300,
      textTransform: "uppercase"
    },
    h2: {
      fontStyle: "italic"
    }
  })
});

export default typography;
