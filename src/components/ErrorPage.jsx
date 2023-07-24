import { Link } from "react-router-dom";

function ErrorPage() {

    return (
        <>
            <p>Uh oh! It looks like you're off-piste!</p>
            <Link replace to={"/"}>Return Home</Link>
        </>
    )
}

export default ErrorPage;