import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import '../App.css';
export default class Sidebar  extends Component {
	render() {
		return (
			<div  id="viewport">
				{/*side bar*/}
				<div id="sidebar">
					<Link to="/"><header style={{color:"white",display:"block"}}>Rhino Conservation</header></Link>
					<ul className="nav">
						<li id="new-link">
							<Link to="/dashboard" className="mx-5 mt-4 py-2 justify-content-center" style={{color:"white"}}>
								<i className="fas fa-"></i>
								Dashboard
							</Link>
							<hr  width="100%" />
							<Link to="/faq" className="mx-5 mt-4 py-2 justify-content-center" style={{color:"white"}}>
								<i className="fas fa-"></i>
								FAQ
							</Link>
							<hr width="100%" />
							<Link to="/gallery" className="mx-5 mt-4 py-2 justify-content-center" style={{color:"white"}}>
								<i className="fas fa-"></i>
								Gallery
							</Link>
							<hr />
							<Link to="/contact" className="mx-5 mt-4 py-2 justify-content-center" style={{color:"white"}}>
								<i className="fas fa-"></i>
								Contact 
							</Link>
							<hr width="100%" />
							<Link to="/quiz" className="mx-5 mt-4 py-2 justify-content-center" style={{color:"white"}}>
								<i className="fas fa-"></i>
								Quiz
							</Link>
							<hr width="100%" />
						</li>
					</ul>
				</div>
			{/*content*/}
				<div id="content">
					<div  className="p-2 mx-5">
						<h6>Dashboard</h6>
					</div>
					<hr/>
				</div>
			</div>
		)
	}
}

