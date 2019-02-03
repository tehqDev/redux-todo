import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  margin: 10px
  background: lightblue
  padding: 10px
  border-radius: 5px
`;

const Header = ({ title }) => {
	return <StyledHeader>{title}</StyledHeader>;
};

export default Header;
