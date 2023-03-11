import React from "react"
import styled from "styled-components"
import CourseSettings from "../../course-settings"
import { Helmet } from "react-helmet"

import BannerImage from "../images/banner.jpg"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"

const BannerWrapper = styled.header`
  height: 30rem;
  max-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  background-color: #c0392b;
  background-position: 50% 50%;
  background-image: url(${BannerImage});
  background-size: cover;
  text-align: right;
  h1 {
  }
  h2 {
  }
`

const Heading = styled.div`
  font-family: "Press Start 2P", "Roboto Slab", -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, Noto Sans,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji";
  font-weight: 500;
  font-size: 1rem;
  color: #c0392b;
  background: white;
  padding: 0.5rem;
  margin: 1rem;
  text-align: center;
  @media only screen and (min-width: 720px) {
    font-size: 2rem;
  }
`

const SubHeading = styled.div`
    font-family: 'Roboto Slab', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, Noto Sans, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    font-weight: 500;
    color: #c0392b;
    background: white;
    padding .5rem;
    font-size: 0.7rem;
    margin: 0 1rem;
    text-align: center;
    @media only screen and (min-width: 720px) {
       font-size: 1.4rem;
	}
`

const Brace = styled.span`
  color: steelblue;
`

const Banner = () => (
  <BannerWrapper>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P"
        rel="stylesheet"
      />
    </Helmet>
    <Heading>
      <Brace>&lt;</Brace>
      {CourseSettings.default.name}
      <Brace>&gt;</Brace>
    </Heading>
    <SubHeading>{CourseSettings.default.subtitle}</SubHeading>
  </BannerWrapper>
)

export default withSimpleErrorBoundary(Banner)
