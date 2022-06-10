import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
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
} from "./ui"
import {
  startHeroBackground,
  startHeroHeading,
  startHeroContent
} from "./hero.css"

export default function Hero(props) {

  console.log(props);

  return (
    <Section>
      <Container>
        <Flex gap={4} variant="responsive">
          <Box width="full">
            <Text>
              {props.h1}
            </Text>
            <Subhead as="h2">{props.kicker}</Subhead>
            <Text as="p">{props.address}</Text>
            <Text as="p">{props.phone}</Text>
            <Text as="p">{props.email}</Text>
            
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
