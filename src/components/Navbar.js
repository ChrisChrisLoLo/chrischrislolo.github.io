import React from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
} from "reactstrap";
import {NavLink} from "react-router-dom";

export default class NavbarComp extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.close = this.close.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    close(){
        this.setState({
            isOpen: false
        });
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavLink to="/" className="navbar-brand font-title">
                        UCoursePlus
                    </NavLink>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem onClick={this.close}>
                                <NavLink to="/search/" className="nav-link">Search</NavLink>
                            </NavItem>
                            <NavItem onClick={this.close}>
                                <NavLink to="/scheduleBuilder/" className="nav-link">Schedule Builder</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}