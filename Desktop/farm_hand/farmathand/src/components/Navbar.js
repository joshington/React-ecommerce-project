import React, {Component} from 'react'
import styled from "styled-components";
export default class Navbar extends Component {
	render() {
		return (
			<NavWrapper className="navbar  navbar-expand-sm  navbar-dark px-sm-5 justify-content-end">
				<div>
					<button className="btn btn-danger ">Donate!!!</button>
				</div>
			</NavWrapper>
		)
	}
}

const NavWrapper = styled.nav`
	background: var(--mainDark);

	
`;
