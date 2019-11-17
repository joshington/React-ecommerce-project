import React, {Component} from 'react';
import styled from  'styled-components'

export default class Equipment extends Component {
  render(){
    return (
   		<div>
   			<NavWrapper >
   				<div className="container">
   					<div className="row">
   						<div>
   							<h5 className="mx-auto">equipment</h5>
   							<h5 className="shadow p-3 mb-5 bg-white rounded"><strong>help centre</strong></h5>
   						</div>
   					</div>
   					<div className="row justify-content-center align-text-center">
   						<SectionBorder>
   							<button className="btn btn-danger justify-content-end">+ Create Equipment here</button>
   						</SectionBorder>
   					</div>

   				</div>
   				

   			</NavWrapper>
   		</div>
    );
  }
}
const NavWrapper = styled.nav`
	background: var(--mainGrey);
	text-transform: capitalize;
	.nav-link{
		font-size:1.3rem;
		/*1rem is 16px*/
		text-transform: capitalize !important;
	}
`;

const SectionBorder = styled.section`
	border-style: dashed;
	border-color: black;	
	padding:40px;
	margin-top: 0px;
  margin-bottom: 10px;
`;