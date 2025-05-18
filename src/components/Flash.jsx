import { useEffect, useState } from "react";
export default function Flash({ msg }) {
    const [show, setShow] = useState(true);
    useEffect(() => {
        const t = setTimeout(() => setShow(false), 3000);
        return () => clearTimeout(t);
    }, []);
    if (!show) return null;
    return <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow">{msg}</div>;
}