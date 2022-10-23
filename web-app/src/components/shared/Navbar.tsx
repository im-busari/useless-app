import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">UseLess</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink to="/dashboard" className={isActive => "nav-link px-2" + (!isActive ? " unselected" : "") }>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/leadarboard" className={isActive => "nav-link px-2" + (!isActive ? " unselected" : "") }>
                                Leaderboard
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/tasks" className={isActive => "nav-link px-2" + (!isActive ? " unselected" : "") }>
                                Tasks
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/savings" className={isActive => "nav-link px-2" + (!isActive ? " unselected" : "") }>
                                Savings
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/consumption" className={isActive => "nav-link px-2" + (!isActive ? " unselected" : "") }>
                                Consumption
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        
    )
}

export default Navbar;
{/* 
<div className="">
            <div className="container">
                <div className="d-flex">
                    <div className="mr-auto p-2">React-Bootstrap</div>
                    <div className="d-flex">
                        <NavLink to="/" className={isActive => "nav-link px-2" + (!isActive ? " unselected" : "") }>
                            Home
                        </NavLink>
                        <NavLink to="/" className={isActive => "nav-link px-2" + (!isActive ? " unselected" : "") }>
                            Tasks
                        </NavLink>
                        <NavLink to="/" className={isActive => "nav-link px-2" + (!isActive ? " unselected" : "") }>
                            Savings
                        </NavLink>
                        <NavLink to="/" className={isActive => "nav-link px-2" + (!isActive ? " unselected" : "") }>
                            Leadarboard
                        </NavLink>
                        <NavLink to="/" className={isActive => "nav-link px-2" + (!isActive ? " unselected" : "") }>
                            Consumption
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
 */}