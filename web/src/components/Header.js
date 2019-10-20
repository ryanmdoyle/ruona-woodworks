import React from 'react';
import styled from '@emotion/styled';

const HeaderStyled = styled.header`
  padding: 0 1rem;
  background-color: #f5f5f5;
  display: flex;
`;

const Header = ({title}) => {
  return (
    <HeaderStyled>
      <h1>{title}</h1>
      <h2>Link 1</h2>
      <h2>Link 3s</h2>
    </HeaderStyled>
  );
};

export default Header;