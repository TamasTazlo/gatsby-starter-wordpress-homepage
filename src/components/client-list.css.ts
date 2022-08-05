import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { margin, media } from "./ui.css"

export const clientConatiner = style({
  display:"flex",
  flexDirection:"row",
  width:"50%"
})


export const clientRow = style({
  width:"100%"
})

export const imageClientContainer = style({
  ":hover" : {
    opacity: 1,
    color:"#fff"
  },
})

export const overlay = style({
  position: "absolute",
  top: "0px",
  bottom: "0px",
  left: "0px",
  right: "0px",
  height: "100%",
  width:" 100%",
  opacity: 0,
  transition: ".5s ease",
  backgroundColor: "#008CBA",
  opacity:1,
})



