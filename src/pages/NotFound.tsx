import {Link} from "react-router";

const NotFound = () => {
    return (
        <>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link to={"/"}>
                <button>
                    Redirect To Home
                </button>
            </Link>
        </>
    );
};

export default NotFound;
