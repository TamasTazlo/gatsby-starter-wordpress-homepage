import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import "./client-list.css"

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

import { clientConatiner } from "./client-list.css"


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
				<div  className={clientConatiner}>
				<a href={"/blog" + el.uri} style={{justifySelf: "stretch"}}>
				  <Container className="imageClientContainer" style={{padding: "0"}}>
						<GatsbyImage  style={{marginBottom:"20px",maxHeight: "270px", minWidth: "450px"}} image={el.featuredImage['node'].gatsbyImage} alt={'test'} />
						<div className="overlay">
							<Text className="textClient" as="p">{el.title}</Text>
						</div>
						<img srcset={el.featuredImage['node'].srcSet}/>
					</Container>
					
				</a>
				</div>
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
      <Section style={{display: "flex", flexFlow:"interheit"}}>
	   <div>
          <ClientCollumn  {...firstRow}/>
	   	</div>
		<div>
      	  <ClientCollumn {...secondRow}/>
	    </div>
    </Section>
  )
}
