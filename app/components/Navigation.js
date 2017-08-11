import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, Location } from 'react-router';

class Navigation extends Component {

    componentDidMount() {
        const { menu } = this.refs;
        $(menu).metisMenu();
    }

    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }

    secondLevelActive(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
    }

    render() {
        return (
            <nav className="navbar-default navbar-static-side" role="navigation">
                    <ul className="nav metismenu" id="side-menu" ref="menu">
                        <li className="nav-header">
                            <div className="dropdown profile-element"> <span>
                             </span>
                                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                            <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">SCM Pulse</strong>
                             </span>

                            </span> </a>
                                <ul className="dropdown-menu animated fadeInRight m-t-xs">
                                    <li><a href="#"> Logout</a></li>
                                </ul>
                            </div>
                            <div className="logo-element">
                                SCM
                            </div>
                        </li>
                        <li className={this.activeRoute("/main")}>
                            <Link to="/main"><i className=" "></i> <span className="nav-label">Home</span></Link>
                        </li>
                        <li className={this.activeRoute("/minor")}>
                            <Link to="/minor"><i className=" "></i> <span className="nav-label">Page 1</span></Link>
                        </li>



                        <li className={this.activeRoute("/minor")}>
                            <Link to="/minor"><i className=" "></i> <span className="nav-label">Page 2</span></Link>
                        </li>


                        <li className={this.activeRoute("/minor")}>
                            <Link to="/minor"><i className=""></i> <span className="nav-label">Page 3</span></Link>
                        </li>







                    </ul>

            </nav>
        )
    }
}

export default Navigation
