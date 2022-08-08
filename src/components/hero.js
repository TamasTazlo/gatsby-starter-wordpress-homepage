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

  const imgUrl = props.image.url;

  return (
    <Section style={{backgroundImage: 'url('+ imgUrl +')'}} className={startHeroBackground}>
      <Container>
        <Flex className={startHeroContent} gap={4} variant="responsive">
          <Box width="full">
	         	 <h1 className={startHeroHeading}
	         	   dangerouslySetInnerHTML={{
	         	     __html: props.h1,
	         	   }}
	         	 />
            <Subhead as="h2">{props.subhead}</Subhead>
            <Text as="p">{props.text}</Text>
            
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageHeroContent on HomepageHero {
    id
    kicker
    h1: heading
    subhead
    text
    links {
      id
      href
      text
    }
    image {
      id
      alt
      url
    }
  }
`
