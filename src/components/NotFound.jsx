import { Link } from "react-router-dom";
export default function NotFound() {
    return (
        <div className="text-center py-20">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="mb-6">Trang không tồn tại.</p>
            <Link to="/" className="text-indigo-600 underline">Trang chủ</Link>
        </div>
    )
}