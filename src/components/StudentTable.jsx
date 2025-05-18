import { useParams, Link } from "react-router-dom";
import { students } from "../data/students";
export default function StudentTable() {
    const { id } = useParams();
    const list = students[id] || [];
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Danh sách sinh viên đã nhận</h2>
            <table className="w-full border">
                <thead className="bg-gray-100">
                    <tr className="text-left">
                        <th className="p-2 border">Mã SV</th>
                        <th className="p-2 border">Họ tên</th>
                        <th className="p-2 border">Ngành</th>
                        <th className="p-2 border">Khóa</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(s =>
                        <tr key={s.id} className="odd:bg-white even:bg-gray-50">
                            <td className="p-2 border">{s.id}</td>
                            <td className="p-2 border">{s.name}</td>
                            <td className="p-2 border">{s.dept}</td>
                            <td className="p-2 border">{s.cohort}</td>
                        </tr>)
                    }
                </tbody>
            </table>
            <Link to={`/listing/${id}`} className="inline-block mt-6 text-indigo-600 underline">← Quay lại chi tiết</Link>
        </div>
    );
}