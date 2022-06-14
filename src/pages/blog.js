import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { Container, Section, Subhead, Text } from "../components/ui"
import Layout from "../components/layout"
import BreadCrumb from "../components/BreadCrumb"
import ArchiveSidebar from "../components/archiveSidebar"
import Pagination from "../components/Pagination"

import {
  Wrapper,
  ContentWrapper,
  PageContent,
  StyledH2,
  StyledDate,
  StyledReadMore,
} from "../templates/archive.styles"

export default function archiveTemplate(props){
  const archive = props.data.allWpPost
  console.log(archive);
    return(
      <Layout>
        <Section>
        	<Container>
            <Subhead as="h1">Våra klienter</Subhead>
        		{archive.edges.map(el => {
                  let link = '/blog' + el.node.uri;
        		  return <Text as="p"><a href={link}>{el.node.title}</a></Text>;
        		})}
        	</Container>
        </Section>
      </Layout>
    )
}

export const pageQuery = graphql`
 {
  allWpPost{
      edges {
        node {
          id
          title
          excerpt
          uri
          slug
          date(formatString: "DD MM YYYY")
        }
      }
    }
  }
`
/* Alternative query to fetch posts belonging to a certain category
 * allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "Client"}}}}}) {
    edges {
      node {
        title
        id
      }
    }
  }
*/
