import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
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
							gatsbyImage(
								width: 1200
								placeholder:BLURRED
								formats: [AUTO, WEBP, JPG]
								)
						}
					}
				}
			}
		}
	}
	`)
	function ClientCollumn(props) {
	    let indColumnValues = Object.values(props);
		return indColumnValues.map(el => {
			return (
				<a href={"/blog" + el.uri} style={{justifySelf: "stretch"}}>
				  <Container style={{padding: "0", width: "50%"}}>
						<Text as="p">{el.title}</Text>
						<GatsbyImage style={{minHeight: "300px", width: "100%"}} image={el.featuredImage['node'].gatsbyImage} alt={'test'} />
						<img srcset={el.featuredImage['node'].srcSet}/>
					</Container>
				</a>
			)
		});
	}

	const clientArray = data.allWpPost.edges;
	let firstRow = [];
	let secondRow = [];
	clientArray.filter((el, index) => {
		if(index < Math.ceil(clientArray.length / 2)){
			firstRow.push(el['node']);
		} else {
			secondRow.push(el['node']);
		}
	});
  return (
      <Section style={{display: "flex", flexFlow: "column"}}>
      <ClientCollumn {...firstRow}/>
      <ClientCollumn {...secondRow}/>
    </Section>
  )
}
