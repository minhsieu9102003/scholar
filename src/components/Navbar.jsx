import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <header className="bg-indigo-600 text-white">
            <div className="container mx-auto flex items-center justify-between p-4">
                <Link to="/" className="text-xl font-semibold">Scholar&nbsp;Finder</Link>
            </div>
        </header>
    );
}