import Typography from "typography"

const typography = new Typography({
  googleFonts: [
    {
      name: "Montserrat",
      styles: ["400", "500", "600", "700"]
    }
  ],
  bodyFontFamily: ["Montserrat", "sans-serif"],
  bodyColor: "#fff",
  headerFontFamily: ["Montserrat", "sans-serif"],
  overrideStyles: ({ options, styles }) => {
    return {
      h1: {
        fontSize: "50px",
        fontWeight: 600,
        lineHeight: "61px",
      },
      h2: {
        fontSize: "40px",
        lineHeight: "49px",
        fontWeight: 600,
      },
      h3: {
        fontSize: "25px",
        fontWeight: 600
      },
      p: {
        lineHeight: "34px",
        fontSize: "20px",
        fontWeight: 500
      }
    }
  }
})
typography.injectStyles()
export default typography
