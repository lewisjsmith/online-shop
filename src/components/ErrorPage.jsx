import { Link } from "react-router-dom";

function ErrorPage() {

    return (
        <p>
            Uh oh! It looks like you're off-piste! 
            <Link to={"home"}>Return Home</Link>
        </p>
    )
}

export default ErrorPage;