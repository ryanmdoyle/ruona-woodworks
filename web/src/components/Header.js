import React from 'react';
import styled from '@emotion/styled';

const HeaderStyled = styled.header`
  padding: 0 1rem;
  display: flex;
  .inner {
    width: 960px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .links {
    display: flex;
    align-items: center;
  }
  .links > h2 {
    margin: 0 1rem;
  }
`;

const Header = ({title}) => {
  return (
    <HeaderStyled>
      <div className='inner'>
        <h1>{title}</h1>
        <div className='links'>
          <h2>Link 1</h2>
          <h2>Link 2</h2>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;