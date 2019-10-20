/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from '@emotion/styled';

import Header from "./Header"
import "./normalize.css"
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const InnerContent = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1rem;
  box-sizing: border-box;
`;

const Layout = ({ children }) => {
  const { title } = useSiteMetadata();

  return (
    <>
      <Header title={title} />
      <InnerContent>{children}</InnerContent>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
