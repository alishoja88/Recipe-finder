import Link from "./Link";
const Side = () => {
    const Links = [
        { label: "ingredients", path: "/ingredients" },
    ];

    const renderLink = Links.map((link) => {
        return <Link key={link.label} to={link.path}>{link.label}</Link>
    })
    return (
        <div>
            {renderLink}
        </div>
    )
}

export default Side;