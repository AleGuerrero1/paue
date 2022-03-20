import React, {Fragment} from 'react';
import { Link } from "react-router-dom";

function Sidebar() {
    return(
        <Fragment>
            <div id="wrapper">
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                    <Link to="/dashboard">
                        <div className="sidebar-brand d-flex align-items-center justify-content-center">
                            <div className="sidebar-brand-text mx-3">Admin </div>
                        </div>
                    </Link>
                    <hr className="sidebar-divider my-0"/>
                    <li className="nav-item active">
                        <Link to="/dashboard">
                        <div className="nav-link">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span></div>
                        </Link>
                    </li>
                    <hr className="sidebar-divider"/>
                    <div className="sidebar-heading">
                        Registro
                    </div>
                    <li className="nav-item">
                        <Link to="/student/register">
                        <div className="nav-link" href="charts.html">
                            <i className="fas fa-fw fa-graduation-cap"></i>
                            <span>Estudiantes</span></div>
                        </Link>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}

export default Sidebar;