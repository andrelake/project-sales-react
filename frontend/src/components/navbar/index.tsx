import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() {
    return (
        <div className={"d-flex flex-row"}>
            <nav className="navbar navbar-light bg-light w-100">
                <FontAwesomeIcon className={"icon-color-secondary ms-sm-3"} icon={["fas","dollar-sign"]} />
                <span className="navbar-brand mb-0 h1">Project Sales</span>
            </nav>
        </div>
    );
}

export default Navbar;
