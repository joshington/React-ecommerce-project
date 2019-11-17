import React, {Component} from 'react';
import {ProductConsumer} from '../context';
import styled from  'styled-components'
import '../App.css'


export default class Modal extends Component {
	render(){
		// const {openModal} = value;
		// const {id, name,price} = value.products;
		return (
			<ProductConsumer>
				{(value) => (
					// 
					<ModalContainer>
						<div className="container">
							<div className="row">
								<div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center
								 	text-capitalize">
									<label data-error="wrong" data-success="right"></label>
									<input type="text" className="form-control validate" />
									<label>Select product from the list below</label>
									<input type="text" className="form-control validate" />
								</div>
							</div>
						</div>
					</ModalContainer>
				)}
			</ProductConsumer>

		)
	}
}

const ModalContainer = styled.div`
	position:fixed;
	top:0;
	left:0;
	right:0;
	bottom:0;
	background:rgba(0,0,0,0.3)
	display;flex;
	align-items:center;
	justify-content:center;
	justify-content: center;
	#modal {
		background: var(--mainWhite);
	}
`;

