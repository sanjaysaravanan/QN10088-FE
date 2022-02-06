import styled from 'styled-components';

export const Nav = styled.nav`
	background: #2a2a72;
	/* border-bottom: var(--mainblue) !important; */
	.nav-link {
		color: var(--mainwhite) !important;
		font-size: 3rem;
		text-transform: uppercase;
		font-family: 'Fredoka one', cursive;
		/* font-style: italic; */
	}

	@media (max-width: 576px) {
		.navbar-nav {
			flex-direction: row !important;
		}
	}
`;
