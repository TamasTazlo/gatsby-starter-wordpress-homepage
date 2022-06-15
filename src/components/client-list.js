import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Container,
  Section,
  FlexList,
  Text,
  Kicker,
  Heading,
  Subhead,
  Box,
  Icon,
  LinkList,
} from "./ui"

export default function ClientList() {
  const data = useStaticQuery(graphql`
    {
      allWpPost {
        edges {
          node {
            id
            title
            excerpt
            uri
            slug
            date(formatString: "DD MM YYYY")
            featuredImage {
              node {
                srcSet
              }
            }
          }
        }
      }
    }
  `)
  const clientArray = data.allWpPost.edges;
  clientArray.map(el => {
    console.log(el['node'].title);
  })
  return clientArray.map(el => {
  	return (
  	  <Section>
  	    <Container>
  	        <Text as="p">{el["node"].title}</Text>
  	        <Text as="p">{el["node"].id}</Text>
  	    </Container>
  	  </Section>
  	)
  });
}
