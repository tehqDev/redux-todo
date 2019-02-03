import React from 'react';
import styled from 'styled-components';
import Octicon, { MarkGithub } from '@githubprimer/octicons-react';

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	a {
		color: black;
	}
`;

const StyledFooter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-top: 5px;
	border-bottom: 0px;
	border-right: 0px;
	border-left: 0px;
	border-color: lightblue;
	margin: 10px;
	padding: 15px;
	border-style: solid;
`;

const Footer = () => {
	return (
		<StyledFooter>
			<div>
				<Container>
					<a target="_blank" href="https://github.com/tehqDev/redux-todo">
						<Octicon size="medium" icon={MarkGithub} />{' '}
					</a>
				</Container>
				<div>
					made with{' '}
					<a target="_blank" href="https://reactjs.org">
						React
					</a>{' '}
					:)
				</div>
			</div>
		</StyledFooter>
	);
};

export default Footer;
