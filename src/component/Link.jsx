import { useContext } from "react";
import { AppContext } from "../context/recipeData";

const Link = ({ to, children }) => {
    const { Navigate } = useContext(AppContext);

    const handelClick = (event) => {
        if (event.ctrlKey || event.metaKey) {
            return;
        }
        event.preventDefault();
        Navigate(to)
    }
    return (
        <a href={to} onClick={handelClick}>{children}</a>
    )
}

export default Link;