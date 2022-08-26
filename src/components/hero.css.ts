import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { colors } from "../colors.css"

export const startHeroBackground = style({
    // marginTop:"-90px",
    background:"#f2f2f2",
    height:"100vh",
    textAlign:"center",
    opacity: 1,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "table",
    width: "100%",
    top: 0,
    position: "fixed",
    zIndex:-10
  })

  export const startHeroContent = style({
    paddingTop:"190px",
  })
  
  export const startHeroHeading = style({
    color: colors.heading,
    fontSize: theme.fontSizes[8],
    fontWeight: 600
  })

  export const startHeroAddress = style({
    paddingLeft:"0",
    marginBottom: theme.space[3],
  })

  export const startHeroAddressText = style({
    marginBottom:"5px",
  })
