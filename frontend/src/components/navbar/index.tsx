import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm sticky-top">
            <div className={"container-fluid"}>
                <div className={"row-cols-auto mx-auto float-lg-start"}>
                    <Link to={"/"} className={"text-decoration-none"}>
                        <FontAwesomeIcon className={"icon-color-secondary"} icon={["fas","dollar-sign"]} />
                        <span className="navbar-brand h1 ms-2">Project Sales</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
