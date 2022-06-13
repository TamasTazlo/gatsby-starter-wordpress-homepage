import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"
import { colors } from "../colors.css"

export const startHeroBackground = style({
    marginTop:"-90px",
    background:"#f2f2f2",
    height:"100vh",
    textAlign:"center",
    transform:"scale(1.02041)"
  })

  export const startHeroContent = style({
    paddingTop:"190px",
  
  })
  
  export const startHeroHeading = style({
    color: colors.heading,
    fontSize: theme.fontSizes[7]
  })

  export const startHeroAddress = style({
    paddingLeft:"0",
    marginBottom: theme.space[3],
  })

  export const startHeroAddressText = style({
    marginBottom:"5px",
  })
