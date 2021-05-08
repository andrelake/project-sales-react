import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm sticky-top">
            <div className={"container-fluid"}>
                <div className={"row-cols-auto mx-auto float-lg-start"}>
                    <FontAwesomeIcon className={"icon-color-secondary"} icon={["fas","dollar-sign"]} />
                    <span className="navbar-brand h1 ms-2">Project Sales</span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
