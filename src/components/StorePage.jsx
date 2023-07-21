import { Outlet, useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";

export default function StorePage() {

    const { filter } = useParams();

    return (
        <div>

            <p>This is the store page.</p>

            {filter === "men" ? (
                <div>
                    Men!
                </div>
            ) : filter === "women" ? (
                <div>
                    Women!
                </div>
            ) : filter === "accessories" ? (
                <div>
                    Accessories!
                </div>
            ) : (
                <div>
                    <ErrorPage />
                </div>
            )}

        </div>
    )
}