import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import ClientList from './client-list'
import {
  Box,
  ButtonList,
  Container,
  Flex,
  Heading,
  Kicker,
  Section,
  Subhead,
  Text,
  NavLink,
} from "./ui"
import {
  startHeroBackground,
  startHeroHeading,
  startHeroContent,
  startHeroAddress,
  startHeroAddressText,
} from "./hero.css"
import {
  clientBox,
  partnerTitleStart
} from "./hero2.css"

export default function Hero(props) {

  let telURL = "tel:" + props.phone;
  let emailURL = "mailto:" + props.email;

  return (
    <Section class={clientBox}>
      <h2 class={partnerTitleStart}>En partner inom reklam och kommunikation för en ny era
</h2>

      <Container>    
        <Flex style={{alignItems: "baseline"}} gap={4} variant="responsive">
          <Box width="quarter">
            <Text  >
              {props.h1}
            </Text>
            <Subhead as="h2">{props.kicker}</Subhead>
            <Container className={startHeroAddress}>
            {props.address.split(',').map(el =>
              <Text as="p" className={startHeroAddressText}>{el}</Text>
            )}
            </Container>
            <Text as="p"><a href={emailURL}>{props.email}</a></Text>
            <Text as="p"><a href={telURL}>{props.phone}</a></Text>
          </Box>
          <Box  width="full">
            <ClientList/>
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageHeroContent2 on HomepageHero2 {
    id
    kicker
    h1: heading
    address
    phone
    email
  }
`
