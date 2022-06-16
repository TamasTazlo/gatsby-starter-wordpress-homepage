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
  let clientsObject = props;
  console.log({...clientsObject});
	return firstRow.map(el => {
		// console.log(el);
		return (
			<a href={"/blog" + el.uri} style={{justifySelf: "stretch"}}>
				<Container style={{padding: "0", width: "100%"}}>
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
		if(index <= Math.ceil(clientArray.length / 2)){
      // console.log('client: ' + el['node'].title + ' has been places in the first collumn');
			firstRow.push(el['node']);
		} else {
      // console.log('client: ' + el['node'].title + ' has been places in the second collumn');
			secondRow.push(el['node']);
		}
	});
	// console.log('firstRow is: ' + firstRow);
	// console.log('secondRow is: ' + secondRow);
  return (
    <Section>
      <ClientCollumn {...firstRow}/>
      {/* <ClientCollumn {...secondRow}/> */}
    </Section>
  )
	// return firstRow.map(el => {
	// 	console.log(el);
	// 	return (
	// 		<a href={"/blog" + el.uri} style={{justifySelf: "stretch"}}>
	// 			<Container style={{padding: "0", width: "100%"}}>
	// 				<Text as="p">{el.title}</Text>
	// 				<GatsbyImage style={{minHeight: "300px", width: "100%"}} image={el.featuredImage['node'].gatsbyImage} alt={'test'} />
	// 				<img srcset={el.featuredImage['node'].srcSet}/>
	// 			</Container>
	// 		</a>
	// 	)
	// });
}
