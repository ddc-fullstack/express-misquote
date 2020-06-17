import React from "react"
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import NavLink from "react-bootstrap/NavLink";
import {Link} from "react-router-dom";

export const NavBar = () => (
	<>
		<header>
			<Navbar bg="dark" expand="sm" variant="dark">
				<Link  to="/"><Navbar.Brand>Infinity ÷ -0</Navbar.Brand> </Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav"/>
				<Navbar.Collapse>
					<Navbar.Text>
						Signed in as: <a href="/">Foo Bar Baz</a>
					</Navbar.Text>
					<NavDropdown id="page-drop-down" className="font-weight-light font-italic" title="CLICK ME"   >
						<NavLink>
							<Link exact to="/about-us">
								About Us <FontAwesomeIcon icon="user-circle"/>
							</Link>
						</NavLink>
						<NavLink>
							<Link exact to="/posts">
								Posts <FontAwesomeIcon icon="pencil-alt"/>
							</Link>
						</NavLink>
					</NavDropdown>
				</Navbar.Collapse>
			</Navbar>
		</header>
	</>
);

