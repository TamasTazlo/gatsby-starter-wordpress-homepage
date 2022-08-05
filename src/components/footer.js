import * as React from "react"
import {
  Twitter,
  Twitch,
  Instagram,
  Facebook,
  Youtube,
  GitHub,
} from "react-feather"
import {
  Container,
  Flex,
  FlexList,
  Box,
  Space,
  NavLink,
  Text,
  IconLink,
  VisuallyHidden,
} from "./ui"
import BrandLogo from "./brand-logo"
import { footerBox } from "./footer.css"

const socialMedia = {
  TWITTER: {
    url: "https://twitter.com",
    name: "Twitter",
    icon: <Twitter />,
  },
  INSTAGRAM: {
    url: "https://instagram.com",
    name: "Instagram",
    icon: <Instagram />,
  },
  FACEBOOK: {
    url: "https://facebook.com",
    name: "Facebook",
    icon: <Facebook />,
  },
  YOUTUBE: {
    url: "https://youtube.com",
    name: "YouTube",
    icon: <Youtube />,
  },
  GITHUB: {
    url: "https://github.com",
    name: "GitHub",
    icon: <GitHub />,
  },
  TWITCH: {
    url: "https://twitch.tv",
    name: "Twitch",
    icon: <Twitch />,
  },
  LINKEDIN: {
    url: "https://www.linkedin.com/",
    name: "LinkedIn",
  },
}

const getSocialURL = ({ service, username }) => {
  const domain = socialMedia[service]?.url
  if (!domain) return false
  return `${domain}/${username}`
}

const getSocialIcon = ({ service }) => {
  return socialMedia[service]?.icon
}

const getSocialName = ({ service }) => {
  return socialMedia[service]?.name
}

const data = {
  links: [
    {
      id: 0,
      href: "https://se.linkedin.com/company/enestedtco",
      text: "LinkedIn",
    },
    {
      id: 1,
      href: "https://www.facebook.com/enestedtco/",
      text: "Facebook",
    },
    {
      id: 2,
      href: "https://twitter.com/EnestedtCo",
      text: "witter",
    },
  ],
  meta: [
    {
      id: 0,
      href: "/terms",
      text: "Om cookies",
    },
    {
      id: 1,
      href: "/privacy",
      text: "Integritetspolicy",
    },
  ],
  socialLinks: [
    {
      service: "LINKEDIN",
      username: "gatsbyjs",
    },
    {
      service: "FACEBOOK",
      username: "gatsbyjs",
    },
    {
      service: "TWITTER",
      username: "gatsbyjs",
    },
  ],
  copyright: "Copyright © Enestedt & Co 2022",
}

export default function Footer(props) {
  const { links, meta, socialLinks, copyright } = data

  return (
    <Box className={footerBox} as="footer" paddingY={4}>
      <Container>
        <Space size={5} />
        <Flex variant="start" responsive>
        <BrandLogo />
        <Space size={1} />
          <FlexList variant="start" responsive>
            {links &&
              links.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.href}>{link.text}</NavLink>
                </li>
              ))}
          </FlexList>
          <Space />
          <Text variant="small">{copyright}</Text>
          <FlexList>
            {meta &&
              meta.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.href}>
                    <Text variant="small">{link.text}</Text>
                  </NavLink>
                </li>
              ))}
          </FlexList>
        </Flex>
      </Container>
      <Space size={3} />
    </Box>
  )
}
