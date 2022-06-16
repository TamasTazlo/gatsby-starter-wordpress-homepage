import { globalStyle, globalKeyframes } from "@vanilla-extract/css"
import { text } from "stream/consumers"
import { theme } from "./theme.css"

globalStyle(".infoTextAboutUs", {
  textAlign: "center",
  lineHeight: 1.5,
  fontSize: 19,
  fontWeight:600,
  maxWidth:500,
  marginLeft:"auto",
  marginRight:"auto"

})

globalStyle(".titleOmOss", {
  textAlign: "center",
  backgroundImage:`linear-gradient(to right, rgba(255, 102, 0, 1)0%, rgba(255, 0, 153, 0.9)100%)`,
  lineHeight: 1.5,
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontSize:66,
})

globalStyle(".workOptionsBox", {
  display:"flex"
  
})

globalStyle(".innerBoxWorkservices", {
  width:"33.33%",
  padding:20,
})

globalStyle(".titleServices", {
  marginTop:"100px",
  marginBottom:"100px",
  textAlign:"center"
})
globalStyle(".servicesinnerTable", {
    display:"flex"
})
globalStyle(".introAboutUsBox", {
  display:"flex"
})
globalStyle(".contactUsBotttom", {
  display:"flex"
})
globalStyle(".contactUsInnerBox", {
  width:"50%",
  padding:20
})










globalStyle(".catNameBox", {
  display:"flex",
})
globalStyle(".catNameBox a", {
  paddingRight:"20px",
})

globalStyle(".archiveBox", {
  display:"flex",
})
globalStyle(".archiveinnerBoxTwo", {
  width:"80%",
})
globalStyle(".archiveinnerBoxOne", {
  width:"20%",
})


globalStyle(".clientNameBox a", {
  paddingRight:"20px",
  width:"50%"
})
globalStyle(".clientNameBox ul", {
  width: "50%",
  float: "left",
  columns: 2,
})





