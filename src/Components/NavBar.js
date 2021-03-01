import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NavBar extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg">
					<h1>Food App</h1>
					<div className="collapse navbar-collapse ml-0" id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto px-5">
							<li className="nav-item active px-2">
								<Link className="nav-link" to="/">Home</Link>
							</li>
							<li className="nav-item px-2">
							<Link className="nav-link" to="/food">Food</Link>
								
							</li>
							<li className="nav-item px-2">
							<Link className="nav-link" to="/post">Articles</Link>
								
							</li>
						</ul>
					</div>
				</nav>
			</div>
		)
	}
}

export default NavBar
