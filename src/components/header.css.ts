import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { margin, media } from "./ui.css"

export const desktopHeaderNavWrapper = style({
  position: "relative",
  zIndex: 1,
  display: "none",
  "@media": {
    [media.small]: {
      display: "block",
      paddingTop: theme.space[4],
    },
  },
})

const mobileHeaderNavWrapperBase = style({
  display: "block",
  position: "relative",
  paddingTop: theme.space[3],
  "@media": {
    [media.small]: {
      display: "none",
    },
  },
})

export const mobileHeaderNavWrapper = styleVariants({
  open: [
    mobileHeaderNavWrapperBase,
    {
      background: theme.colors.primary,
    },
  ],
  closed: [mobileHeaderNavWrapperBase],
})

export const mobileNavSVGColorWrapper = styleVariants({
  primary: [{ color: theme.colors.primary }],
  reversed: [{ color: theme.colors.primary }],
})


export const mobileNavOverlay = style({
  position: "absolute",
  width: "100vw",
  height: "100vh",
  paddingTop: theme.space[4],
  background: `linear-gradient(to right, rgba(255, 102, 0, 1)0%, rgba(255, 0, 153, 0.9)100%)`,
  marginTop:"-90px",
  // "@media": {
  //   [media.small]: {
  //     display: "none",
  //   },
  // },
})

export const mobileNavLink = style({
  display: "block",
  color: theme.colors.background,
  fontSize: theme.fontSizes[4],
  paddingTop: theme.space[2],
  paddingBottom: theme.space[2],
  paddingLeft: theme.space[4],
  paddingRight: theme.space[4],
})

export const listMobileMeny = style({
  flexDirection:"column",
  textAlign:"center",
  marginTop:"90px"
})