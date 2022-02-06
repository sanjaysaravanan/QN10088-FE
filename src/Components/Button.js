import styled from 'styled-components';

export const ButtonContainer = styled.button`
	background: var(--mainblue);
	font-size: 1.4rem;
	font-family: 'Fredoka One', cursive;
	color: white;
	text-transform: uppercase;
	border: white 3px;
    border-radius: 0.4rem;
    padding: 0.3rem
	cursor: pointer;
	display: inline-block;
	transition: all 0.4s ease-in-out;
	&:hover {
		background: #5555ee;
	}
	&:focus {
		outline: none;
	}
`;
