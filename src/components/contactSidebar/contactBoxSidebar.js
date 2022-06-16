import * as React from "react"
import { Container, Section } from  "../ui.css"
import * as styles from "./contactSidebar.css"

function contactBoxSidebar(props) {

  return (
    <Section>
      <Container>
        <p>{props.ContactTitle}</p>
        <h3>{props.ContactSecondTitle}</h3>
        <p>{props.adress}</p>
        <p>{props.city}</p>
        <a>{props.email}</a>
        <a>{props.phoneNumber}</a>
      </Container>
    </Section>
  )
  
}


export default contactBoxSidebar();

