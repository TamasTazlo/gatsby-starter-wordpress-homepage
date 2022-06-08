import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"
import { colors } from "../colors.css"

export const startHeroBackground = style({
    marginTop:"-90px",
    background:"#f2f2f2",
    height:"50rem",
    textAlign:"center"
  })

  export const startHeroContent = style({
    paddingTop:"190px",
  
  })
  
  export const startHeroHeading = style({
    color: colors.heading,
  })
