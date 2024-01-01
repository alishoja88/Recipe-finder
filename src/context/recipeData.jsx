import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);
    const [searched, setSearched] = useState(false);
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        }
        window.addEventListener("popstate", handler)
        return () => {
            window.removeEventListener("popstate", handler)
        }
    }, [])

    const Navigate = (to) => {
        window.history.pushState({}, "", to);
        setCurrentPath(to);
    }

    return (
        <AppContext.Provider value=
            {{
                recipes,
                setRecipes,
                searched,
                setSearched,
                Navigate,
                currentPath

            }}>
            {children}
        </AppContext.Provider>
    )
}

