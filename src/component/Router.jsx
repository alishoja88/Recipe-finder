import { useContext } from "react";
import { AppContext } from "../context/recipeData";

const Router = ({ path, children }) => {
    const { currentPath } = useContext(AppContext);

    if (path === currentPath) {
        return children;
    }
    return null;
}
export default Router;