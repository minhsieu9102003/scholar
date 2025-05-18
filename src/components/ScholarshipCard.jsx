import { Link } from "react-router-dom";
export default function ScholarshipCard({ item }) {
    return (
        <div className="bg-white rounded shadow hover:shadow-lg transition p-4 flex flex-col">
            <img src={item.images[0]} alt="thumb" className="aspect-video object-cover rounded mb-3" />
            <h3 className="font-semibold text-lg mb-2 line-clamp-2">{item.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{item.type === "scholarship" ? "Giá trị" : "Lương"}: {item.amount.toLocaleString()} {item.unit}</p>
            <p className="text-xs text-gray-500 mb-4">Khóa: {item.cohorts.join(", ")} &nbsp;|&nbsp; Ngành: {item.departments[0]}</p>
            <Link to={`/listing/${item.id}`} className="mt-auto inline-block bg-indigo-600 text-white text-center py-2 rounded">Chi tiết</Link>
        </div>
    );
}