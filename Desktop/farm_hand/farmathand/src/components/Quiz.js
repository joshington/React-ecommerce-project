import React, {Component} from 'react';
import {ProductConsumer} from '../context';
import styled from  'styled-components';
import '../App.css'



export default class Sales extends Component {
	render() {
		const {handleChange,value} = this.props;
		return (
			<React.Fragment>
				<div className="container">
					<div className="row mx-auto justify-content-center">

						{/*<h4 className="text-capitalize mx-4">Sales list</h4>*/}
						
						{/*<button className="mx-2">Reports</button>*/}
					</div>
					<section className="mt-0 p-5 border-dashed">
						<div className="row mx-auto justify-content-center">
							
							<a href="https://www.flexiquiz.com/SC/N/7095e2ba-6aea-43f8-83d5-c302d53dec57">
								<button className="btn btn-danger">Play Quiz</button>

							</a>
						
						</div>
						
					</section>
				</div>
			</React.Fragment>
		)
	}
}