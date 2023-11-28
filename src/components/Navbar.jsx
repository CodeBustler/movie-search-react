import React from "react";
import Logo from "/favicon.png";

function Navbar() {
	return (
		<nav className="navbar bg-dark text-white" data-bs-theme="dark">
			<div className="container-fluid">
				<a className="navbar-brand fw-bold" href="#">
					<img
						src={Logo}
						alt="Logo"
						width="30"
						height="24"
						className="d-inline-block align-text-top mx-2"
					/>
					Search Movie
				</a>
			</div>
		</nav>
	);
}

export default Navbar;
